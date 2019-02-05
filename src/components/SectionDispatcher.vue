<script>
  import MainInfo from './MainInfo.vue';
  import Contacts from './Contacts.vue';
  import About from './About.vue';
  import Languages from './Languages.vue';
  import Skills from './Skills.vue';
  import Educations from './Educations.vue';
  import Projects from './Projects.vue';
  import Jobs from './Jobs.vue';

  export default {
    name: 'SectionDispatcher',
    props: [
      'type'
    ],

    components: {
      MainInfo,
      Contacts,
      About,
      Languages,
      Skills,
      Educations,
      Projects,
      Jobs,
    },

    render(createElement) {
      return createElement(
        this.type, {
          props: {
            isHiddenSettingsBtn: false,
            isHiddenRemoveBtn: true
          }
        }
      );
    }
  }
</script>
