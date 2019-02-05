import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    layout: {
      leftCol: [
        'MainInfo',
        'Contacts',
        'Languages',
        'Skills',
        'Educations'
      ],
      rightCol: [
        'Jobs',
        'Projects',
        'About',
      ],
    },

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
    ],

    educations: [
      {
        university: 'Австралийкий Эвкалиптовый Университет',
        faculty: 'Эвкалиптоз',
        degree: 'бакалавар',
        startedAt: 2012,
        finishedAt: 2017
      }
    ],

    projects: [
      {
        title: 'Коалочкис',
        href: 'https://www.savethekoala.com/',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Koala.jpg',
        description: 'Фоточка коалы'
      },
      {
        title: 'Эвкалиптус',
        href: 'https://en.wikipedia.org/wiki/Eucalyptus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Eucalyptus_leucophloia_habit.jpg',
        description: 'Эвкализуйте эвкалипт'
      },
      {
        title: 'Эвкалиптус',
        href: 'https://en.wikipedia.org/wiki/Eucalyptus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Eucalyptus_leucophloia_habit.jpg',
        description: 'Эвкализуйте эвкалипт'
      },
      {
        title: 'Коалочкис',
        href: 'https://www.savethekoala.com/',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Koala.jpg',
        description: 'Фоточка коалы'
      }
    ],

    jobs: [
      {
        company: 'ООО "Южный лес"',
        position: 'Сортировщик эвкалипта',
        startedAt: 'август 2014',
        finishedAt: 'декабрь 2017',
        description: '<p>В мои обязанности входило сортировка по качеству эвкалипта</p>'
      },
      {
        company: 'ООО "Австралийский парк"',
        position: 'Поедатель эвкалипта',
        startedAt: 'декабрь 2017',
        finishedAt: '',
        description: '<p>В мои обязанности входило дегустация эвкалипта</p>'
      }
    ]
  },

  mutations: {
    updateLayoutLeftCol(state, leftCol) {
      state.layout.leftCol = leftCol;
    },

    updateLayoutRightCol(state, rightCol) {
      state.layout.rightCol = rightCol;
    },

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
    },

    addEducation(state, education) {
      state.educations.push(education);
    },

    removeEducation(state, index) {
      state.educations.splice(index, 1);
    },

    addProject(state, project) {
      state.projects.push(project);
    },

    removeProject(state, index) {
      state.projects.splice(index, 1);
    },

    addJob(state, job) {
      state.jobs.push(job);
    },

    removeJob(state, index) {
      state.jobs.splice(index, 1);
    }
  },

  actions: {
  }
})
