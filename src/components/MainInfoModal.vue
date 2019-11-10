<template lang="html">
  <Modal2Cols name="main-info">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">
          {{ $t('settingsModal.title') }}
        </h1>

        <form class="form">
          <FormField
            v-bind:label="$t('mainInfo.form.photoLabel')">
            <ImgInput
              v-bind:value="undefined"
              v-on:input="onInputMainInfo('img', $event)" />
          </FormField>

          <FormField
            name="main-info__full-name"
            v-bind:label="$t('mainInfo.form.fullNameLabel')">
            <Input
              id="main-info__full-name"
              v-bind:value="mainInfo.fullName"
              v-on:input="onInputMainInfo('fullName', $event)" />
          </FormField>

          <FormField
            name="main-info__position"
            v-bind:label="$t('mainInfo.form.positionLabel')">
            <HTMLEditor id="main-info__position"
              v-bind:value="mainInfo.position"
              v-on:input="onInputMainInfo('position', $event)" />
          </FormField>
        </form>
      </section>
    </div>

    <div class="modal__col">
      <MainInfo v-bind:isHiddenSettingsBtn="true" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import MainInfo from './MainInfo.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';
  import ImgInput from './base/ImgInput.vue';
  import HTMLEditor from './base/HTMLEditor.vue';

  export default {
    name: 'MainInfoModal',
    components: {
      Modal2Cols,
      MainInfo,
      FormField,
      ImgInput,
      Input,
      HTMLEditor
    },

    computed: {
      mainInfo() {
        return ['img', 'fullName', 'position']
          .reduce((accum, key) => {
            accum[key] = this.$store.state.mainInfo[key];
            return accum;
          }, {});
      }
    },

    methods: {
      onInputMainInfo(type, value) {
        let mainInfo = this.mainInfo;
        mainInfo[type] = value;

        this.$store.commit('updateMainInfo', mainInfo);
      }
    }
  }
</script>

<style scoped>
</style>
