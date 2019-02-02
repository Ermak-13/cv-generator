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
    props: ['name', 'label']
  }
</script>

<style scoped>
</style>
