<template lang="html">
  <div class="content">
    <div
      class="content__left-col"
      v-bind:style="leftColStyles">
      <MainInfo v-bind:isHiddenSettingsBtn="false" />
      <About v-bind:isHiddenSettingsBtn="false" />
    </div>

    <div
      class="content__right-col"
      v-bind:style="rightColStyles">
    </div>
  </div>
</template>

<script>
  import MainInfo from './MainInfo.vue';
  import About from './About.vue'

  export default {
    name: 'Content',

    components: {
      MainInfo,
      About
    },
    computed: {
      leftColStyles() {
        return {
          backgroundColor: this.$store.state.settings.leftColBGColor,
          color: this.$store.state.settings.leftColColor
        }
      },
      rightColStyles() {
        return {
          backgroundColor: this.$store.state.settings.rightColBGColor,
          color: this.$store.state.settings.rightColColor
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    grid-area: content;

    display: grid;
    width: 210mm;
    min-height: 297mm;

    grid-template-columns: 275px 1fr;

    box-sizing: border-box;
    margin: 25px 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .content__left-col,
  .content__right-col {
    padding: 10px 0;
  }

  @media print {
    .content {
      margin: 0;
    }
  }
</style>