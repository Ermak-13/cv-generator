<template lang="html">
  <modal
    width="800"
    height="auto"
    v-bind:scrollable="true"
    v-bind:name="name">
    <div v-bind:class="contentStyles">
      <slot></slot>
    </div>
  </modal>
</template>

<script>
  export default {
    name: 'Modal2Cols',
    props: ['name', 'align'],

    computed: {
      contentStyles() {
        return {
          'start': 'modal__content modal__content--2cols modal__content--start',
          'center': 'modal__content modal__content--2cols modal__content--center',
        }[this.align] || 'modal__content modal__content--2cols modal__content--center';
      }
    }
  }
</script>

<style scoped>
  .modal__content--2cols {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr);
    grid-gap: 10px;
    align-items: center;
    margin: 30px;
  }

  .modal__content--start {
    align-items: flex-start;
  }

  .modal__content--center {
    align-items: center
  }
</style>
