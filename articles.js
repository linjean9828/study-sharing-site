const articles = {
  gptcodes: {
    category: "AI 工具 · 提示詞",
    title: "強化提示詞，可以得到更好的答案",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 10,
    intro: "ChatGPT Codes（提示詞代碼）是放在提示詞開頭的簡短代碼，像給 AI 的快捷指令，告訴它要用什麼方式回答，例如「ELI5 — Explain quantum computing」。本文整理 35 個常用代碼，每個都優化成可以直接複製使用的完整提示詞。",
    credit: {
      prefix: "圖片出處：",
      label: "〈35 ChatGPT Codes〉Adam Digital；中文說明與提示詞由本站翻譯、優化"
    },
    image: {
      src: "img/gpt_code.jpg",
      alt: "35 ChatGPT Codes 速查表：ELI5、TL;DR、SWOT、Roleplay 等 35 個提示詞代碼",
      caption: "35 ChatGPT Codes 速查表（點圖可在新分頁放大）",
      width: 1088,
      height: 1360
    },
    sections: [
      ["怎麼使用", "按下提示詞右上角的「複製」，把［ ］連同括號換成你自己的內容，再貼到 ChatGPT、Gemini、Claude 等 AI 工具送出即可。代碼也可以組合使用，例如「ELI10 + Table：請用 10 歲小孩聽得懂的方式，以表格比較貓和狗的習性」。"],
      ["為什麼不只打代碼，而要用完整提示詞？", "這些代碼不是官方指令，AI 是靠字面意思猜出你要的回答方式。ELI5、TL;DR 這類常見代碼多半能被理解，但 Jargonize、Exec Summary 等較少見的代碼，可能被誤解或回答得很籠統。本文的提示詞在代碼後面明確寫出對象、格式與限制，結果更穩定，也比較不受使用哪一個 AI 工具影響。"],
      ["使用小提醒", "Examples、Case Study、Timeline 等需要事實的代碼，AI 仍可能編造內容，提示詞中已加上「標註需查證」的要求，重要資訊請回到可靠來源確認。貼上內容前，也記得先移除個資與機密資料。"]
    ],
    examples: [
      {
        title: "基礎解釋與整理結構",
        items: [
          {
            label: "ELI5",
            desc: "Explain like you're 5. — 用 5 歲小孩也聽得懂的方式說明，極度通俗易懂。",
            text: "ELI5：請用 5 歲小孩也聽得懂的方式，解釋「［主題］」。\n- 不使用專有名詞；非用不可時，用一句生活化的話說明\n- 用一個日常生活的比喻幫助理解\n- 全文 150 字以內"
          },
          {
            label: "ELI10",
            desc: "Explain like you're 10. — 用 10 歲小孩能懂的方式說明，具體生動且有基本邏輯。",
            text: "ELI10：請向 10 歲的小學生解釋「［主題］」。\n- 先用一句話說明它是什麼\n- 再用 2 個日常生活的例子，說明它怎麼運作\n- 最後用一句話說明它為什麼重要\n- 語氣生動、句子簡短"
          },
          {
            label: "TL;DR",
            desc: "Summarize long text. — 太長不看，長文重點摘要。",
            text: "TL;DR：請用 3 句話摘要以下內容的核心重點。\n- 第 1 句：最重要的結論\n- 第 2、3 句：支撐結論的關鍵資訊\n- 不加入原文沒有的內容\n\n［貼上內容］"
          },
          {
            label: "Step-by-Step",
            desc: "Break the process into steps. — 將流程拆解成按部就班的步驟。",
            text: "Step-by-Step：請把「［目標／流程］」拆解成按部就班的執行步驟。\n- 每一步以動詞開頭，說明要做什麼\n- 標出每一步需要的工具或資料\n- 指出最容易出錯的步驟與注意事項\n- 我的程度是：［新手／有經驗］"
          },
          {
            label: "Checklist",
            desc: "Turn this into a checklist. — 轉換成可以勾選的檢查清單。",
            text: "Checklist：請將以下內容整理成可以逐項勾選的檢核清單。\n- 每一項用「□」開頭，一項只做一件事\n- 依執行順序排列，項目多時分組並加上小標題\n- 標出最關鍵、絕對不能漏掉的項目\n\n［貼上內容］"
          },
          {
            label: "Exec Summary",
            desc: "Give an executive summary. — 給主管看的高階摘要，簡潔、著重結論與商業價值。",
            text: "Exec Summary：請為管理層撰寫以下內容的高階執行摘要。\n- 第一段直接給出結論與建議\n- 列出最多 3 個關鍵數據或事實，只使用內容中有的資料，不要自行編造\n- 說明對營收、成本或風險的影響\n- 最後列出需要主管決定的事項\n- 全文 200 字以內\n\n［貼上內容］"
          },
          {
            label: "Outline",
            desc: "Create a structured outline. — 建立結構化大綱。",
            text: "Outline：請為「［主題／文章／專案］」規劃一份結構化大綱。\n- 使用多層級標題：主標題、子標題、重點\n- 每個段落附一句說明，寫出這段要講什麼\n- 目標讀者：［讀者］\n- 用途：［簡報／文章／企劃書］"
          },
          {
            label: "Compare",
            desc: "Compare two or more things. — 比較兩個或多個事物。",
            text: "Compare：請比較［A］與［B］。\n- 用表格列出比較項目：［例如價格、功能、學習難度］\n- 分別說明兩者的優勢與限制\n- 最後依情境給建議：什麼時候選 A、什麼時候選 B\n- 價格、規格等可能變動或不確定的資訊，請標註「需查證」"
          },
          {
            label: "Table",
            desc: "Present the answer in a table. — 用表格呈現回答。",
            text: "Table：請將以下資訊整理成 Markdown 表格。\n- 欄位：［欄位1］、［欄位2］、［欄位3］（不確定要哪些欄位時，刪掉這一行，請 AI 先建議合適的欄位）\n- 依［排序依據］排序\n- 缺少的資料填「—」，不要自行編造\n\n［貼上內容］"
          },
          {
            label: "Pros & Cons",
            desc: "List advantages and disadvantages. — 列出優點與缺點。",
            text: "Pros & Cons：請客觀列出「［決策／工具／方案］」的優點與缺點。\n- 優點、缺點各列 3～5 點，並簡短說明原因\n- 標出影響最大的一項\n- 最後依我的情況給出建議：［簡述你的情況］"
          }
        ]
      },
      {
        title: "分析、語氣調整與格式轉換",
        items: [
          {
            label: "SWOT",
            desc: "Analyze strengths, weaknesses, opportunities, threats. — 優勢、劣勢、機會、威脅分析。",
            text: "SWOT：請針對「［公司／產品／個人］」進行 SWOT 分析。\n- 用 2×2 表格呈現優勢、劣勢、機會、威脅，每格 3 點\n- 每一點附一句具體理由\n- 最後提出 3 個可行的行動建議\n- 背景資訊：［產業、規模、目前目標］\n- 資訊不足的地方請標註「假設」，不要當成事實"
          },
          {
            label: "Bullet Points",
            desc: "Condense into bullets. — 濃縮成重點列點。",
            text: "Bullet Points：請將以下內容濃縮成重點列點。\n- 最多 7 點，每點不超過 25 字\n- 依重要性排序\n- 保留關鍵數字與名稱\n\n［貼上內容］"
          },
          {
            label: "Jargonize",
            desc: "Make it technical. — 加入專業術語，讓內容更技術化、專業化。",
            text: "Jargonize：請使用「［領域，例如金融／軟體工程／醫療］」的專業術語，改寫以下內容。\n- 讀者是該領域的專業人士\n- 術語使用正確，不為了顯得專業而誇大內容\n- 保留原本的意思與事實\n\n［貼上內容］"
          },
          {
            label: "Humanize",
            desc: "Make it sound more natural. — 去除 AI 感，讀起來更自然、像真人說話。",
            text: "Humanize：請改寫以下內容，讓它讀起來像真人自然說話。\n- 避免制式開場與空泛結尾，例如「總而言之」「希望對你有幫助」\n- 句子長短交錯，語氣：［親切／專業／輕鬆］\n- 保留原本的資訊與重點\n\n［貼上內容］"
          },
          {
            label: "Simplify",
            desc: "Rewrite using plain language. — 用平易近人的白話重寫。",
            text: "Simplify：請用簡單直白的日常用語，改寫以下文字。\n- 讓國中生也看得懂\n- 一句話只講一件事\n- 專有名詞改成白話，或在後面加括號說明\n\n［貼上內容］"
          },
          {
            label: "Rewrite",
            desc: "Rephrase while keeping meaning. — 保留原意，換一種說法。",
            text: "Rewrite：請在保留原意的前提下，換一種說法改寫以下內容。\n- 提供 2 個版本：正式版與輕鬆版\n- 不新增、也不刪除任何資訊\n\n［貼上內容］"
          },
          {
            label: "Shorten",
            desc: "Make it concise. — 精簡文字，去蕪存菁。",
            text: "Shorten：請將以下內容精簡約 50%。\n- 保留核心訊息、關鍵數字與結論\n- 刪除重複的內容與贅字\n- 語氣與原文一致\n\n［貼上內容］"
          },
          {
            label: "Expand",
            desc: "Add detail and examples. — 擴充細節並補充範例。",
            text: "Expand：請擴充以下內容。\n- 補充背景知識、細節說明，以及 1～2 個實際案例\n- 擴充到約［字數］字\n- 不確定的事實請標註「需查證」，不要自行編造\n\n［貼上內容］"
          },
          {
            label: "Act As [Role]",
            desc: "Answer from an expert's perspective. — 角色扮演，以特定專家的視角回答。",
            text: "Act As：請以資深［職稱，例如人資主管／財務顧問］的身分，回答以下問題。\n- 從這個角色的專業經驗與常見做法出發\n- 指出一般人容易忽略的風險\n- 最後給出具體的下一步建議\n- 涉及法律、醫療、財務等重大決定時，提醒我向真正的專業人士確認\n\n問題：［你的問題］"
          },
          {
            label: "FAQ",
            desc: "Turn the topic into FAQs. — 將主題整理成常見問答集。",
            text: "FAQ：請針對「［主題］」整理 5 個最常見的問題與回答。\n- 問題用讀者的口吻提出\n- 每個回答 2～3 句，先給答案再補充說明\n- 讀者是：［讀者對象］"
          }
        ]
      },
      {
        title: "學習、邏輯推演與批判思考",
        items: [
          {
            label: "Quiz Me",
            desc: "Test my knowledge. — 隨堂測驗，檢查我的理解程度。",
            text: "Quiz Me：請針對「［主題］」出 3 道測驗題考我。\n- 一次只出一題，等我回答後，再告訴我對錯並解釋\n- 難度由淺入深\n- 全部答完後，總結我需要加強的地方"
          },
          {
            label: "Flashcards",
            desc: "Create study cards. — 製作學習抽認卡。",
            text: "Flashcards：請將以下學習內容製作成抽認卡，並用表格呈現。\n- 最多 10 張；重點不到 10 個時，依實際重點數量製作\n- 欄位：正面（概念或問題）｜背面（解釋或答案）\n- 每張卡只考一個重點，背面不超過 2 句\n\n［貼上內容］"
          },
          {
            label: "Timeline",
            desc: "Present events in order. — 依時間順序呈現事件。",
            text: "Timeline：請依時間先後，整理「［歷史事件／專案時程］」的關鍵里程碑。\n- 格式：日期｜事件｜影響\n- 標出最重要的轉折點\n- 不確定的日期請標註「需查證」"
          },
          {
            label: "Decision Tree",
            desc: "Map options logically. — 決策樹，用邏輯梳理選項與分支。",
            text: "Decision Tree：請為「［決策問題］」設計一個決策樹。\n- 從最關鍵的判斷問題開始，用「是／否」分支\n- 每條分支的最後，給出建議的選項\n- 用縮排文字呈現，並另外輸出 Mermaid 流程圖語法"
          },
          {
            label: "Examples",
            desc: "Include real-world examples. — 提供現實世界的真實案例。",
            text: "Examples：請提供 3 個在生活或工作中實際應用「［概念］」的例子。\n- 每個例子說明：情境、怎麼應用、帶來什麼結果\n- 例子來自不同領域\n- 若是真實事件，請附上可查證的來源；無法確認的請標註「需查證」"
          },
          {
            label: "Case Study",
            desc: "Explain using a real case. — 用個案分析深入說明。",
            text: "Case Study：請用一個具體案例，深入說明「［主題］」。\n- 依序說明：背景、問題、解決方案、結果\n- 最後整理 3 個可以借鏡的重點\n- 請註明這是真實案例還是虛構示範"
          },
          {
            label: "First Principles",
            desc: "Break down fundamentals. — 第一性原理，回到事物本質拆解。",
            text: "First Principles：請用第一性原理拆解「［問題／領域］」。\n- 先列出這件事最基本、無法再拆解的事實\n- 再從這些事實出發，重新推導出解法\n- 指出哪些常見做法，其實只是習慣或未經檢驗的假設"
          },
          {
            label: "Feynman",
            desc: "Explain simply like teaching a child. — 費曼學習法，像教小孩一樣講清楚。",
            text: "Feynman：請用費曼學習法解釋「［複雜概念］」。\n- 想像你在教一位小學生，用生動的比喻說明\n- 解釋完後，指出初學者最容易誤解的 2 個地方\n- 最後出 1 個問題，讓我用自己的話說明，檢查我是不是真的懂"
          },
          {
            label: "Socratic",
            desc: "Answer with questions. — 蘇格拉底式提問，用問題引導反思。",
            text: "Socratic：請不要直接給我答案，用蘇格拉底式提問，引導我思考「［主題］」。\n- 一次只問一個問題，等我回答後再追問\n- 根據我的回答，引導我發現自己的盲點\n- 對話結束時，幫我整理出我自己得到的結論"
          },
          {
            label: "Critique",
            desc: "Find weaknesses and improvements. — 批判審閱，挑出漏洞並提出改進建議。",
            text: "Critique：請嚴格審閱以下內容。\n- 指出邏輯漏洞、證據不足與表達不清的地方\n- 依嚴重程度排序\n- 每個問題都附上具體的改進建議\n\n［貼上內容］"
          }
        ]
      },
      {
        title: "創意思考、格式化與情境演練",
        items: [
          {
            label: "Devil's Advocate",
            desc: "Argue the opposite view. — 魔鬼代言人，站在反方立場唱反調。",
            text: "Devil's Advocate：請站在反對的立場，反駁以下觀點。\n- 提出 3 個最有力的反對論點，並附上理由\n- 指出這個觀點最大的風險或盲點\n- 最後告訴我，可以怎麼回應這些反對意見\n\n觀點：［你的觀點］"
          },
          {
            label: "Brainstorm",
            desc: "Generate a list of ideas. — 腦力激盪，發想多元點子。",
            text: "Brainstorm：請針對「［目標／問題］」發想 10 個點子。\n- 兼顧創意與可行性，包含保守型與大膽型\n- 每個點子用一句話說明做法\n- 最後挑出 3 個最值得先嘗試的，並說明原因\n- 限制條件：［預算／時間／人力］"
          },
          {
            label: "Mind Map",
            desc: "Organize ideas visually. — 心智圖，用層級結構整理想法。",
            text: "Mind Map：請將「［主題］」整理成心智圖結構。\n- 中心主題 → 4～6 個主分支 → 每個分支 2～4 個子項目\n- 先用縮排清單呈現\n- 再另外輸出 Mermaid mindmap 語法，方便貼到繪圖工具"
          },
          {
            label: "JSON / Markdown",
            desc: "Format as code. — 轉成程式碼或結構化資料格式。要 Markdown 時，把開頭改成「Markdown：請將以下資訊整理成 Markdown 文件」。",
            text: "JSON：請將以下資訊轉換成標準的 JSON 格式。\n- 欄位名稱使用英文小寫加底線，例如 product_name\n- 數字使用數值型別，缺少的資料填 null\n- 確認語法正確，只輸出 JSON，不要加任何說明文字\n\n［貼上內容］"
          },
          {
            label: "Roleplay",
            desc: "Act out a scenario. — 情境模擬，進行對話演練。",
            text: "Roleplay：請和我進行一場「［場景，例如求職面試／商務談判］」的模擬對話。\n- 你扮演［對方身分］，我扮演［我的身分］\n- 由你先開口，一次只說一段話，等我回應\n- 當我輸入「結束」，請評估我的表現，並給我 3 個改進建議"
          }
        ]
      }
    ],
    sources: []
  },
  agentvalue: {
    category: "趨勢觀察 · 重點摘要",
    title: "讓AI發揮價值的方法",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 8,
    intro: "台大電機系教授李宏毅曾問學生：「假設現在有無限的資源，你想做什麼？」平常抱怨資源不足的學生，一時卻答不上來。這讓他意識到，資源不足未必是真正的限制，更難的是想清楚自己要做什麼。本文先摘要原文重點，再整理成可以馬上照做的實作方法。",
    credit: {
      label: "數位時代〈「想做什麼，比會做什麼重要」！台大教授李宏毅：AI Agent時代，學生最該練的是這3種能力〉，李宏毅、劉映茹，2026/09/30",
      url: "https://www.bnext.com.tw/article/92416/ai-education-problem-finding-future-skills"
    },
    sections: [
      ["原文重點：想做什麼，比會做什麼重要", "AI Agent 出現後，寫程式、執行任務都能交給 AI 代勞，各科系之間的技能差異逐漸模糊，「決定方向」的能力因此被推到前面。要帶領 AI 把事情做好，李宏毅認為人需要以下 3 項能力。"],
      ["能力一：出題", "把模糊的想法轉成明確目標。AI 做不好，很多時候是因為人自己也說不清楚要什麼。"],
      ["能力二：驗收", "知道什麼樣的成果才算符合需求。AI 可以找另一個 AI 檢查答案，但檢查哪些項目、標準是什麼，仍要由人決定。"],
      ["能力三：監督", "持續看著 AI 修改與進步，避免它為了追求指標，卻朝錯誤的方向前進。驗收與監督，不能只靠另一個 AI 代勞。"],
      ["案例：小金老師的「音效」", "李宏毅打造的 AI Agent「小金老師」找 Gemini 檢查影片有沒有聲音，Gemini 回覆「有音效」，小金也聲稱音效是自己加的。直到李宏毅要求回頭檢查程式碼，才發現影片根本沒有音效。他的結論是：「AI 能彼此協作，也可能一起產生集體幻覺。最後的判斷仍要由人做。」"],
      ["對教育的看法：培養「成為指導教授的能力」", "過去的教育先設定題目與標準，再讓學生找解法，培養的是執行者；但當目標能用文字說清楚、成果能用分數衡量時，AI Agent 自行改善的效率更高。因此李宏毅認為，未來要培養的是學生「成為指導教授的能力」——決定方向、訂標準、看著 AI 做。"],
      ["落地實作一：動手前，先把題目寫清楚", "以下為依原文三項能力整理的實作建議。交給 AI 之前，先用幾句話寫下：要做出什麼、給誰用、在什麼情境、怎樣才算完成、有哪些限制。如果你寫不出「怎樣才算完成」，代表題目還不清楚，先別急著交給 AI。也可以在指令最後加上「需求不清楚時，先問我問題」，讓 AI 幫你把題目問清楚。"],
      ["落地實作二：先訂驗收標準，再開工", "驗收標準，就是「做到什麼程度才算完成」的判斷條件。先寫好再交給 AI，有兩個好處：AI 一開始就知道目標在哪裡；成果回來時，你也能逐條打勾，而不是憑感覺說「好像還可以」。好的驗收標準有三個特徵：一是可以回答「是／否」，例如「300 字以內」，而不是「簡潔一點」；二是涵蓋不同面向，包括內容（必須提到什麼）、格式（長度、版面、檔案類型）、正確性（數字、名稱、日期對不對）、禁止事項（不能出現什麼）；三是標明誰來檢查，格式類的可以請 AI 自我檢查，但最關鍵的一兩項，一定親自確認——打開檔案、實際播放、執行程式、回到原始資料核對，而不是只看 AI 的回報。一次列 3～5 條就好，太多反而抓不到重點。下方「驗收標準範例」整理了好壞對照與常見情境，可以直接改寫使用。"],
      ["落地實作三：分段監督，不要一次驗收", "把任務拆成小步驟，每一步都看一下產出再往下走。每次修改都請 AI 說明「改了什麼、為什麼改」。當某個指標變漂亮、但成果看起來怪怪的，就先停下來，確認它是不是為了衝指標而偏離原本的目標。"],
      ["落地實作四：AI 說「已確認」，請它拿出證據", "記住小金老師的教訓：AI 之間的互相確認，不等於真的確認。當 AI 說「已完成」「已檢查過」，請它附上證據，例如程式碼位置、輸出檔案、截圖或資料來源；重要的事實，回到第一手來源查證。"]
    ],
    examples: [
      {
        title: "可直接套用的範本",
        items: [
          {
            label: "出題範本（貼給 AI 使用）",
            text: "我要做：［成果，例如：60 秒的產品介紹影片］\n給誰用：［對象與使用情境］\n完成的定義：\n1. ［可檢查的條件］\n2. ［可檢查的條件］\n3. ［可檢查的條件］\n限制：［長度／時間／不能做的事］\n如果需求不清楚，請先問我問題，再開始做。"
          },
          {
            label: "驗收清單範例（以 60 秒產品影片為例）",
            text: "□ 長度在 55～65 秒之間\n□ 有旁白與背景音樂（親自播放確認，不只看 AI 回報）\n□ 字幕沒有錯字，產品名稱正確\n□ 結尾有聯絡方式或購買連結"
          },
          {
            label: "監督時的追問句",
            text: "「這一版改了哪些地方？為什麼要這樣改？」\n「你說已經完成，請附上證據：程式碼位置、輸出檔或截圖。」\n「這個指標變好了，但有沒有犧牲原本的目標？」"
          }
        ],
        note: "「落地實作」與範本為本站依原文觀點整理的建議做法，並非原文內容；原文觀點請以數位時代報導為準。"
      },
      {
        title: "驗收標準範例",
        items: [
          {
            label: "好壞對照：把感覺改成可以打勾的條件",
            text: "✗ 寫得專業一點　→　✓ 不使用網路流行語，專有名詞第一次出現時附上說明\n✗ 簡短就好　　　→　✓ 300 字以內，條列不超過 5 點\n✗ 資料要正確　　→　✓ 每個數字都標出來源，且能在原始資料中找到\n✗ 做得漂亮　　　→　✓ 每頁不超過 3 個重點，字級不小於 24 pt"
          },
          {
            label: "情境一：請 AI 整理會議摘要",
            text: "□ 分成「決議」「待辦」「待確認」三段\n□ 每個待辦都有負責人與期限，缺少的標示「未指定」\n□ 只寫會議中真的說過的內容，不自行補充推論\n□ 人工核對：決議內容與自己的會議筆記一致（親自確認）"
          },
          {
            label: "情境二：請 AI 寫 Excel 公式或小程式",
            text: "□ 用我提供的 3 組測試資料執行，結果都正確\n□ 空白欄位、文字格式的數字不會出錯\n□ 附上每一步的說明，讓我看得懂在做什麼\n□ 人工確認：親自在檔案中執行一次，而不是只看 AI 說「已測試」（親自確認）"
          },
          {
            label: "情境三：請 AI 寫活動宣傳文案",
            text: "□ 150 字以內，包含日期、地點、報名方式\n□ 日期、時間、地點與活動資料一字不差（親自確認）\n□ 不使用誇大或無法證明的形容詞，例如「最強」「保證」\n□ 結尾有明確的行動呼籲，例如「立即報名」與連結"
          },
          {
            label: "情境四：請 AI 做一份 5 頁簡報",
            text: "□ 剛好 5 頁：問題、原因、做法、時程、需要的支援\n□ 每頁一個主標題，重點不超過 3 點\n□ 圖表的數字與原始資料一致，並標示資料來源（親自確認）\n□ 用非專業的同事看得懂的用語"
          }
        ],
        note: "標示「親自確認」的項目，是最容易出錯、也最不能只靠 AI 回報的地方。以上範例為本站依原文「驗收」觀點整理的建議做法，並非原文內容。"
      }
    ],
    sources: [
      { label: "數位時代：李宏毅談 AI Agent 時代最該練的 3 種能力（原文）", url: "https://www.bnext.com.tw/article/92416/ai-education-problem-finding-future-skills" }
    ]
  },
  prompt: {
    category: "入門指南 · 觀念解析",
    title: "第一次使用生成式 AI，從這裡開始",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 5,
    intro: "生成式 AI 能依照你的指示產生文字、點子和摘要。把它想成一位反應很快的協作夥伴：提供的脈絡越清楚，越容易得到實用的起點。",
    sections: [
      ["AI 不是搜尋引擎，也不是全知的答案機", "大型語言模型會依照學到的語言模式生成內容，而不是像資料庫一樣逐筆查找事實。因此回答可能聽起來流暢，卻仍有錯誤；重要資訊應另行查證。"],
      ["從一件小事開始", "試著請 AI 改寫一封信、整理一段筆記，或把複雜概念解釋給初學者聽。描述你要完成的任務、對象和希望的語氣，再依結果逐步調整。"],
      ["一個好用的提問框架", "「請扮演［角色］，幫我完成［任務］。背景是［脈絡］，請用［格式／語氣］回答。如果資訊不足，先問我問題。」不用每次照抄；把它當作讓需求更清楚的提醒。"]
    ],
    sources: [{ label: "Google AI：大型語言模型介紹", url: "https://ai.google/education/" }]
  },
  writing: {
    category: "AI 工具 · 實用技巧",
    title: "讓 AI 更懂你：提示詞的 4 個小技巧",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 4,
    intro: "提示詞（Prompt）就是你交給 AI 的任務說明。寫得更精確，不需要神奇咒語，只要多給一點有用的脈絡。",
    sections: [
      ["1. 說明你想達成的目標", "比起「幫我寫東西」，試試看「幫我寫一封 150 字內的活動邀請信，鼓勵同事報名週五的分享會」。清楚的任務與限制，能幫助回答聚焦。"],
      ["2. 補充必要背景", "交代讀者是誰、情境為何、有哪些資訊不可遺漏。沒有必要的個資或機密資料則不要提供。"],
      ["3. 指定輸出格式", "你可以要求條列重點、比較表、郵件草稿或步驟清單。若有範例，也可以提供不含敏感資訊的示意。"],
      ["4. 把第一次回答當草稿", "補充「再精簡一些」、「請指出不確定之處」或「提供兩種語氣」等追問，透過多輪合作慢慢收斂。"]
    ],
    examples: [
      {
        title: "護膚精華上市文案",
        items: [
          {
            label: "提示詞",
            text: "為全新專櫃等級護膚精華液撰寫上市描述。突出保濕、緊緻、透亮三大功效。針對重視品質的女性，100字以內，IG版本含emoji與hashtag。"
          },
          {
            label: "AI 生成範例",
            text: "✨全新專櫃等級護膚精華液 ✨\n\n深層補水 💧・緊緻彈潤 ✨・透亮光澤 🌸\n\n#專櫃級保養 #新品上市 #質感生活"
          }
        ],
        note: "此為文案生成示例，保濕、緊緻或透亮等產品功效應先確認有相應依據，再用於實際宣傳。"
      }
    ],
    sources: [
      { label: "提示詞與生成範例原文", url: "https://travel-2026-japan.onrender.com/notes/prompt" },
      { label: "OpenAI：提示詞工程指南", url: "https://platform.openai.com/docs/guides/prompt-engineering" }
    ]
  },
  models: {
    category: "趨勢觀察 · 概念拆解",
    title: "大型語言模型到底是什麼？",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 6,
    intro: "大型語言模型（LLM）是一種在大量文字資料上訓練的 AI 模型，擅長處理和生成語言。掌握幾個基本概念，就能更清楚理解它能做什麼、不能做什麼。",
    sections: [
      ["從文字的接龍說起", "模型會把文字切成稱作 Token 的片段，再根據前文預測接下來較可能出現的片段。多次預測組合起來，就形成看似完整連貫的回答。Token 不一定剛好等於一個中文字或一個英文單字。"],
      ["「大型」代表什麼？", "通常指模型從大量資料中學習，並使用許多可調整的參數捕捉語言模式。訓練規模有幫助，但不保證每次回答都正確、最新或符合你的情境。"],
      ["知道限制，使用得更好", "LLM 可能編造細節、誤解含糊的問題，也不一定能取得最新資訊。把它用於發想、摘要和初稿很方便；遇到醫療、法律、財務或其他重要決定，請尋求可信來源與專業意見。"]
    ],
    sources: [{ label: "Google AI：生成式 AI 學習資源", url: "https://ai.google/education/" }]
  },
  workflow: {
    category: "AI 工具 · 職場應用",
    title: "把 AI 放進工作流程，先從這 3 件事開始",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 5,
    intro: "要讓 AI 真正省下時間，不必一開始就自動化整套流程。選一個低風險、重複性高的小任務，保留人工檢查，再觀察它是否有幫上忙。",
    sections: [
      ["會議後整理摘要", "用 AI 把你有權分享的會議筆記整理成決議、待辦事項和負責人。檢查內容有沒有遺漏或把討論誤寫成決定；不要將未經允許的機密會議資料上傳。"],
      ["為長文件做第一輪整理", "請 AI 依照你指定的主題整理一份文件，並標示相關段落。重要數字、引文和結論仍要回到原文確認，避免摘要失去關鍵脈絡。"],
      ["從空白頁變成初稿", "請 AI 依受眾、目的和語氣列出大綱或初稿，再由你補上專業判斷、真實經驗和正確細節。把時間省在判斷與溝通，而不是追求不需修改的答案。"]
    ],
    sources: [{ label: "Microsoft Learn：負責任地使用生成式 AI", url: "https://learn.microsoft.com/en-us/training/modules/responsible-generative-ai/" }]
  },
  factcheck: {
    category: "入門指南 · AI 素養",
    title: "AI 也會答錯：學會這 3 招安心查證",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 4,
    intro: "生成式 AI 可能給出不準確、過時或看似合理卻找不到根據的內容。遇到重要資訊，先停一下，再用以下方法確認。",
    sections: [
      ["1. 回到第一手來源", "請 AI 提供出處後，不要只看它列出的連結或引用文字；親自開啟來源頁面，確認原文真的支持這項說法。若找不到原始來源，就先保留。"],
      ["2. 用可信的獨立來源交叉比對", "選擇有明確作者、機構和更新時間的資料，確認不同可靠來源是否一致。要特別注意統計數字、日期、研究結論和引文。"],
      ["3. 分清楚事實、推論和不確定性", "可以追問 AI「哪些部分需要查證？」「你依據的來源是什麼？」但 AI 自己的說明不是證據。重大決定應由可靠資料或合格專業人士協助。"]
    ],
    sources: [{ label: "Stanford HAI：AI 素養資源", url: "https://hai.stanford.edu/ai-literacy" }]
  },
  privacy: {
    category: "趨勢觀察 · 數位素養",
    title: "使用 AI 工具，個人資料保護小提醒",
    published: "2026-10-04",
    updated: "2026-10-04",
    minutes: 3,
    intro: "不同 AI 服務對對話、上傳檔案和使用資料的處理方式各有不同。使用之前，留意以下幾件事，能降低不必要的資料風險。",
    sections: [
      ["先看服務的資料使用說明", "確認服務會如何保存與使用你的輸入、是否提供關閉訓練使用的選項，以及資料保留多久。不同方案和帳戶設定可能不同。"],
      ["不要貼上機密或可識別個人身分的資料", "密碼、身分證字號、客戶紀錄、未公開文件與財務資訊，都不應在未確認政策和授權前輸入 AI 工具。必要時先移除姓名、聯絡方式等識別資訊。"],
      ["確認公司與學校的規範", "使用工作或學習帳號時，遵循組織的資訊安全和資料處理規定。如果不確定資料能否分享，先詢問負責人再使用。"]
    ],
    sources: [{ label: "NIST：生成式 AI 風險管理框架", url: "https://www.nist.gov/itl/ai-risk-management-framework" }]
  }
};

// 收藏清單與日期等兩頁共用的工具
const STORAGE_KEY = "yqai-saved-articles";

function getSavedArticles() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored.filter((id) => typeof id === "string" && articles[id]) : []);
  } catch (error) {
    console.error("無法讀取收藏清單：", error);
    return new Set();
  }
}

function storeSavedArticles(saved) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved]));
}

function articleUrl(id) {
  return `article.html?id=${encodeURIComponent(id)}`;
}

function formatDate(iso) {
  return iso.replaceAll("-", "/");
}

// 產生「上傳 2026/10/04 · 更新 2026/10/04」，日期以 <time> 標記
function dateParts(article) {
  const parts = [];
  [["上傳", article.published], ["更新", article.updated]].forEach(([label, iso], index) => {
    if (!iso) return;
    if (index && parts.length) parts.push(document.createTextNode(" · "));
    const time = document.createElement("time");
    time.dateTime = iso;
    time.textContent = formatDate(iso);
    parts.push(document.createTextNode(`${label} `), time);
  });
  return parts;
}
