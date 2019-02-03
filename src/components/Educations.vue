<template lang="html">
  <Section
    name="educations"
    title="Образование"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">

    <ol class="educations__list">
      <li
        class="educations__item"
        v-for="(education, i) in sortedEducations">
        <div
          class="education__point"
          v-bind:style="educationPointStyles"></div>

        <article class="education">
          <header class="education__header">
            <h1 class="education__h">
              {{ education.university }}
            </h1>
            <p class="education__date">
              {{ period(education) }}
            </p>
          </header>

          <p class="education__description">
            {{ description(education) }}
          </p>
        </article>

        <button
          class="education__remove-button remove-button"
          v-on:click="onClickRemoveBtn(education.index)"
          v-if="!isHiddenRemoveBtn">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </li>
    </ol>
  </Section>
</template>

<script>
  import Section from './base/Section.vue'

  export default {
    name: 'Educations',
    props: ['isHiddenSettingsBtn', 'isHiddenRemoveBtn'],

    components: {
      Section,
    },

    computed: {
      sortedEducations() {
        let educations = this.$store.state.educations;
        return educations
          .map((x, i) => {
            x.index = i;
            return x;
          })
          .sort((a, b) => {
            a.startedAt - b.startedAt
          });
      },

      educationPointStyles() {
        return {
          backgroundColor: this.$store.state.settings.leftColBGColor,
          borderColor: this.$store.state.settings.leftColColor,
        };
      }
    },

    methods: {
      period(education) {
        return [education.startedAt, education.finishedAt]
          .filter((x) => x)
          .join(' - ');
      },

      description(education) {
        return [education.faculty, education.degree]
          .filter((x) => x)
          .join(', ');
      },

      onClickRemoveBtn(index) {
        this.$store.commit('removeEducation', index);
      }
    }
  }
</script>

<style scoped>
  .educations__list {
    padding-left: 15px;
    border-left: 2px solid;
    list-style: none;
  }

  .educations__item {
    position: relative;
    margin-bottom: 10px;
  }

  .education__point {
    position: absolute;
    left: -15px;
    top: 50%;

    width: 8px;
    height: 8px;
    margin-left: -7px;
    margin-top: -7px;
    border-radius: 50%;
    border: 2px solid;
  }

  .education__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;

    line-height: 1;
  }

  .education__h {
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.15em;
  }

  .education__date {
    margin: 0;
    margin-bottom: 5px;
  }

  .education__description {
    margin: 0;
    font-style: italic;
    font-size: 0.9em;
  }

  .education__remove-button {
    position: absolute;
    right: 0;
    top: 50%;
    margin-right: -10px;
    margin-top: -10px;
  }
</style>
