<template>
  <v-app-bar :clipped-left="clipped" fixed app my-4>
    <v-row class="headClass">
      <ul class="navList">
        <li title="Home" class="listItem text-capitalize font-weight-thin">
          <NuxtLink to="/">Impromptu-Tasks</NuxtLink>
        </li>
      </ul>

      <ul class="navList">
        <li
          class="listItem text-capitalize font-weight-thin"
          v-for="(item, index) in items"
          :key="index"
        >
          <NuxtLink :to="`${item.to}`">{{ item.title }}</NuxtLink>
        </li>
      </ul>

      <v-spacer />
      <ul class="navList">
        <li class="listItem text-capitalize font-weight-thin">welcome {{ user.name }}</li>
      </ul>

      <v-btn icon @click.stop="setDrawer()">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>


<script>
import baseMixin from "../plugins/utilities/baseMixin.vue";

export default {
  mixins: [baseMixin],

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-chart-bubble",
          title: "Masters",
          to: "/inspire"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Jobs",
          to: "/tasks"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Dashboard",
          to: "/dashboard"
        }
      ]
    };
  }
};
</script>

<style scoped>
.navList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

li {
  margin: 0 10px;
}

a {
  color: black;
}

.headClass {
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

a:hover {
  color: #d9138a;
  font-size: 15px;
}
</style>
