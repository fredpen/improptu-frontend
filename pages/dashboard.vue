<template>
  <v-layout>
    <v-row>
      <v-col cols="2" class="d-none d-sm-flex">
        <dashboard-panel></dashboard-panel>
      </v-col>
      <v-col>
        <v-btn cols="10" block color="success">body</v-btn>
      </v-col>
    </v-row>
    <br />
    <!-- <v-btn block color="success">text</v-btn> -->
  </v-layout>
</template>


<script>
import dashboardPanel from "../components/dashboardPanel.vue";

export default {
  components: { dashboardPanel },
  head() {
    return {
      title: "My Dashboard",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Manage your dashboard"
        }
      ]
    };
  }
};
</script>
