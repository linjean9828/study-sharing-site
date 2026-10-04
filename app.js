const cards = [...document.querySelectorAll(".article-card")];
const filters = [...document.querySelectorAll(".filter-button")];
const searchInput = document.querySelector("#search-input");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const savedToggle = document.querySelector("#saved-toggle");
const savedCount = document.querySelector("#saved-count");
const toast = document.querySelector("#toast");
let activeFilter = "全部";
let savedOnly = false;
let toastTimer;

let savedArticles = getSavedArticles();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2300);
}

function updateSavedUI() {
  savedCount.textContent = String(savedArticles.size);
  document.querySelectorAll("[data-bookmark]").forEach((button) => {
    const isSaved = savedArticles.has(button.dataset.bookmark);
    button.setAttribute("aria-pressed", String(isSaved));
  });
  savedToggle.setAttribute("aria-pressed", String(savedOnly));
  updateInsights();
}

function renderCards() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-Hant");
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesCategory = activeFilter === "全部" || card.dataset.category === activeFilter;
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase("zh-Hant");
    const matchesSearch = !query || searchableText.includes(query);
    const matchesSaved = !savedOnly || savedArticles.has(card.querySelector("[data-bookmark]").dataset.bookmark);
    const isVisible = matchesCategory && matchesSearch && matchesSaved;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} 篇文章`;
  emptyState.hidden = visibleCount > 0;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((filter) => {
      const isSelected = filter === button;
      filter.classList.toggle("selected", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);

// 使用事件委派，讓動態產生的總覽表收藏按鈕也能運作
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-bookmark]");
  if (!button) return;
  const id = button.dataset.bookmark;
  if (savedArticles.has(id)) {
    savedArticles.delete(id);
    showToast("已從收藏移除");
  } else {
    savedArticles.add(id);
    showToast("已加入我的收藏");
  }

  try {
    storeSavedArticles(savedArticles);
  } catch (error) {
    savedArticles = getSavedArticles();
    showToast("無法儲存收藏，請檢查瀏覽器的儲存設定");
    console.error("無法儲存收藏清單：", error);
  }
  updateSavedUI();
  renderCards();
});

savedToggle.addEventListener("click", () => {
  savedOnly = !savedOnly;
  savedToggle.setAttribute("aria-pressed", String(savedOnly));
  savedToggle.querySelector("span:nth-child(2)").textContent = savedOnly ? "全部文章" : "我的收藏";
  if (savedOnly) {
    document.querySelector("#articles").scrollIntoView({ behavior: "smooth" });
    showToast(savedArticles.size ? `正在顯示 ${savedArticles.size} 篇收藏文章` : "還沒有收藏文章，按下卡片上的書籤即可收藏");
  }
  renderCards();
});

// 文章頁在其他分頁變更收藏時，同步更新列表
window.addEventListener("storage", (event) => {
  if (event.key !== STORAGE_KEY) return;
  savedArticles = getSavedArticles();
  updateSavedUI();
  renderCards();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

/* ---------- 文章總覽與選單 ---------- */
const bookmarkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.75 4.75A1.75 1.75 0 0 1 8.5 3h7A1.75 1.75 0 0 1 17.25 4.75V21L12 17.5 6.75 21V4.75Z"/></svg>';
const articleMeta = cards.map((card) => ({
  id: card.querySelector("[data-bookmark]").dataset.bookmark,
  title: card.querySelector(".card-title").textContent.trim(),
  category: card.dataset.category,
  minutes: Number(card.querySelector(".read-time").dataset.minutes) || 0
}));

function buildOverview() {
  const body = document.querySelector("#overview-body");
  body.replaceChildren(...articleMeta.map((item) => {
    const row = document.createElement("tr");

    const category = document.createElement("td");
    const label = document.createElement("span");
    label.className = "category-label";
    label.textContent = item.category;
    category.append(label);

    const title = document.createElement("td");
    const titleLink = document.createElement("a");
    titleLink.className = "row-title";
    titleLink.href = articleUrl(item.id);
    titleLink.target = "_blank";
    titleLink.rel = "noopener";
    titleLink.textContent = item.title;
    title.append(titleLink);

    const time = document.createElement("td");
    time.className = "row-time col-time";
    time.textContent = `${item.minutes} 分鐘`;

    const date = document.createElement("td");
    date.className = "row-date";
    const updated = document.createElement("time");
    updated.dateTime = articles[item.id].updated;
    updated.textContent = formatDate(articles[item.id].updated);
    date.append(updated);

    const saved = document.createElement("td");
    const bookmark = document.createElement("button");
    bookmark.className = "row-bookmark";
    bookmark.type = "button";
    bookmark.dataset.bookmark = item.id;
    bookmark.setAttribute("aria-label", `收藏文章：${item.title}`);
    bookmark.innerHTML = `${bookmarkIcon}<span>收藏</span>`;
    saved.append(bookmark);

    row.append(category, title, time, date, saved);
    return row;
  }));
  document.querySelector("#overview thead th:nth-child(3)").classList.add("col-time");
}

function updateInsights() {
  const total = articleMeta.length;
  const saved = articleMeta.filter((item) => savedArticles.has(item.id)).length;
  document.querySelector("#progress-text").textContent = `${saved} / ${total}`;
  document.querySelector("#progress-fill").style.width = `${total ? (saved / total) * 100 : 0}%`;
  document.querySelectorAll(".row-bookmark").forEach((button) => {
    button.querySelector("span").textContent = savedArticles.has(button.dataset.bookmark) ? "已收藏" : "收藏";
  });
}

function startReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");
function setMenu(open) {
  mainNav.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
}
menuButton.addEventListener("click", () => setMenu(!mainNav.classList.contains("open")));
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.querySelectorAll("[data-dates]").forEach((element) => {
  element.replaceChildren(...dateParts(articles[element.dataset.dates]));
});
buildOverview();
updateSavedUI();
renderCards();
startReveal();
