<template lang="html">
  <Modal2Cols name="about">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          {{ $t('settingsModal.title') }}
        </h1>

        <form class="form">
          <FormField
            name="about__content"
            v-bind:label="$t('about.form.htmlEditorLabel')">
            <HTMLEditor id="about__content"
              v-bind:value="$store.state.about"
              v-on:input="onInputAbout($event)" />
          </FormField>
        </form>
      </section>
    </div>

    <div class="modal__col">
      <About v-bind:isHiddenSettingsBtn="true" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import About from './About.vue';
  import FormField from './base/FormField.vue';
  import HTMLEditor from './base/HTMLEditor.vue';

  export default {
    name: 'MainInfoModal',
    components: {
      Modal2Cols,
      About,
      FormField,
      HTMLEditor
    },

    methods: {
      onInputAbout(value) {
        this.$store.commit('updateAbout', value);
      }
    }
  }
</script>

<style scoped>
</style>
