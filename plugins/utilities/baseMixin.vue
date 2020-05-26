<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      loadingGlare: true
    };
  },

  created() {
    if (process.client) {
      let token = localStorage.setItem("token", "sdsdsdsd");
      this.setUser();
    }
    this.loadingGlare = false;
  },

  methods: {
    setUser() {
      let user = { name: "fred", sex: "male" };
      this.$store.commit("auth/setUser", user);
    },

    setDrawer() {
      return this.$store.commit("auth/setRightDrawer");
    }
  },

  computed: {
    rightDrawer() {
      return this.$store.state.auth.rightDrawer;
    },

    user() {
      return this.$store.state.auth.user;
    }
  }
};
</script>
