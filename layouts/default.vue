<template>
  <v-app>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :disable-resize-watcher="true"
      fixed
      app
    >apps goes here</v-navigation-drawer>-->

    <myHeader />

    <loadingGlare v-show="loadingGlare" />

    <!-- application goes here -->
    <v-content class="mb30">
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>

    <!-- right side application drawer -->
    <v-navigation-drawer width="400" :value="rightDrawer" :right="true" temporary fixed>
      <v-btn fab @click="setDrawer()" class="mx-2" color="primary">
        <v-icon dark>mdi-close</v-icon>
      </v-btn>
      <auth></auth>
    </v-navigation-drawer>

    <!-- footer -->
    <myFooter class="mt-5" />
  </v-app>
</template>

<script>
import auth from "../components/auth.vue";
import baseMixins from "../plugins/utilities/baseMixin.vue";
import myFooter from "../components/footer";
import myHeader from "../components/header";
import loadingGlare from "../components/uikits/loadingGlare";

export default {
  mixins: [baseMixins],
  components: { auth, myFooter, myHeader, loadingGlare },
  data() {
    return {};
  }
};
</script>


<style scoped>
</style>
