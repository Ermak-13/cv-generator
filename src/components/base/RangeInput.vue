<template lang="html">
  <input
    class="form__range"
    type="range"
    v-bind:min="min"
    v-bind:max="max"
    v-bind:step="step"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: String,
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 10
      }
    }
  }
</script>

<style>
</style>
