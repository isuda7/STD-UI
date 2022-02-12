<template>
  <v-app>
    <!-- s: Navigation -->
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list dense>
        <!-- s: Home -->
        <v-list-group :prepend-icon="AllItems[0].icon">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>{{ AllItems[0].title }}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="HomeItem in HomeItems"
            :key="HomeItem.title"
            @click
            :to="HomeItem.toLink"
          >
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ HomeItem.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <!-- e: Home -->

        <!-- s: Vue API -->
        <v-list-group :prepend-icon="AllItems[1].icon" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>{{ AllItems[1].title }}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile v-for="VueItem in VueItems" :key="VueItem.title" @click :to="VueItem.toLink">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ VueItem.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <!-- e: Vue API -->

        <!-- s: Veutify Petterns -->
        <v-list-group :prepend-icon="AllItems[2].icon">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>{{ AllItems[2].title }}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="VuetifyItem in VuetifyItems"
            :key="VuetifyItem.title"
            @click
            :to="VuetifyItem.toLink"
          >
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ VuetifyItem.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <!-- e: Veutify Petterns -->

        <!-- s: Custom Components -->
        <v-list-group :prepend-icon="AllItems[3].icon">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>{{ AllItems[3].title }}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="CustomItem in CustomItems"
            :key="CustomItem.title"
            @click
            :to="CustomItem.toLink"
          >
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ CustomItem.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <!-- e: Custom Components -->
      </v-list>
    </v-navigation-drawer>
    <!-- e: Navigation -->

    <!-- s: Toolbar -->
    <v-toolbar app fixed clipped-left color="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          Vue
          <span class="font-weight-light">Samples</span>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <!-- e: Toolbar -->

    <!-- s: Content -->
    <v-content>
      <v-container pa-5>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- e: Content -->

    <!-- s: Footer -->
    <core-footer></core-footer>
    <!-- e: Footer -->
  </v-app>
</template>

<script>
import coreFooter from "@/components/core/core-footer";
export default {
  name: "Home",
  data() {
    return {
      drawer: null,
      AllItems: [
        { title: "Home", icon: "mdi-home" },
        { title: "Vue General", icon: "mdi-vuejs" },
        { title: "Vuetify Petterns", icon: "mdi-vuetify" },
        { title: "Custom Petterns", icon: "mdi-cannabis" }
      ],
      HomeItems: [
        { title: "Intro", toLink: "/" },
        { title: "Main", toLink: "/Vue" }
      ],
      VueItems: [
        { title: "Grammar", toLink: "/VueGrammar" },
        { title: "Rendering", toLink: "/VueRendering" },
        { title: "Binding", toLink: "/VueBinding" },
        { title: "Components", toLink: "/VueComponents" },
        { title: "Slots", toLink: "/VueSlots" },
        { title: "Transition", toLink: "/VueTransition" }
      ],
      VuetifyItems: [
        { title: "BoardList", toLink: "/VuetifyBoardList" },
        { title: "BoardWrite", toLink: "/VuetifyBoardWrite" },
      ],
      CustomItems: [
        { title: "Buttons", toLink: "/CustomButtons" }
        // { title: "Rendering", toLink: "/VueRendering" },
        // { title: "Binding", toLink: "/VueBinding" },
        // { title: "Components", toLink: "/VueComponents" },
        // { title: "Slots", toLink: "/VueSlots" },
        // { title: "Transition", toLink: "/VueTransition" }
      ],
      mini: true,
      right: null
    };
  },
  components: {
    coreFooter
  }
};
</script>
