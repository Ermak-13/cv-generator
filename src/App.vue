<template>
  <div class="app">
    <Content />
    <Sidebar />

    <MainInfoModal />
  </div>
</template>

<script>
import 'normalize.css';

import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'

import MainInfoModal from './components/MainInfoModal'

export default {
  name: 'app',
  components: {
    Content,
    Sidebar,
    MainInfoModal,
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
    padding: 20px;
    position: relative;
  }

  .section__h {
    margin: 0;
    margin-bottom: 20px;
  }

  .section__settings-opener {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;

    padding: 0;
    border-width: 0;
    background-color: transparent;
    font-size: 24px;
    opacity: 0.75;
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
    border-radius: 5px;

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
</style>

<style scoped>
  .app {
    display: grid;
    grid-template-areas: ". content . sidebar";
    grid-gap: 0;

    grid-template-columns: 1fr auto 1fr minmax(auto, 350px);
  }
</style>
