<template lang="html">
  <modal v-bind:name="name" width="800" height="auto">
    <div class="modal__content modal__content--2cols">
      <slot></slot>
    </div>
  </modal>
</template>

<script>
  export default {
    name: 'Modal2Cols',
    props: ['name']
  }
</script>

<style>
</style>
