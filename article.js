// 文章全文頁：依網址的 ?id= 讀取 articles.js 的資料並呈現
const articleId = new URLSearchParams(window.location.search).get("id");
const article = Object.hasOwn(articles, articleId) ? articles[articleId] : null;
const bookmarkButton = document.querySelector("#article-bookmark");
const toast = document.querySelector("#toast");
let savedArticles = getSavedArticles();
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2300);
}

function updateBookmark() {
  const isSaved = savedArticles.has(articleId);
  bookmarkButton.setAttribute("aria-pressed", String(isSaved));
  bookmarkButton.querySelector("span").textContent = isSaved ? "已收藏" : "加入收藏";
}

// 複製到剪貼簿；不支援 Clipboard API 時改用選取文字的舊方法
async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const ok = document.execCommand("copy");
  field.remove();
  if (!ok) throw new Error("execCommand copy failed");
}

function createCopyButton(value, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-button";
  button.setAttribute("aria-label", `複製：${label}`);
  button.textContent = "複製";
  let resetTimer;
  button.addEventListener("click", async () => {
    try {
      await copyText(value);
      button.textContent = "已複製 ✓";
      button.classList.add("copied");
      showToast("已複製到剪貼簿");
    } catch (error) {
      console.error("複製失敗：", error);
      showToast("無法複製，請手動選取文字");
      return;
    }
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      button.textContent = "複製";
      button.classList.remove("copied");
    }, 2000);
  });
  return button;
}

function renderContent() {
  const blocks = article.sections.flatMap(([heading, paragraph]) => {
    const title = document.createElement("h2");
    title.textContent = heading;
    const body = document.createElement("p");
    body.textContent = paragraph;
    return [title, body];
  });

  (article.examples || []).forEach((example) => {
    const section = document.createElement("section");
    section.className = "prompt-example";
    const title = document.createElement("h2");
    title.textContent = example.title;
    section.append(title);

    example.items.forEach((item) => {
      const label = document.createElement("strong");
      label.className = "example-label";
      label.textContent = item.label;
      section.append(label);
      if (item.desc) {
        const desc = document.createElement("p");
        desc.className = "example-desc";
        desc.textContent = item.desc;
        section.append(desc);
      }
      const text = document.createElement("pre");
      text.className = "example-text";
      text.textContent = item.text;
      const box = document.createElement("div");
      box.className = "example-box";
      box.append(text, createCopyButton(item.text, item.label));
      section.append(box);
    });

    if (example.note) {
      const note = document.createElement("p");
      note.className = "example-note";
      note.textContent = example.note;
      section.append(note);
    }
    blocks.push(section);
  });

  document.querySelector("#article-content").replaceChildren(...blocks);
}

// 文章主圖：點擊在新分頁開啟原尺寸圖片
function renderImage() {
  const { src, alt, caption, width, height } = article.image;
  const figure = document.querySelector("#article-figure");
  const link = document.createElement("a");
  link.href = src;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", `在新分頁開啟大圖：${alt}`);
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  if (width && height) {
    img.width = width;
    img.height = height;
  }
  img.decoding = "async";
  link.append(img);
  figure.replaceChildren(link);
  if (caption) {
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = caption;
    figure.append(figcaption);
  }
  figure.hidden = false;
}

function renderSources() {
  const sources = document.querySelector("#article-sources");
  if (!article.sources.length) {
    sources.hidden = true;
    return;
  }
  const label = document.createElement("strong");
  label.textContent = "延伸閱讀與參考來源";
  const links = article.sources.map((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.label;
    return link;
  });
  sources.replaceChildren(label, ...links);
}

if (article) {
  document.title = `${article.title} — 懶懶躺著學AI`;
  document.querySelector('meta[name="description"]').content = article.intro;
  document.querySelector("#article-category").textContent = article.category;
  document.querySelector("#article-read-time").textContent = `閱讀約 ${article.minutes} 分鐘`;
  document.querySelector("#article-title").textContent = article.title;
  document.querySelector("#article-dates").replaceChildren(...dateParts(article));
  document.querySelector("#article-intro").textContent = article.intro;
  if (article.credit) {
    const credit = document.querySelector("#article-credit");
    const prefix = article.credit.prefix || "本文為重點摘要，出處：";
    if (article.credit.url) {
      const link = document.createElement("a");
      link.href = article.credit.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = article.credit.label;
      credit.replaceChildren(prefix, link);
    } else {
      credit.replaceChildren(prefix + article.credit.label);
    }
    credit.hidden = false;
  }
  if (article.image) renderImage();
  renderContent();
  renderSources();
  updateBookmark();
  document.querySelector("#article").hidden = false;

  bookmarkButton.addEventListener("click", () => {
    if (savedArticles.has(articleId)) {
      savedArticles.delete(articleId);
      showToast("已從收藏移除");
    } else {
      savedArticles.add(articleId);
      showToast("已加入我的收藏");
    }
    try {
      storeSavedArticles(savedArticles);
    } catch (error) {
      savedArticles = getSavedArticles();
      showToast("無法儲存收藏，請檢查瀏覽器的儲存設定");
      console.error("無法儲存收藏清單：", error);
    }
    updateBookmark();
  });

  // 在列表頁變更收藏時同步按鈕狀態
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    savedArticles = getSavedArticles();
    updateBookmark();
  });
} else {
  document.title = "找不到筆記 — 懶懶躺著學AI";
  document.querySelector("#not-found").hidden = false;
}
