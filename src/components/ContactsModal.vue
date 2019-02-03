<template lang="html">
  <Modal2Cols name="contacts">
    <div class="modal__col">
      <section class="section">
        <h1 class="section__h section__h--modal">Настройки</h1>

        <form class="form">
          <FormField
            name="contacts__phone"
            label="Телефон:">
            <Input
              id="contacts__phone"
              type="tel"
              v-bind:value="contacts.phone"
              v-on:input="onInputContacts('phone', $event)" />
          </FormField>

          <FormField
            name="contacts__email"
            label="Email:">
            <Input
              id="contacts__email"
              type="email"
              v-bind:value="contacts.email"
              v-on:input="onInputContacts('email', $event)" />
          </FormField>

          <FormField
            name="contacts__site"
            label="Сайт:">
            <Input
              id="contacts__site"
              type="url"
              v-bind:value="contacts.site"
              v-on:input="onInputContacts('site', $event)" />
          </FormField>
        </form>
      </section>
    </div>

    <div class="modal__col">
      <Contacts v-bind:isHiddenSettingsBtn="true" />
    </div>
  </Modal2Cols>
</template>

<script>
  import Modal2Cols from './base/Modal2Cols.vue';
  import Contacts from './Contacts.vue';
  import FormField from './base/FormField.vue';
  import Input from './base/Input.vue';

  export default {
    name: 'ContactsModal',
    components: {
      Modal2Cols,
      Contacts,
      FormField,
      Input,
    },

    computed: {
      contacts() {
        return ['phone', 'email', 'site'].reduce((accum, contact) => {
          accum[contact] = this.$store.state.contacts[contact];
          return accum;
        }, {});
      }
    },

    methods: {
      onInputContacts(type, value) {
        let contacts = this.contacts;
        contacts[type] = value;

        this.$store.commit('updateContacts', contacts);
      }
    }
  }
</script>

<style>
</style>
