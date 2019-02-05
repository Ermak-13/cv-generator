<template lang="html">
  <Modal2Cols name="jobs">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          Добавить работу
        </h1>

        <form
          class="form"
          v-on:submit="onSubmit">
          <FormField
            name="jobs__company"
            label="Компания:">
            <Input
              id="jobs__company"
              v-bind:value="company"
              v-on:input="onInputData('company', $event)" />
          </FormField>

          <FormField
            name="jobs__position"
            label="Должность:">
            <Input
              id="jobs__position"
              v-bind:value="position"
              v-on:input="onInputData('position', $event)" />
          </FormField>

          <div class="jobs__period-grid">
            <FormField
              name="jobs__started-at"
              label="Начало:">
              <Input
                id="jobs__started-at"
                v-bind:value="startedAt"
                v-on:input="onInputData('startedAt', $event)" />
            </FormField>

            <FormField
              name="jobs__finished-at"
              label="Конец:">
              <Input
                id="jobs__finished-at"
                v-bind:value="finishedAt"
                v-on:input="onInputData('finishedAt', $event)" />
            </FormField>
          </div>

          <FormField
            name="jobs__description"
            label="Описание:">
            <HTMLEditor
              id="jobs__description"
              v-bind:value="description"
              v-on:input="onInputData('description', $event)" />
          </FormField>

          <button
            type="submit"
            class="button">Добавить</button>
        </form>
      </section>
    </div>

    <div class="modal__col">
      <Jobs
        v-bind:isHiddenSettingsBtn="true" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';
  import HTMLEditor from './base/HTMLEditor.vue';
  import Jobs from './Jobs.vue';

  export default {
    components: {
      Modal2Cols,
      Jobs,
      FormField,
      Input,
      HTMLEditor,
    },

    data() {
      return this.initData();
    },

    methods: {
      initData() {
        return {
          company: '',
          position: '',
          startedAt: '',
          finishedAt: '',
          description: ''
        };
      },

      onSubmit(e) {
        e.preventDefault();

        let job = {
          company: this.company,
          position: this.position,
          startedAt: this.startedAt,
          finishedAt: this.finishedAt,
          description: this.description
        };
        this.$store.commit('addJob', job);

        this.clearData();
      },

      onInputData(type, value) {
        this[type] = value;
      },

      clearData() {
        let data = this.initData();
        Object.keys(data).forEach((key) => {
          this[key] = data[key];
        });
      }
    }
  }
</script>

<style scoped>
  .jobs__period-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
</style>
