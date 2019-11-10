<template lang="html">
  <Section
    name="languages"
    v-bind:title="$t('languages.title')"
    v-bind:isHiddenSettingsBtn="isHiddenSettingsBtn">
    <table class="languages__table">
      <thead class="languages__thead">
        <tr>
          <th>{{ $t('languages.language') }}</th>
          <th>{{ $t('languages.level') }}</th>
          <th v-if="!isHiddenRemoveBtn">{{ $t('languages.action') }}</th>
        </tr>
      </thead>
      <tbody class="languages__tbody">
        <tr
          class="languages__tr"
          v-for="(l, i) in $store.state.languages.items"
          v-bind:key="i">
          <td class="languages__td">{{ l.language }}</td>
          <td class="languages__td">
            <div
              class="languages__progressbar"
              v-bind:style="progressbarStyles">
              <div
                class="languages__progress"
                v-bind:style="progressStyles(l)">
              </div>
            </div>

            <span class="languages__label">{{ l.levelLabel }}</span>
          </td>

          <td class="languages__td" v-if="!isHiddenRemoveBtn">
            <button
              class="remove-button"
              v-on:click="onClickRemoveBtn(i)">
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
</template>

<script>
  import Section from './base/Section.vue';

  export default {
    name: 'Languages',
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

    computed: {
      progressbarStyles() {
        return {
          backgroundColor: this.$store.state.settings.leftColColor
        };
      },

      progressStyles() {
        return (l) => {
          return {
            backgroundColor: this.$store.state.languages.progressColor,
            width: l.levelValue + '%',
          };
        }
      }
    },

    methods: {
      onClickRemoveBtn(index) {
        this.$store.commit('removeLanguage', index);
      }
    }
  }
</script>

<style scoped>
  .languages__table {
    width: 100%;
    border-collapse: collapse;
  }

  .languages__thead {
    display: none;
  }

  .languages__progressbar {
    width: 100%;
  }

  .languages__progress {
    height: 15px;
  }

  .languages__td {
    box-sizing: border-box;
    position: relative;
    padding-bottom: 15px;
  }

  .languages__td:nth-child(2) {
    width: 120px;
  }

  .languages__td:nth-child(3) {
    padding-left: 10px;
  }

  .languages__label {
    position: absolute;
    right: 0;
    border: 0;
    z-index: 1;
    font-size: 0.9em;
    font-style: italic;
  }
</style>
