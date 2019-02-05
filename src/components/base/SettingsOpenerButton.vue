<template lang="html">
  <button
    class="section__settings-opener"
    type="button"
    v-on:click="onClickButton">
      <font-awesome-icon :icon="['fas', 'cog']" />
  </button>
</template>

<script>
  export default {
    name: 'SettingsOpenerButton',
    props: {
      modalName: {
        type: String,
        required: true
      }
    },

    methods: {
      onClickButton() {
        this.$modal.show(this.modalName);
      }
    }
  }
</script>

<style>
</style>
