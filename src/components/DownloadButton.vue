<template lang="html">
  <button
    class="button"
    type="button"
    v-on:click="onClickDownloadBtn">Скачать PDF</button>
</template>

<script>
  export default {
    name: 'DownloadButton',
    methods: {
      onClickDownloadBtn() {
        window.print();
      }
    }
  }
</script>

<style scoped>
  .button {
    width: 100%;
    background-color: #dc3545;
  }

  .button:hover {
    background-color: #c82333;
  }
</style>
