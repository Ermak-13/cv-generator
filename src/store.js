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
    `,

    contacts: {
      phone: '+375 (29) 000-00-00',
      email: 'example@gmail.com',
      site: 'https://example.com'
    },

    languages: {
      progressColor: '#64AF76',

      items: [
        {
          language: 'Английский',
          levelValue: 50,
          levelLabel: 'Средний',
        },
        {
          language: 'Коальский',
          levelValue: 100,
          levelLabel: 'Родной',
        }
      ]
    },

    skills: [
      'Умилять',
      'Эвкалиптить',
      'Спать',
      'Лазить по деревьям',
      'Улыбаться',
      'Умилять 2.0',
      'Зевать',
    ]
  },

  mutations: {
    updateSettings(state, settings) {
      state.settings = settings;
    },

    updateMainInfo(state, mainInfo) {
      state.mainInfo = mainInfo;
    },

    updateContacts(state, contacts) {
      state.contacts = contacts;
    },

    updateAbout(state, about) {
      state.about = about;
    },

    updateLanguagesProgressColor(state, color) {
      state.languages.progressColor = color;
    },

    addLanguage(state, language) {
      state.languages.items.push(language);
    },

    removeLanguage(state, index) {
      state.languages.items.splice(index, 1);
    },

    addSkill(state, value) {
      state.skills.push(value);
    },

    removeSkill(state, index) {
      state.skills.splice(index, 1);
    }
  },

  actions: {
  }
})
