<template lang="html">
  <Modal2Cols
    name="projects"
    align="start">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          Добавить проект
        </h1>

        <form
          class="form"
          v-on:submit="onSubmit">
          <FormField
            name="projects__title"
            label="Заголовок">
            <Input
              id="projects__title"
              v-bind:value="title"
              v-on:input="onInputData('title', $event)" />
          </FormField>

          <FormField
            name="projects__url"
            label="Url:">
            <Input
              id="projects__url"
              type="url"
              v-bind:value="href"
              v-on:input="onInputData('href', $event)" />
          </FormField>

          <FormField
            name="projects__img"
            label="Url:">
            <ImgInput
              id="projects__img"
              v-bind:value="undefined"
              v-on:input="onInputData('img', $event)" />
          </FormField>

          <FormField
            name="projects__description"
            label="Описание:">
            <HTMLEditor
              id="projects__description"
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
      <Projects
        v-bind:isHiddenSettingsBtn="true"
        v-bind:isHiddenRemoveBtn="false" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';
  import ImgInput from './base/ImgInput.vue';
  import HTMLEditor from './base/HTMLEditor.vue';
  import Projects from './Projects.vue';

  export default {
    name: 'ProjectsModal',
    components: {
      Modal2Cols,
      FormField,
      Input,
      ImgInput,
      HTMLEditor,
      Projects,
    },

    data() {
      return this.initData();
    },

    methods: {
      initData() {
        return {
          title: '',
          href: '',
          img: null,
          description: ''
        };
      },

      onSubmit(e) {
        e.preventDefault();

        let project = {
          title: this.title,
          href: this.href,
          img: this.img,
          description: this.description
        };
        this.$store.commit('addProject', project);

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
</style>
