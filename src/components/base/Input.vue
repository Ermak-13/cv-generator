<template lang="html">
  <input
    class="form__input"
    type="text"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'Input',
    props: ['value']
  }
</script>

<style>
</style>
