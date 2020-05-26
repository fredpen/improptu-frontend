<template>
  <v-app>
    <myHeader />

    <v-card width="100%" max-height="25%">
      <v-img class="white--text align-end" height="100%" src="/back.jpg">
        <v-card-text class="text--white">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
          <v-card-actions>
            <v-btn large dark color="primary" text>Get started</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-img>
    </v-card>

    <loadingGlare v-show="loadingGlare" />

    <!-- application goes here -->
    <v-content>
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
.banner {
  min-width: 100%;
  min-height: 50%;
}
</style>
