<template>
  <div class="app">
    <Content />
    <Sidebar />

    <MainInfoModal />
    <ContactsModal />
    <AboutModal />
    <LanguagesModal />
    <SkillsModal />
    <EducationsModal />
    <ProjectsModal />
    <JobsModal />
  </div>
</template>

<script>
import 'normalize.css';

import Content from './components/Content.vue';
import Sidebar from './components/Sidebar.vue';

import MainInfoModal from './components/MainInfoModal.vue';
import ContactsModal from './components/ContactsModal.vue';
import AboutModal from './components/AboutModal.vue';
import LanguagesModal from './components/LanguagesModal.vue';
import SkillsModal from './components/SkillsModal.vue';
import EducationsModal from './components/EducationsModal.vue';
import ProjectsModal from './components/ProjectsModal.vue';
import JobsModal from './components/JobsModal.vue';

export default {
  name: 'app',
  components: {
    Content,
    Sidebar,

    MainInfoModal,
    ContactsModal,
    AboutModal,
    LanguagesModal,
    SkillsModal,
    EducationsModal,
    ProjectsModal,
    JobsModal,
  }
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @page {
    size: A4;
    margin: 0;
  }

  .section {
    padding: 10px 20px;
    position: relative;
  }

  .section__h {
    margin: 0;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 15px;
  }

  .section__h--modal {
    padding-bottom: 5px;
    border-bottom: 1px solid;
  }

  .section__settings-opener {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;

    padding: 0;
    border-width: 0;
    background-color: transparent;
    font-size: 18px;
    opacity: 0.5;
    cursor: pointer;
    color: inherit;
  }

  .section__settings-opener:hover {
    opacity: 1;
  }

  .form__fieldset {
    margin: 0;
    margin-bottom: 15px;
    padding: 0;

    border-style: none;
  }

  .form__fieldset--left-col .form__fieldset-content,
  .form__fieldset--right-col .form__fieldset-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .form__fieldset--left-col .form__field,
  .form__fieldset--right-col .form__field {
    box-sizing: border-box;
    width: 50%;
    padding: 0 5px;
    margin: 0 -5px;
  }

  .form__legend {
    font-weight: bold;
  }

  .form__field {
    margin-bottom: 10px;
  }

  .form__label {
    display: block;
    margin-bottom: 5px;
  }

  .form__input {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .form__range {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
  }

  .form__textarea {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    resize: none;
  }

  .button {
    display: inline-block;
    padding: 10px 20px;
    border-width: 0;

    background-color: #28a745;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
  }

  .button:hover {
    background-color: #218838;
  }

  .editor-html p {
    margin: 0;
  }

  .editor-html ul,
  .editor-html ol {
    margin: 0;
    padding-left: 20px;
  }

  .visually-hidden {
    position: absolute;
    left: 0;
    top: 0;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  .remove-button {
    padding: 0;
    border-width: 0;
    background-color: transparent;

    font-size: 1.2em;
    line-height: 1;
    color: #dc3545;
    cursor: pointer;
  }

  @media print {
    .section__settings-opener {
      display: none;
    }
  }
</style>

<style scoped>
  .app {
    display: grid;
    grid-template-areas: ". content . sidebar";
    grid-gap: 0;

    grid-template-columns: 1fr auto 1fr minmax(auto, 350px);
  }
</style>
