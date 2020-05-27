<template>
  <!-- <v-row> -->
  <v-footer min-height="300px" dark min-width="100%">
    <!-- subscribe -->
    <v-col cols="12" sm="6" md="6">
      <h3 class="mb-4 text-uppercase font-weight-light">Subscription</h3>
      <v-col cols="12" sm="6" md="6">
        <v-text-field solo label="Email Address"></v-text-field>
        <v-btn large color="primary" outlined>Subscribe</v-btn>
      </v-col>
    </v-col>

    <!-- other menu -->
    <v-col v-for="(nav, index) in bottomNav" :key="index" cols="6" sm="6" md="2">
      <h3 class="mb-4 text-uppercase font-weight-light">{{ nav.menuName }}</h3>
      <ul>
        <li
          class="mb-2 text-capitalize font-weight-thin"
          v-for="(menu, index) in nav.options"
          :key="index"
        >
          <NuxtLink :to="`/navs${menu.href}`">{{ menu.name}}</NuxtLink>
        </li>
      </ul>
    </v-col>

    <span
      style="color:#d9138a; display:flex; width:100%; justify-content:center"
      class="font-weight-thin"
      color="primary"
    >Impromptu-Tasks &copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
  <!-- </v-row> -->
</template>



<script>
import { mapMutations } from "vuex";

export default {
  name: "myFooter",

  data() {
    return {
      bottomNav: [
        {
          menuName: "company",
          options: [
            { name: "About", href: "/about-us" },
            { name: "services", href: "/our-services" },
            { name: "features", href: "/our-services" }
          ]
        },
        {
          menuName: "Contact us",
          options: [
            { name: "facebook", href: "/about-us" },
            { name: "twitter", href: "/our-services" },
            { name: "whats app", href: "/our-services" }
          ]
        },
        {
          menuName: "Support",
          options: [
            { name: "Privacy Policy", href: "/about-us" },
            { name: "Return Policy", href: "/our-services" },
            { name: "Terms", href: "/our-services" }
          ]
        }
      ]
    };
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

