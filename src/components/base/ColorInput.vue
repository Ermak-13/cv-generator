<template lang="html">
  <input
    type="color"
    class="form__input"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'ColorInput',
    props: {
      value: String
    }
  }
</script>

<style>
</style>
