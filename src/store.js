import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    settings: {
      leftColBGColor: '#000000',
      leftColColor: '#ffffff',
      rightColBGColor: '#ffffff',
      rightColColor: '#000000',
    },

    mainInfo: {
      img: 'https://c1.staticflickr.com/4/3385/3338476021_e78f484164_b.jpg',
      fullName: 'Коал Коалыч',
      position: 'Поедатель эвкалипта'
    },

    about: `
      <ul>
        <li>могу хоть целыми днями есть эвкалипт</li>
        <li>с первого взгляда распознаю где эвкалипт лучшего качества</li>
        <li>своим милым видом хорошо привлекаю клиентов</li>
        <li>и многое другое...</li>
      </ul>
    `
  },

  mutations: {
    updateSettings(state, settings) {
      state.settings = settings;
    },

    updateMainInfo(state, mainInfo) {
      state.mainInfo = mainInfo;
    },

    updateAbout(state, about) {
      state.about = about;
    }
  },

  actions: {
  }
})
