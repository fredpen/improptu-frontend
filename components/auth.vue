<template>
  <v-row fluid align="center" justify="center">
    <v-col cols="11" class="mt-12">
      {{ user.name }} goes here
      <!-- login -->
      <template v-if="isLogin">
        <v-card class="elevatsion-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Login" name="login" type="text"></v-text-field>

              <v-text-field id="password" label="Password" name="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="setUser" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
        <p @click="register()">New user? Create an account here</p>
      </template>

      <!-- register -->
      <v-card v-else class="elevatsion-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Register</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="name" name="name" type="text"></v-text-field>
            <v-text-field label="email" name="email" type="email"></v-text-field>
            <v-text-field label="phone number" name="phone number" type="phone"></v-text-field>
            <v-text-field label="password" name="password" type="password"></v-text-field>
            <v-select :items="items" attach chips label="Account Type"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Register</v-btn>
        </v-card-actions>

        <p @click="isLogin = true">Already a User? Sign in here</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import baseMixin from "../plugins/utilities/baseMixin.vue";

export default {
  name: "auth",
  mixins: [baseMixin],

  data() {
    return {
      isLogin: true,
      items: ["male", "female"]
    };
  },

  methods: {
    register() {
      console.log("fee");

      this.loadingGlare = true;
    }
  },

  computed: {}
};
</script>
