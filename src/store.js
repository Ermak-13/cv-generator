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
      img: 'https://pp.userapi.com/c624422/v624422110/28d50/7BXdEoBPxDM.jpg',
      fullName: 'Иванов Иван',
      position: 'Full Stack разработчик'
    }
  },

  mutations: {
    updateSettings(state, settings) {
      state.settings = settings;
    },

    updateMainInfo(state, mainInfo) {
      state.mainInfo = mainInfo;
    }
  },

  actions: {
  }
})
