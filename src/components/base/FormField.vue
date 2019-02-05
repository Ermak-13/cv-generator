<template lang="html">
  <div class="form__field">
    <label
      class="form__label"
      v-bind:for="name">{{ label }}</label>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FormField',
    props: {
      name: String,
      label: String
    }
  }
</script>

<style scoped>
</style>
