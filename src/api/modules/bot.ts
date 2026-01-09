import { instance } from '@/api/https'

const BOT = {
  GET_BOT_LIST: (userId: string, { ...config }) =>
    instance.get('/getBotList', { params: { userId }, ...config }),
  POST_BOT_ADD: (data: {
    userId: string
    botData: {
      name: string,
      system_prompt: string,
      knowledge_base?: File[],
      strict_mode: boolean,
    }
  }) =>
    instance.post('/addBots', { ...data }),
  POST_BOT_UPDATE: (data: {
    userId: string
    botData: {
      bot_id: string
      name: string,
      system_prompt: string,
      knowledge_base?: File[],
      strict_mode: boolean,
    }
  }) =>
    instance.post('/updateBots', { ...data }),
  POST_SPECIFY_BOT_SETTING: (data: { userId: string, botId: string }) =>
    instance.post('/getBotSetting', { ...data }),
  POST_BOT_DELETE: (data: { userId: string, botId: string[] }) =>
    instance.post('/deleteBots', { ...data }),
}

export default BOT
