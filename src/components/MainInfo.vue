<template lang="html">
  <Section
    name="main-info"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">
    <div class="main-info__img-wrapper">
      <img
        class="main-info__img"
        v-bind:src="$store.state.mainInfo.img"
        v-bind:alt="$store.state.mainInfo.fullName">
    </div>

    <h1 class="main-info__h">
      {{ $store.state.mainInfo.fullName }}
    </h1>

    <div
      class="main-info__text editor-html"
      v-html="$store.state.mainInfo.position">
    </div>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  export default {
    name: 'MainInfo',
    props: ['isHiddenSettingsBtn'],

    components: {
      Section,
    }
  }
</script>

<style scoped>
  .main-info {
    grid-area: main-info;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-info__img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: 150px;
    height: 150px;

    border: solid 4px;
    border-radius: 50%;
    overflow: hidden;
  }

  .main-info__img {
    height: 100%;
    width: auto;
    max-width: none;
  }

  .main-info__h {
    margin: 0;
    font-size: 24px;
  }

  .main-info__text {
    margin: 0;
  }
</style>
