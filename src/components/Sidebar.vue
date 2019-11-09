<template lang="html">
  <aside class="sidebar">
    <h1 class="sidebar__h">
      CV Generator
    </h1>

    <p>
      Блоки/секции можно перетаскивать и располагать в
      наилучшим для вас виде.
    </p>

    <SettingsForm />

    <DownloadButton />
  </aside>
</template>

<script>
  import SettingsForm from './SettingsForm.vue';
  import DownloadButton from './DownloadButton.vue';

  export default {
    name: 'Sidebar',

    components: {
      SettingsForm,
      DownloadButton
    }
  }
</script>

<style scoped>
  .sidebar {
    grid-area: sidebar;

    padding: 25px 30px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .sidebar__h {
    margin-top: 0;
  }

  @media print {
    .sidebar {
      display: none;
    }
  }
</style>
