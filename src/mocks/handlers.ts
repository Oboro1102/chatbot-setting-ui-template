import { http, HttpResponse } from 'msw'
import { users } from '@/mocks/database.ts'

export const handlers = [
    http.post('/api/users', async ({ request }) => {
        const data = await request.json()
        const { account, password } = data as { account: string; password: string }
        const target = users.filter((item: { account: string }) => item.account === account)[0]
        if (target) {
            return HttpResponse.json(
                { message: '此帳號已註冊' },
                { status: 400 }
            )
        } else {
            const id = crypto.randomUUID()
            users.push({
                id,
                account,
                password,
                bots: []
            })
            return HttpResponse.json({
                success: true,
                message: '登入成功',
                data: { id, name: '' }
            }, { status: 200 })
        }
    }),
    http.post('/api/users/updatePassword', async ({ request }) => {
        const data = await request.json()
        const { id, password } = data as { id: string, password: string }
        const target = users.filter((item: { id: string }) => item.id === id)[0]
        if (target) {
            target.password = password
            return HttpResponse.json({
                success: true,
                message: '更新成功',
            }, { status: 200 })
        } else {
            return HttpResponse.json(
                { message: '使用者金鑰錯誤' },
                { status: 401 }
            )
        }
    }),
    http.post('/api/auth/login', async ({ request }) => {
        const data = await request.json()
        const { account, password } = data as { account: string; password: string }
        const target = users.filter((item: { account: string }) => item.account === account)[0]
        if (target && target.password === password) {
            const { id } = target
            return HttpResponse.json({
                success: true,
                message: '登入成功',
                data: { id }
            }, { status: 200 })
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 404 }
            )
        }
    }),
    http.get('/api/getBotList', ({ request }) => {
        const url = new URL(request.url)
        const userId = url.searchParams.get('userId')
        const target = users.filter((item: { id: string | null }) => item.id === userId)[0]
        if (target) {
            const { bots } = target
            return HttpResponse.json({
                success: true,
                message: '列表取得成功',
                data: { bots }
            }, { status: 200 })
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 401 }
            )
        }
    }),
    http.post('/api/addBots', async ({ request }) => {
        const data = await request.json()
        const { userId, botData } = data as {
            userId: string; botData: {
                bot_id?: string
                name: string,
                system_prompt: string,
                knowledge_base?: File[],
                strict_mode: boolean,
                last_updated?: string
            }
        }
        const target = users.filter((item: { id: string }) => item.id === userId)[0]
        if (target) {
            const insertData = Object.assign(botData)
            insertData.bot_id = crypto.randomUUID()
            insertData.last_updated = Date.now().toString()
            target.bots.push(insertData)
            return HttpResponse.json(
                { message: '機器人建立成功' },
                { status: 200 }
            )
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 401 }
            )
        }
    }),
    http.post('/api/updateBots', async ({ request }) => {
        const data = await request.json()
        const { userId, botData } = data as {
            userId: string; botData: {
                bot_id: string
                name: string,
                system_prompt: string,
                knowledge_base?: File[],
                strict_mode: boolean,
                last_updated?: string
            }
        }
        const target = users.filter((item: { id: string }) => item.id === userId)[0]?.bots.filter(item => item.bot_id === botData.bot_id)[0]
        if (target) {
            botData.last_updated = Date.now().toString()
            Object.assign(target, botData)
            return HttpResponse.json(
                { message: '機器人更新成功' },
                { status: 200 }
            )
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 401 }
            )
        }
    }),
    http.post('/api/getBotSetting', async ({ request }) => {
        const data = await request.json()
        const { userId, botId } = data as { userId: string; botId: string[] }
        const target = users.filter((item: { id: string }) => item.id === userId)[0]
        if (target) {
            const bots = target.bots.filter(({ bot_id }: { bot_id: string }) => botId.includes(bot_id))[0]
            return HttpResponse.json(
                {
                    success: true,
                    message: '資料取得成功',
                    data: { bots }
                },
                { status: 200 }
            )
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 401 }
            )
        }
    }),
    http.post('/api/deleteBots', async ({ request }) => {
        const data = await request.json()
        const { userId, botId } = data as { userId: string; botId: string[] }
        const target = users.filter((item: { id: string }) => item.id === userId)[0]
        if (target) {
            target.bots = target.bots.filter(({ bot_id }: { bot_id: string }) => !botId.includes(bot_id))
            return HttpResponse.json(
                { message: '刪除成功' },
                { status: 200 }
            )
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 401 }
            )
        }
    }),
]