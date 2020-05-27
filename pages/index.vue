<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex>
        <!-- how it works -->
        <div>
          <v-card-title class="text-center justify-center py-6">
            <h1 class="display-3">How it works</h1>
          </v-card-title>

          <v-tabs v-model="tab" background-color="transparent" color="primary" centered>
            <v-tab v-for="(item, index) in items" :key="index">{{ item.name }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, index) in items" :key="index">
              <v-card color="basil" flat>
                <v-card-text class="text-center">{{ item.text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>

        <v-row style="justify-content:center" class="mt-4">
          <v-btn style="display:blcock" large class="mx-2 myCenter" outlined center color="primary">
            <NuxtLink to="/">Get Started</NuxtLink>
          </v-btn>
        </v-row>
      </v-flex>

      <!-- newest tasks -->
      <v-flex style="margin-top:90px">
        <!-- <h1>Recent Tasks</h1> -->
        <v-sheet class="mx-auto" elevation="8" max-width="100%">
          <v-slide-group
            v-model="model"
            class="pa-4"
            :multiple="false"
            :mandatory="false"
            :show-arrows="true"
            :center-active="false"
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
              <v-card
                :color="active ? 'transparent' : ''"
                class="ma-4"
                height="300"
                width="300"
                @click="toggle"
              >
                <v-img
                  src="https://picsum.photos/350/165?random"
                  height="80%"
                  width="100%"
                  class="grey darken-4"
                ></v-img>
                <v-card-title class="title">height</v-card-title>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-flex>

      <!-- testemoinals -->
      <v-flex>
        <div style="margin-top:90px">
          <h1 class="my-5">What people are saying about our service</h1>
          <v-sheet light class="mx-auto" elevation="0" max-width="100%">
            <v-card elevation="24" max-width="444" class="mx-auto">
              <v-carousel
                style="min-width:550px"
                :show-arrows="true"
                :continuous="true"
                :cycle="false"
                interval="4000"
                :hide-delimiters="true"
                delimiter-icon="mdi-minus"
                height="300"
              >
                <v-carousel-item v-for="(testemoinal, i) in testemoinals" :key="i">
                  <v-sheet light height="100%" tile>
                    <v-row color="transparent" class="fill-height" align="center" justify="center">
                      <div style="max-width:53%">
                        <p>{{ testemoinal.text }}</p>
                        <v-list two-line>
                          <v-list-item>
                            <v-list-item-avatar>
                              <v-img :src="`/${testemoinal.image}`"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content class="textPrimary">
                              <v-list-item-title class="text-capitalize">{{ testemoinal.name }}</v-list-item-title>
                              <v-list-item-subtitle class="text-capitalize">{{ testemoinal.job }}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-sheet>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  layout: "home",
  components: {},
  data() {
    return {
      // products
      model: null,

      // testemoinals
      testemoinals: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          name: "fredo",
          job: "Software Engineer",
          image: "test1.jpeg"
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          name: "Oladipupo Fredrick",
          job: "Manager Engineer",
          image: "test2.jpeg"
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          name: "Caleb the boss",
          job: "Manager Engineer",
          image: "test3.jpeg"
        }
      ],

      //   tab props
      tab: null,
      items: [
        {
          name: "Post task",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          name: "Task Assignment",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          name: "Review and Payment",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    };
  }
};
</script>

<style scoped>
.banner {
  min-width: 100%;
  min-height: 50%;
}
</style>
