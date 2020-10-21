import { atom, selector } from 'recoil'

const randomUserList = selector({
  key: 'randomUserList',
  get: async () => {
    const resp = await (await fetch('https://randomuser.me/api/?results=50')).json()

    return resp.results
  },
})

const charCountState = selector({
  key: 'charCounterState',
  get: (param) => {
    const { get } = param
    console.log('params')

    const text = get(textState)
    return text.length
  },
})

const textState = atom({
  key: 'textState',
  default: '',
})

export { textState, charCountState, randomUserList }
