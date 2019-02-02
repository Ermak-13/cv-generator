<template lang="html">
  <section class="about section">
    <SettingsOpenerButton
      modalName="about"
      v-if="!isHiddenSettingsBtn" />

    <h1 class="section__h">О себе</h1>

    <div class="about__content editor-html" v-html="$store.state.about"></div>
  </section>
</template>

<script>
  import SettingsOpenerButton from './base/SettingsOpenerButton.vue';

  export default {
    name: 'About',
    props: ['isHiddenSettingsBtn'],

    components: {
      SettingsOpenerButton
    }
  }
</script>

<style scoped>
</style>
