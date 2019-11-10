<template lang="html">
  <Modal2Cols name="educations">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          {{ $t('educations.modal.title') }}
        </h1>

        <form
          class="form"
          v-on:submit="onSubmitAddEducation">
          <FormField
            name="educations__university"
            v-bind:label="$t('educations.form.universityLabel')">
            <Input
              id="educations__university"
              v-bind:value="university"
              v-on:input="onInputData('university', $event)" />
          </FormField>

          <FormField
            name="educations__faculty"
            v-bind:label="$t('educations.form.facultyLabel')">
            <Input
              id="educations__faculty"
              v-bind:value="faculty"
              v-on:input="onInputData('faculty', $event)" />
          </FormField>

          <FormField
            name="educations__degree"
            v-bind:label="$t('educations.form.degreeLabel')">
            <Input
              id="educations__degree"
              v-bind:value="degree"
              v-on:input="onInputData('degree', $event)" />
          </FormField>

          <div class="educations__period-grid">
            <FormField
              name="educations__started-at"
              v-bind:label="$t('educations.form.startedAtLabel')">
              <Input
                id="educations__started-at"
                type="number"
                v-bind:value="startedAt"
                v-on:input="onInputData('startedAt', $event)" />
            </FormField>

            <FormField
              name="educations__finished-at"
              v-bind:label="$t('educations.form.finishedAtLabel')">
              <Input
                id="educations__finished-at"
                type="number"
                v-bind:value="finishedAt"
                v-on:input="onInputData('finishedAt', $event)" />
            </FormField>
          </div>

          <button
            type="submit"
            class="button">
            {{ $t('educations.form.button') }}
          </button>
        </form>
      </section>
    </div>

    <div class="modal__col">
      <Educations
        v-bind:isHiddenSettingsBtn="true"
        v-bind:isHiddenRemoveBtn="false" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';
  import Educations from './Educations.vue';

  export default {
    name: 'EducationsModal',
    components: {
      Modal2Cols,
      FormField,
      Input,
      Educations,
    },

    data() {
      return {
        university: '',
        faculty: '',
        degree: '',
        startedAt: 2014,
        finishedAt: 2019,
      };
    },

    methods: {
      onInputData(type, value) {
        this[type] = value;
      },

      onSubmitAddEducation(e) {
        e.preventDefault();
        let education = {
          university: this.university,
          faculty: this.faculty,
          degree: this.degree,
          startedAt: this.startedAt,
          finishedAt: this.finishedAt,
        };

        this.$store.commit('addEducation', education);
      }
    }
  }
</script>

<style scoped>
  .educations__period-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
</style>
