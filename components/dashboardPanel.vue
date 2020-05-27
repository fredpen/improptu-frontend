<template>
  <v-sheet width="100%" elevation="1" class="d-flex" color="transparent" height="100vh">
    <v-row>
      <!-- <v-col cols="12"> -->
      <v-avatar class="mx-auto my-3">
        <img src="/test2.jpeg" alt="John" />
      </v-avatar>
      <!-- </v-col>

      <!-- <v-flex>-->
      <p class="heading">Welcome Fred</p>
      <p class="sub-heading">fredrickksola@gmail.com</p>
    </v-row>
    <!-- </v-flex> -->
  </v-sheet>
</template>



<script>
import { mapMutations } from "vuex";

export default {
  name: "dashBoardPanel",

  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>

<style scoped>
ul {
  padding-left: 0;
}

a {
  color: whitesmoke;
}

h3 {
  letter-spacing: 0.1em;
}

a:hover {
  color: #d9138a;
  font-size: 15px;
}
</style>

