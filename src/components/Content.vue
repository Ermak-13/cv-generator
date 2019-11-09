<template lang="html">
  <div
    class="content drag"
    v-bind:style="contentStyles">
    <div class="page">
      <div
        class="page__left-col"
        v-bind:style="leftColStyles">
        <draggable
          class="drag__area"
          v-model='leftColList'
          v-bind:options="{group:'sections'}">
          <SectionDispatcher
            v-bind:type="section"
            v-for="(section) in leftColList"
            v-bind:key="section" />
        </draggable>
      </div>

      <div
        class="page__right-col"
        v-bind:style="rightColStyles">
        <draggable
          class="drag__area"
          v-model="rightColList"
          v-bind:options="{group:'sections'}">
          <SectionDispatcher
            v-bind:type="section"
            v-for="(section) in rightColList"
            v-bind:key="section" />
        </draggable>
      </div>
    </div>

    <div
      class="page"
      v-if="isPage2Enabled">
      <div
        class="page__left-col"
        v-bind:style="leftColStyles">
        <draggable
          class="drag__area"
          v-model='leftP2ColList'
          v-bind:options="{group:'sections'}">
          <SectionDispatcher
            v-bind:type="section"
            v-for="(section) in leftP2ColList"
            v-bind:key="section" />
        </draggable>
      </div>

      <div
        class="page__right-col"
        v-bind:style="rightColStyles">
        <draggable
          class="drag__area"
          v-model='rightP2ColList'
          v-bind:options="{group:'sections'}">
          <SectionDispatcher
            v-bind:type="section"
            v-for="(section) in rightP2ColList"
            v-bind:key="section" />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import SectionDispatcher from './SectionDispatcher.vue';

  export default {
    name: 'Content',

    components: {
      draggable,
      SectionDispatcher,
    },

    computed: {
      contentStyles() {
        return {
          fontSize: `${this.$store.state.contentFontSize}px`
        }
      },

      isPage2Enabled() {
        return this.$store.state.enabledP2;
      },

      leftColStyles() {
        return {
          backgroundColor: this.$store.state.settings.leftColBGColor,
          color: this.$store.state.settings.leftColColor
        }
      },
      rightColStyles() {
        return {
          backgroundColor: this.$store.state.settings.rightColBGColor,
          color: this.$store.state.settings.rightColColor
        }
      },

      leftColList: {
        get() {
          return this.$store.state.layout.leftCol.filter(this.isEnabledBlock);
        },

        set(value) {
          this.$store.commit('updateLayoutLeftCol', value);
        }
      },

      rightColList: {
        get() {
          return this.$store.state.layout.rightCol.filter(this.isEnabledBlock);
        },

        set(value) {
          this.$store.commit('updateLayoutRightCol', value);
        }
      },

      leftP2ColList: {
        get() {
          return this.$store.state.layout.leftP2Col.filter(this.isEnabledBlock);
        },

        set(value) {
          this.$store.commit('updateLayoutLeftP2Col', value);
        }
      },

      rightP2ColList: {
        get() {
          return this.$store.state.layout.rightP2Col.filter(this.isEnabledBlock);
        },

        set(value) {
          this.$store.commit('updateLayoutRightP2Col', value);
        }
      }
    },

    methods: {
      isEnabledBlock(block) {
        return this.$store.state.enabledBlocks.includes(block);
      }
    }
  }
</script>

<style scoped>
  .content {
    grid-area: content;
  }

  .page {
    position: relative;
    display: grid;
    width: 210mm;
    min-height: 297mm;

    grid-template-columns: 275px 1fr;

    box-sizing: border-box;
    margin: 25px 15px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .page::after {
    content: '';

    position: absolute;
    top: 297mm;
    z-index: 1;

    width: 100%;
    height: 1px;
    background-color: #FF0000;
  }

  .page__left-col,
  .page__right-col {
    padding: 20px 0;
  }

  .drag__area {
    min-height: 100px;
  }

  @media print {
    .page {
      margin: 0;
    }

    .page::after {
      display: none;
    }
  }
</style>
