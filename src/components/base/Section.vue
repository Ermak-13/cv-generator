<template lang="html">
  <section v-bind:class="name + ' section'">
    <SettingsOpenerButton
      v-bind:modalName="name"
      v-if="!isHiddenSettingsBtn" />

    <h1
      class="section__h"
      v-if="title">
      {{ title }}
    </h1>

    <slot></slot>
  </section>
</template>

<script>
  import SettingsOpenerButton from './SettingsOpenerButton.vue';
  export default {
    name: 'Section',
    props: {
      name: {
        type: String,
        required: true
      },
      title: String,
      isHiddenSettingsBtn: {
        type: Boolean,
        default: false
      }
    },

    components: {
      SettingsOpenerButton
    }
  }
</script>

<style>
</style>
