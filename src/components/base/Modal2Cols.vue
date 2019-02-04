<template lang="html">
  <modal
    width="800"
    height="auto"
    v-bind:scrollable="true"
    v-bind:name="name">
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
