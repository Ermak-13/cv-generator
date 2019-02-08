import Vue from 'vue'
import Vuex from 'vuex'

import avatar from './assets/avatar.png';
import projectImg01 from './assets/project01.jpeg';
import projectImg02 from './assets/project02.jpeg';
import projectImg03 from './assets/project03.jpeg';
import projectImg04 from './assets/project04.jpeg';

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
      img: avatar,
      fullName: 'Коал Коалыч',
      position: 'Сомелье Эвкалипта'
    },

    about: `
      <p>
        Имею очееень спокойную жизненную позицию. Считаю, что
        эвкалипт нужно дегустировать размеренно и нельзя никуда торопиться.
      </p>
      <p>
        Участвовал в движение "Эвкализуйте легалипт".
      </p>
    `,

    contacts: {
      phone: '+375 (29) 000-00-00',
      email: 'example@gmail.com',
      site: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B0%D0%BB%D0%B0'
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
      'Спать',
      'Есть',
      'Спать 2.0',
      'Лазить по деревья',
      'Промоутерить эвкалипт',
      'Логистика поставок эвкалипта',
      'Дегустировать',
      'Улыбаться',
      'Залазить на ручки',
    ],

    educations: [
      {
        university: 'Австралийкий Эвкалиптовый Университет',
        faculty: 'Эвкалиптоз',
        degree: 'бакалавар',
        startedAt: 2012,
        finishedAt: 2016
      },
      {
        university: 'Австралийкий Эвкалиптовый Университет',
        faculty: 'Эвкалиптоз',
        degree: 'магистр',
        startedAt: 2016,
        finishedAt: 2017
      }
    ],

    projects: [
      {
        title: 'А ну прыгай отсюда!',
        href: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BD%D0%B3%D1%83%D1%80%D1%83',
        img: projectImg01,
        description: '<p><b>Прогоняю</b> конкурента-кенгуру</p>'
      },
      {
        title: 'Эвкалиптиссимо',
        href: 'https://en.wikipedia.org/wiki/Eucalyptus',
        img: projectImg02,
        description: '<p><b>Дегустация</b> волшебного эвкалипта</p>'
      },
      {
        title: 'Мой первый эвкалипт',
        href: 'https://en.wikipedia.org/wiki/Eucalyptus',
        img: projectImg03,
        description: '<p><b>Менеджмент</b> моего 1-го дерева</p>'
      },
      {
        title: 'Эвкалиптовая "разведка"',
        href: 'https://en.wikipedia.org/wiki/Eucalyptus',
        img: projectImg04,
        description: '<p><b>Поиск</b> точек роста</p>'
      }
    ],

    jobs: [
      {
        company: 'ООО "Австралийский парк"',
        position: 'Младший Cомелье Эвкалипта',
        startedAt: 'июнь 2017',
        finishedAt: 'май 2018',
        description: `
          <p>В мои обязанности входило:</p>
          <ul>
            <li><b>Следовать</b> за "Старшим" Сомелье</li>
            <li><b>Мешать</b> конкурентам заползти на наше дерево</li>
          </ul>
        `
      },
      {
        company: 'ООО "Австралийский парк"',
        position: 'Старший Сомелье эвкалипта',
        startedAt: 'май 2018',
        finishedAt: '',
        description: `
          <p>В мои обязанности входит:</p>
          <ul>
            <li><b>Управление</b> собственным эвкалиптом</li>
            <li><b>Поиск</b> перспективного эвкалипта</li>
          </ul>
        `
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
