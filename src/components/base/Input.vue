<template lang="html">
  <input
    class="form__input"
    v-bind:type="type"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: String,
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style>
</style>
