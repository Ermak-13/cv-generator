<template lang="html">
  <modal name="main-info" width="800" height="auto">
    <div class="modal__content modal__content--2cols">
      <div class="modal__col">
        <section class="section">
          <h1 class="section__h">Настройки</h1>

          <form class="" action="index.html" method="post">
            <FormField label="Фотография:">
              <ImgInput
                v-bind:value="undefined"
                v-on:input="onInputMainInfo('img', $event)" />
            </FormField>

            <FormField
              name="main-info__full-name"
              label="ФИО:">
              <Input
                id="main-info__full-name"
                v-bind:value="mainInfo.fullName"
                v-on:input="onInputMainInfo('fullName', $event)" />
            </FormField>

            <FormField
              name="main-info__position"
              label="Должность:">
              <HTMLEditor id="main-info__position"
                v-bind:value="mainInfo.position"
                v-on:input="onInputMainInfo('position', $event)" />
            </FormField>
          </form>
        </section>
      </div>

      <div class="modal__col">
        <MainInfo v-bind:isHiddenControls="true" />
      </div>
    </div>
  </modal>
</template>

<script>
  import MainInfo from './MainInfo';
  import FormField from './base/FormField';
  import Input from './base/Input';
  import ImgInput from './base/ImgInput';
  import HTMLEditor from './base/HTMLEditor';

  export default {
    name: 'MainInfoModal',
    components: {
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
  .modal__content {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr);
    grid-gap: 10px;
    align-items: center;
    margin: 30px;
  }

  .section__h {
    font-size: 24px;
    border-bottom: 1px solid;
  }
</style>
