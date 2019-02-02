<template lang="html">
  <VueEditor
    v-bind:editorOptions="editorOptions"
    v-bind:value="value"
    v-on:input="$emit('input', $event)">
  </VueEditor>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    name: 'HTMLEditor',
    props: ['value'],

    components: {
      VueEditor
    },

    data() {
      return {
        editorOptions: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'color': [] }, { 'background': [] }],
              ['link', { 'list': 'ordered'}, { 'list': 'bullet' }],
            ]
          }
        }
      };
    }
  }
</script>

<style>
</style>
