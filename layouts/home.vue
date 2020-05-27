<template>
  <v-app>
    <myHeader />

    <v-parallax dark src="/back.jpg" alt="Welcome to Impromptu Tasks">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">Impromptu Tasks</h1>
          <h4 class="subheading">let us make you more productive</h4>
          <v-btn style="display:blcock" large class="my-8 myCenter" outlined center color="white">
            <NuxtLink to="/">Get Started</NuxtLink>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <loadingGlare v-show="loadingGlare" />

    <!-- application goes here -->
    <v-content class="pt-5">
      <v-container>
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
.banner {
  min-width: 100%;
  min-height: 50%;
}
</style>
