import './public-path'
import { store as commonStore } from 'common'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null

function render(props = {}) {
  const { container, routerBase } = props

  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes,
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  commonStore.globalRegister(store)
  const userInfo = { name: 'Bob', age: 21 } // 假设登录后取到的用户信息
  store.commit('global/setGlobalState', { user: userInfo })

  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstrapped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)

  commonStore.globalRegister(store, props)

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
