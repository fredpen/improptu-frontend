<template>
    <v-app>
        <!-- <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            apps goes here
        </v-navigation-drawer> -->

        <v-app-bar :clipped-left="clipped" fixed app my-4>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon
                    >mdi-{{
                        `chevron-${miniVariant ? "right" : "left"}`
                    }}</v-icon
                >
            </v-btn>

            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>mdi-application</v-icon>
            </v-btn>

            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>mdi-minus</v-icon>
            </v-btn>

            <v-toolbar-title v-text="title" />
            <v-spacer />

            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- application goes here -->
        <v-content>
            <v-container style="max-width:1500px">
                <nuxt />
            </v-container>
        </v-content>

        <!-- right side application drawer -->
        <v-navigation-drawer
            width="400"
            v-model="rightDrawer"
            :right="right"
            temporary
            fixed

        >
            <v-btn fab @click="rightDrawer = false" class="mx-2" color="primary">
                <v-icon dark>mdi-close</v-icon>
            </v-btn>
            <auth></auth>
        </v-navigation-drawer>

        <!-- <footer></footer> -->
        <v-footer :fixed="fixed" app>
            <span>Impromptu-Tasks &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import auth from "../components/auth.vue";

export default {
    components: { auth },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Impromptu-Tasks"
        };
    }
};
</script>
