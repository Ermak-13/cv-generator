<template lang="html">
  <Modal2Cols name="languages">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          {{ $t('settingsModal.title') }}
        </h1>

        <form class="form">
          <FormField
            name="languages__progress-color"
            v-bind:label="$t('languages.form.colorLabel')">
            <ColorInput
              id="languages__progress-color"
              v-bind:value="$store.state.languages.progressColor"
              v-on:input="onInputProgressColor" />
          </FormField>
        </form>
      </section>

      <section class="section">
        <h1 class="section__h section__h--modal">
          {{ $t('languages.modal.title') }}
        </h1>

        <form class="form" v-on:submit="onSubmitAddLanguage">
          <FormField
            name="languages__title"
            v-bind:label="$t('languages.form.languageLabel')">
            <Input
              id="languages__title"
              v-bind:value="title"
              v-on:input="onInputData('title', $event)" />
          </FormField>

          <FormField
            name="languages__level-value"
            v-bind:label="$t('languages.form.levelLabel')">
            <RangeInput
              min="0"
              max="100"
              step="25"
              id="languages__level-value"
              v-bind:value="levelValue"
              v-on:input="onInputLevelValue" />
          </FormField>

          <FormField
            name="languages__level-label"
            v-bind:label="$t('languages.form.suggestionLabel')">
            <Input
              id="languages__level-title"
              v-bind:value="levelLabel"
              v-on:input="onInputData('levelLabel', $event)" />
          </FormField>

          <button
            class="button"
            type="submit">
            {{ $t('languages.form.button') }}
          </button>
        </form>
      </section>
    </div>

    <div class="modal__col">
      <Languages
        v-bind:isHiddenSettingsBtn="true"
        v-bind:isHiddenRemoveBtn="false" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import Languages from './Languages.vue';
  import FormField from './base/FormField.vue';
  import ColorInput from './base/ColorInput.vue';
  import Input from './base/Input.vue';
  import RangeInput from './base/RangeInput.vue';

  export default {
    name: 'LanguagesModal',
    components: {
      Modal2Cols,
      Languages,
      FormField,
      ColorInput,
      Input,
      RangeInput,
    },

    data() {
      return this.initData();
    },

    methods: {
      initData() {
        return {
          title: '',
          levelValue: 25,
          levelLabel: 'Начальный'
        };
      },

      onInputProgressColor(value) {
        this.$store.commit('updateLanguagesProgressColor', value);
      },

      onSubmitAddLanguage(e) {
        e.preventDefault();

        let language = {
          language: this.title,
          levelValue: this.levelValue,
          levelLabel: this.levelLabel,
        };
        this.$store.commit('addLanguage', language);

        this.clearData();
      },

      onInputData(key, value) {
        this[key] = value;
      },

      onInputLevelValue(value) {
        let levelLabel = {
          25: 'Начальный',
          50: 'Средний',
          75: 'Продвинутый',
          100: 'Родной',
        }[value];

        this.levelValue = value;
        this.levelLabel = levelLabel;
      },

      clearData() {
        let data = this.initData();
        Object.keys(data).forEach((key) => {
          this[key] = data[key];
        });
      },
    }
  }
</script>

<style>
</style>
