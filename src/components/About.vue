<template lang="html">
  <Section
    name="about"
    title="О себе"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">
    <div
      class="about__content editor-html"
      v-html="$store.state.about"></div>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  export default {
    name: 'About',
    props: {
      isHiddenSettingsBtn: {
        type: Boolean,
        default: false
      }
    },

    components: {
      Section
    }
  }
</script>

<style scoped>
</style>
