export const users = [
    {
        id: crypto.randomUUID(),
        account: "odt123",
        password: "1q2w3e4r",
        bots: [
            {
                bot_id: "bot-9527",
                last_updated: "2026-01-07T12:01:00Z",
                name: "AI 助手小華",
                system_prompt: "你是一個專業的技術支援顧問，語氣親切且樂於助人。請使用繁體中文回答，並在回答結尾詢問是否還有其他問題。",
                knowledge_base: [
                    { id: "file-001", name: "產品使用手冊.pdf" },
                    { id: "file-002", name: "退換貨政策.docx" }
                ],
                strict_mode: true,
            }
        ],
        messages: [{
            chat_id: "session-7890",
            bot_id: "bot-9527",
            history: [
                {
                    message_id: "msg-001",
                    role: "assistant",
                    content: "您好！我是您的 AI 技術顧問，請問今天有什麼可以幫您的嗎？",
                    timestamp: "2026-01-09T20:00:00Z"
                },
                {
                    message_id: "msg-002",
                    role: "user",
                    content: "我想詢問如何更新產品的韌體？",
                    timestamp: "2026-01-09T20:01:30Z"
                },
                {
                    message_id: "msg-003",
                    role: "assistant",
                    content: "更新韌體的步驟如下：\n1. 下載最新版本檔案。\n2. 透過 USB 傳輸線連接裝置。\n3. 在設定介面點擊「檢查更新」。\n請問您目前使用的是哪一個型號？",
                    timestamp: "2026-01-09T20:01:45Z",
                },
                {
                    message_id: "msg-004",
                    role: "user",
                    content: "我有上傳檔案了，幫我摘要一下內容。",
                    timestamp: "2026-01-09T20:05:00Z",
                }
            ]
        }]
    },
]