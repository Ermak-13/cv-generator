<template lang="html">
  <modal name="skills" width="800" height="auto">
    <div class="modal__content modal__content--2cols">
      <div class="modal__col">
        <section class="section">
          <h1 class="section__h section__h--modal">
            Добавить навык
          </h1>

          <form
            class="form"
            v-on:submit="onSubmit">
            <FormField
              name="skills__title"
              label="Навык:">
              <Input
                id="skills__title"
                v-bind:value="title"
                v-on:input="onInputTitle" />
            </FormField>

            <button
              type="submit"
              class="button">Добавить</button>
          </form>
        </section>
      </div>
      <div class="modal__col">
        <Skills
          v-bind:isHiddenSettingsBtn="true"
          v-bind:isHiddenRemoveBtn="false" />
      </div>
    </div>
  </modal>
</template>

<script>
  import Skills from './Skills.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';

  export default {
    name: 'SkillsModal',
    components: {
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
