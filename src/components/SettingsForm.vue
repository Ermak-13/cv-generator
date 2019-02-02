<template lang="html">
  <form class="sidebar__form form" v-on:submit.prevent="onSubmit">
    <fieldset class="form__fieldset form__fieldset--left-col">
      <legend class="form__legend">Левая колонка</legend>

      <div class="form__fieldset-content">
        <FormField
          name="content__left-col-bg-color"
          label="Цвет фона:">
          <ColorInput
            id="content__left-col-bg-color"
            v-bind:value="settings.leftColBGColor"
            v-on:input="onInputSettings('leftColBGColor', $event)" />
        </FormField>

        <FormField
          name="content__left-col-color"
          label="Цвет текста:">
          <ColorInput
            id="content__left-col-color"
            v-bind:value="settings.leftColColor"
            v-on:input="onInputSettings('leftColColor', $event)" />
        </FormField>
      </div>
    </fieldset>

    <fieldset class="form__fieldset form__fieldset--right-col">
      <legend class="form__legend">Правая колонка</legend>

      <div class="form__fieldset-content">
        <FormField
          name="content__right-col-bg-color"
          label="Цвет фона:">
          <ColorInput
            id="content__right-col-bg-color"
            v-bind:value="settings.rightColBGColor"
            v-on:input="onInputSettings('rightColBGColor', $event)" />
        </FormField>

        <FormField
          name="content__right-col-color"
          label="Цвет текста:">
          <ColorInput
            id="content__right-col-color"
            v-bind:value="settings.rightColColor"
            v-on:input="onInputSettings('rightColColor', $event)" />
        </FormField>
      </div>
    </fieldset>
  </form>
</template>

<script>
  import FormField from './base/FormField.vue';
  import ColorInput from './base/ColorInput.vue';

  export default {
    name: 'SettingsForm',
    components: {
      FormField,
      ColorInput
    },

    computed: {
      settings() {
        return ['leftColBGColor', 'leftColColor', 'rightColBGColor', 'rightColColor']
          .reduce((accum, key) => {
            accum[key] = this.$store.state.settings[key];
            return accum;
          }, {});
      }
    },

    methods: {
      onSubmit() {},
      onInputSettings(type, value) {
        let settings = this.settings;
        settings[type] = value;

        this.$store.commit('updateSettings', settings);
      }
    }
  }
</script>

<style scoped>
</style>
