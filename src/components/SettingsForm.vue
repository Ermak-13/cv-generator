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
            class="form__input"
            v-bind:value="settings.leftColBGColor"
            v-on:input="onInputSettings('leftColBGColor', $event)" />
        </FormField>

        <FormField
          name="content__left-col-color"
          label="Цвет текста:">
          <ColorInput
            id="content__left-col-color"
            class="form__input"
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
            class="form__input"
            v-bind:value="settings.rightColBGColor"
            v-on:input="onInputSettings('rightColBGColor', $event)" />
        </FormField>

        <FormField
          name="content__right-col-color"
          label="Цвет текста:">
          <ColorInput
            id="content__right-col-color"
            class="form__input"
            v-bind:value="settings.rightColColor"
            v-on:input="onInputSettings('rightColColor', $event)" />
        </FormField>
      </div>
    </fieldset>

    <fieldset class="form__fieldset">
      <div class="form__fieldset-content">
        <FormField
          name="content__font-size"
          label="Размер шрифта:">
          <Input
            type="number"
            class="form__input"
            v-bind:value="$store.state.contentFontSize"
            v-on:input="onInputFontSize($event.target.value)" />
        </FormField>
        <Toggle
          label="Нужна 2-ая страница?"
          v-bind:value="$store.state.enabledP2"
          v-on:input="togglePage2()" />
      </div>
    </fieldset>

    <fieldset class="form__fieldset">
      <legend class="form__legend">Блоки</legend>

      <div class="form__fieldset-content">
        <Toggle
          v-for="block in allBlocks"
          v-bind:key="block"
          v-bind:label="block"
          v-bind:value="isEnabledBlock(block)"
          v-on:input="toggleBlock(block)" />
      </div>
    </fieldset>
  </form>
</template>

<script>
  import FormField from './base/FormField.vue';
  import ColorInput from './base/ColorInput.vue';
  import Toggle from './base/Toggle.vue';

  export default {
    name: 'SettingsForm',
    components: {
      FormField,
      ColorInput,
      Toggle
    },

    data() {
      return {
        foo: false
      }
    },

    computed: {
      settings() {
        return ['leftColBGColor', 'leftColColor', 'rightColBGColor', 'rightColColor']
          .reduce((accum, key) => {
            accum[key] = this.$store.state.settings[key];
            return accum;
          }, {});
      },

      allBlocks() {
        return [].concat(
          this.$store.state.layout.leftCol,
          this.$store.state.layout.rightCol,
          this.$store.state.layout.leftP2Col,
          this.$store.state.layout.rightP2Col
        );
      }
    },

    methods: {
      onSubmit() {},
      onInputSettings(type, value) {
        let settings = this.settings;
        settings[type] = value;

        this.$store.commit('updateSettings', settings);
      },

      onInputFontSize(value) {
        this.$store.commit('updateContentFontSize', value);
      },

      isEnabledBlock(block) {
        return this.$store.state.enabledBlocks.includes(block);
      },

      togglePage2() {
        this.$store.commit('toggleP2');
      },

      toggleBlock(block) {
        if (this.isEnabledBlock(block)) {
          return this.$store.commit('disableBlock', block);
        } else {
          return this.$store.commit('enableBlock', block);
        }
      }
    }
  }
</script>

<style scoped>
.form__input {
  width: 100%;
}
</style>
