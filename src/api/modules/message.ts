import { instance } from '@/api/https'

const MESSAGE = {
  GET_MESSAGE_LIST: (data: { userId: string, botId: string }, { ...config }) =>
    instance.get('/getHistoryList', { params: { ...data }, ...config }),
  POST_SPECIFY_MESSAGE: (data: { userId: string, botId: string, chatId: string }) =>
    instance.post('/getSpecifyHistory', { ...data }),
  POST_DELETE_SPECIFY_MESSAGE: (data: { userId: string, botId: string, chatId: string }) =>
    instance.post('/deleteSpecifyHistory', { ...data }),
  POST_MESSAGE: (data: { userId: string, botId: string, chatId: string, content: string }, { ...config }) =>
    instance.post('/sendMessage', { ...data }, { ...config }),
}

export default MESSAGE
