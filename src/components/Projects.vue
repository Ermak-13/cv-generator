<template lang="html">
  <Section
    name="projects"
    title="Портфолио"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">

    <ul class="projects__list">
      <li
        class="projects__item"
        v-for="(project, i) in $store.state.projects">
        <article class="project">
          <button
            class="remove-button"
            v-on:click="onClickRemoveBtn(i)"
            v-if="!isHiddenRemoveBtn">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>

          <a
            class="project__img-wrapper"
            v-bind:href="project.href">
            <img
              class="project__img"
              v-bind:src="project.img"
              v-bind:alt="project.title">
          </a>

          <div class="project__content">
            <header class="project__header">
              <a
                class="project__h-link"
                v-bind:href="project.href">
                <h1 class="project__h">
                  {{ project.title }}
                </h1>
              </a>

              <a
                class="project__link"
                v-bind:href="project.href">
                {{ project.href }}
              </a>

              <div
                class="project__description editor-html"
                v-html="project.description">
              </div>
            </header>
          </div>
        </article>
      </li>
    </ul>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  export default {
    name: 'Projects',
    props: ['isHiddenSettingsBtn', 'isHiddenRemoveBtn'],

    components: {
      Section,
    },

    methods: {
      onClickRemoveBtn(i) {
        this.$store.commit('removeProject', i);
      }
    }
  }
</script>

<style scoped>
  .projects__list {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px 30px;

    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .projects__item {
    overflow: hidden;
  }

  .project__img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 210px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .project__img {
    display: block;
  }

  .project__header {
    margin-bottom: 5px;
  }

  .project__h-link {
    color: inherit;
    text-decoration: none;
  }

  .project__h-link:hover {
    text-decoration: none;
  }

  .project__h {
    margin: 0;
    font-size: 1.4em;
    line-height: 1;
  }

  .project__link {
    display: block;
    max-width: 100%;
    font-size: 0.9em;
    font-style: italic;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
