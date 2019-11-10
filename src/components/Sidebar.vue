<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar__h">
      {{ $t('sidebar.title') }}
    </h1>

    <div class="i18n-toggle sidebar__i18n-toggle">
      <button
        class="i18n-toggle__button"
        v-bind:class="{ active: $i18n.locale === 'ru' }"
        v-on:click="onClickI18nButton('ru')">
        <img src="@/assets/ru.png" alt="Russian Flag" />
        <span>Русский</span>
      </button>

      <button
        class="i18n-toggle__button"
        v-bind:class="{ active: $i18n.locale === 'en' }"
        v-on:click="onClickI18nButton('en')">
        <img src="@/assets/en.png" alt="English Flag" />
        <span>English</span>
      </button>
    </div>

    <p>
      {{ $t('sidebar.text') }}
    </p>

    <SettingsForm />

    <DownloadButton />
  </aside>
</template>

<script>
  import SettingsForm from './SettingsForm.vue';
  import DownloadButton from './DownloadButton.vue';

  export default {
    name: 'Sidebar',

    components: {
      SettingsForm,
      DownloadButton
    },

    methods: {
      onClickI18nButton(lang) {
        this.$i18n.locale = lang;
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    grid-area: sidebar;

    padding: 25px 30px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .sidebar__h {
    margin-top: 0;
  }

  .i18n-toggle__button {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-width: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }

  .i18n-toggle__button:hover {
    background-color: #EEEEEE;
  }

  .i18n-toggle__button.active {
    background-color: #CCCCCC;
  }

  .i18n-toggle__button > img {
    width: 30px;
    border: solid 1px #000000;
    margin-right: 10px;
  }

  @media print {
    .sidebar {
      display: none;
    }
  }
</style>
