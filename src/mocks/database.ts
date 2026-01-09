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
        ]
    },
]