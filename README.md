# 懶懶躺著學AI

一個以繁體中文分享 AI 知識的純靜態網站。網站使用原生 HTML、CSS 和 JavaScript，不需安裝套件或啟動後端。

## 在本機預覽

直接以瀏覽器開啟 `index.html`，或使用任何靜態檔案伺服器預覽。

## 網站功能

- 以主題分類瀏覽六篇 AI 入門、工具與趨勢文章
- 即時搜尋文章標題、摘要和內容
- 每篇筆記顯示上傳與更新日期，按「閱讀全文」會在新分頁開啟全文頁 `article.html?id=…`，可在全文頁收藏
- 筆記內容、日期與閱讀時間集中在 `articles.js` 的 `articles` 資料中；日期以 `published`、`updated`（格式 `YYYY-MM-DD`）設定
- 收藏文章；收藏清單儲存在目前瀏覽器的 `localStorage`
- 使用頂端搜尋欄的 `/` 快速鍵
- 「文章總覽」表格，可在表格中直接開啟文章、切換收藏並查看收藏進度
- 視覺風格與 `travel-site` 一致：淺天藍背景、白色大圓角卡片、主色 `#1d74c6`、深色段落與暖棕色頁尾；支援 `prefers-reduced-motion`

## 部署

將 `index.html`、`article.html`、`styles.css`、`articles.js`、`app.js`、`article.js` 一起部署到任何靜態網站主機即可。Google Fonts 字型需要網路連線；無法載入時，網站會使用系統字型。

本網站不會將資料送到伺服器；收藏僅保存在目前瀏覽器。延伸閱讀連結會開啟各組織的公開 AI 學習資源。
