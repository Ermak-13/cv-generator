<template lang="html">
  <Section
    name="skills"
    title="Навыки"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">
    <ul class="skills__list">
      <li
        class="skills__item"
        v-bind:style="skillStyles"
        v-for="skill in $store.state.skills">
        {{ skill }}

        <button
          class="remove-button"
          v-if="!isHiddenRemoveBtn"
          v-on:click="onClickRemoveBtn(i)">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </li>
    </ul>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  export default {
    name: 'Skills',
    props: ['isHiddenSettingsBtn', 'isHiddenRemoveBtn'],

    components: {
      Section,
    },

    computed: {
      skillStyles() {
        return {
          backgroundColor: this.$store.state.settings.leftColColor,
          color: this.$store.state.settings.leftColBGColor,
        };
      }
    },

    methods: {
      onClickRemoveBtn(index) {
        this.$store.commit('removeSkill', index);
      }
    }
  }
</script>

<style scoped>
  .skills__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -2.5px;

    padding-left: 0;
    margin: 0;
    list-style: none;
  }

  .skills__item {
    margin: 2.5px;
    padding: 2.5px 7.5px;
    border-radius: 2.5px;
  }
</style>
