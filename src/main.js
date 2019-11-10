import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueI18n from 'vue-i18n'
import VModal from 'vue-js-modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ru from '@/i18n/ru.json'
import en from '@/i18n/en.json'

library.add(fas, far, fab)

Vue.use(VueI18n)
Vue.use(VModal)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'ru',
  messages: {
    ru,
    en
  }
})

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
