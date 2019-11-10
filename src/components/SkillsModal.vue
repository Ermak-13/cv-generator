<template lang="html">
  <Modal2Cols name="skills">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          {{ $t('skills.modal.title') }}
        </h1>

        <form
          class="form"
          v-on:submit="onSubmit">
          <FormField
            name="skills__title"
            v-bind:label="$t('skills.form.nameLabel')">
            <Input
              id="skills__title"
              v-bind:value="title"
              v-on:input="onInputTitle" />
          </FormField>

          <button
            type="submit"
            class="button">
            {{ $t('skills.form.button') }}
          </button>
        </form>
      </section>
    </div>
    <div class="modal__col">
      <Skills
        v-bind:isHiddenSettingsBtn="true"
        v-bind:isHiddenRemoveBtn="false" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import Skills from './Skills.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';

  export default {
    name: 'SkillsModal',
    components: {
      Modal2Cols,
      Skills,
      FormField,
      Input
    },

    data() {
      return {
        title: ''
      };
    },

    methods: {
      onSubmit(e) {
        e.preventDefault();
        this.$store.commit('addSkill', this.title);
      },

      onInputTitle(value) {
        this.title = value;
      }
    }
  }
</script>

<style scoped>
</style>
