<template lang="html">
  <Section
    name="contacts"
    v-bind:title="$t('contacts.title')"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">
    <dl class="contacts__list">
      <div class="contacts__item"
        v-for="contact in contacts"
        v-bind:key="contact.key">
        <dt class="contacts__label">
          <font-awesome-icon :icon="contact.icon" />
          <span class="visually-hidden">{{ contact.label }}</span>
        </dt>
        <dd class="contacts__value">
          <a
            class="contacts__link"
            v-bind:href="contact.href">
            {{ contact.value }}
          </a>
        </dd>
      </div>
    </dl>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  const ICONS = Object.freeze({
    phone: ['fas', 'mobile-alt'],
    email: ['far', 'envelope'],
    site: ['fab', 'chrome'],
  });

  const LABELS = Object.freeze({
    phone: 'Телефон',
    email: 'Email',
    site: 'Сайт',
  });

  const VALUES = Object.freeze({
    phone: (value) => value,
    email: (value) => value,
    site: (value) => {
      let a = document.createElement('a');
      a.href = value;
      return a.hostname;
    }
  });

  const HREFS = Object.freeze({
    phone: (value) => {
      let phone = value.replace(/[\(\)\-\s]/g, '');
      return `tel:${phone}`;
    },
    email: (value) => `mailto:${value}`,
    site: (value) => value,
  });

  export default {
    name: 'Contacts',
    props: {
      isHiddenSettingsBtn: {
        type: Boolean,
        default: false,
      }
    },

    components: {
      Section,
    },

    computed: {
      contacts() {
        return this.actualContacts.map((contact) => {
          let value = this.$store.state.contacts[contact];
          return {
            key: contact,
            icon: ICONS[contact],
            label: LABELS[contact],
            value: VALUES[contact](value),
            href: HREFS[contact](value)
          }
        });
      },

      actualContacts() {
        return this.allContacts.filter((contact) => {
          return this.$store.state.contacts[contact];
        });
      },

      allContacts() {
        return ['phone', 'email', 'site'];
      }
    }
  }
</script>

<style scoped>
  .contacts__list {
    margin: 0;
    padding: 0;
  }

  .contacts__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }

  .contacts__label {
    width: 35px;
    text-align: center;
    font-size: 20px;
    line-height: 1;
  }

  .contacts__value {
    margin: 0;
    margin-left: 5px;
    padding: 0;
  }

  .contacts__link {
    color: inherit;
    text-decoration: none;
  }

  .contacts__link:hover {
    text-decoration: none;
  }
</style>
