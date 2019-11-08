<template lang="html">
  <div class="content drag">
    <div
      class="content__left-col"
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
      class="content__right-col"
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
          return this.$store.state.layout.leftCol;
        },

        set(value) {
          this.$store.commit('updateLayoutLeftCol', value);
        }
      },

      rightColList: {
        get() {
          return this.$store.state.layout.rightCol;
        },

        set(value) {
          this.$store.commit('updateLayoutRightCol', value);
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    grid-area: content;

    display: grid;
    width: 210mm;
    min-height: 297mm;

    grid-template-columns: 275px 1fr;

    box-sizing: border-box;
    margin: 25px 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .content__left-col,
  .content__right-col {
    padding: 20px 0;
  }

  .drag__area {
    min-height: 100px;
  }

  @media print {
    .content {
      margin: 0;
    }
  }
</style>
