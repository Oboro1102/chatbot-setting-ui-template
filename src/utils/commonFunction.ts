import Rabbit from 'crypto-js/rabbit'
import encUtf8 from 'crypto-js/enc-utf8'
export const encodeString = (source: string, key: string) => {
  return Rabbit.encrypt(JSON.stringify(source), key)
}
export const decodeString = (source: string, keyName: string) => {
  const key = sessionStorage.getItem(keyName)
  return JSON.parse(Rabbit.decrypt(source, key).toString(encUtf8))
}