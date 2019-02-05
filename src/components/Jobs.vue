<template lang="html">
  <Section
    name="jobs"
    title="Работа"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">

    <ol class="jobs__list">
      <li
        class="jobs__item"
        v-for="(job, i) in this.$store.state.jobs">
        <article class="job">
          <h1 class="job__h">{{ job.company }}</h1>
          <div class="job__subh">
            <p class="job__position">{{ job.position }}</p>
            <p class="job__period">{{ period(job) }}</p>
          </div>

          <div
            class="job__description editor-html"
            v-html="job.description">
          </div>

          <button
            class="job__remove-button remove-button"
            v-on:click="onClickRemoveBtn(i)"
            v-if="!isHiddenRemoveBtn">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </article>
      </li>
    </ol>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  export default {
    name: 'Jobs',
    props: {
      isHiddenSettingsBtn: {
        type: Boolean,
        default: false
      },
      isHiddenRemoveBtn: {
        type: Boolean,
        default: false
      }
    },

    components: {
      Section
    },

    methods: {
      period(job) {
        return [job.startedAt, job.finishedAt]
          .filter((x) => x)
          .join(' - ');
      },

      onClickRemoveBtn(i) {
        this.$store.commit('removeJob', i);
      }
    }
  }
</script>

<style scoped>
  .jobs__list {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .jobs__item:not(:last-child) {
    margin-bottom: 20px;
  }

  .job {
    position: relative;
  }

  .job__h {
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.3em;
    line-height: 1;
  }

  .job__subh {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;

    line-height: 1;
  }

  .job__position {
    margin: 0;
    min-width: 175px;
    margin-right: 10px;
  }

  .job__period {
    margin: 0;
    font-style: italic;
    opacity: 0.6;
  }

  .job__remove-button {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
