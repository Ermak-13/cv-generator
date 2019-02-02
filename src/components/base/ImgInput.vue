<template lang="html">
  <input
    class="form__file-input"
    type="file"
    accept=".jpg,.jpeg,.png"
    v-bind:value="value"
    v-on:input="onUploadFile">
</template>

<script>
  export default {
    name: 'ImgInput',
    props: ['value'],

    methods: {
      onUploadFile(event) {
        let file = event.target.files[0];
        if (file && file.type === 'image/jpeg') {
          let reader = new FileReader();
          reader.onload = this.onReadFile;
          reader.readAsDataURL(file);
        }
      },

      onReadFile(event) {
        this.$emit('input', event.target.result);
      }
    }
  }
</script>

<style scoped>
</style>
