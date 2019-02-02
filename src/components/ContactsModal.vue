<template lang="html">
  <modal name="contacts" width="800" height="auto">
    <div class="modal__content modal__content--2cols">
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
    </div>
  </modal>
</template>

<script>
  import Contacts from './Contacts';
  import FormField from './base/FormField'
  import Input from './base/Input'

  export default {
    name: 'ContactsModal',
    components: {
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
