<template lang="html">
  <input
    class="form__range"
    type="range"
    v-bind:min="min || 0"
    v-bind:max="max || 100"
    v-bind:step="step || 10"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'Input',
    props: ['value', 'min', 'max', 'step']
  }
</script>

<style>
</style>
