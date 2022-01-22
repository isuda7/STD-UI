import Vue from "vue";
import Router from "vue-router";

// Home
import Home from "./views/Home.vue";
import Main from "./views/pages/Main.vue";
import Intro from "./views/pages/Intro.vue";

// Vue API
import VueGrammar from "./views/pages/vue_01_grammar.vue";
import VueRendering from "./views/pages/vue_02_rendering.vue";
import VueBinding from "./views/pages/vue_03_binding.vue";
import VueComponents from "./views/pages/vue_04_components.vue";
import VueSlots from "./views/pages/vue_05_slots.vue";
import VueTransition from "./views/pages/vue_06_transition.vue";

// Vuetify Petterns
import VuetifyBoardList from "./views/pages/vuetify_01_boardList.vue";
import VuetifyBoardWrite from "./views/pages/vuetify_02_boardWrite.vue";

// Custom Components
import CustomButtons from "./views/pages/custom_01_buttons.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "intro", component: Intro },
    { path: "/Vue", name: "home", component: Home, children: [
      { path: "/Vue", name: "main", component: Main },

      // Vue API
      { path: "/VueGrammar", name: "VueGrammar", component: VueGrammar },
      { path: "/VueRendering", name: "VueRendering", component: VueRendering },
      { path: "/VueBinding", name: "VueBinding", component: VueBinding },
      { path: "/VueComponents", name: "VueComponents", component: VueComponents },
      { path: "/VueSlots", name: "VueSlots", component: VueSlots },
      { path: "/VueTransition", name: "VueTransition", component: VueTransition },

      // Vuetify Petterns
      { path: "/VuetifyBoardList", name: "VuetifyBoardList", component: VuetifyBoardList },
      { path: "/VuetifyBoardWrite", name: "VuetifyBoardWrite", component: VuetifyBoardWrite },
      
      // Custom Components
      { path: "/CustomButtons", name: "CustomButtons", component: CustomButtons },
    ]
  },
  ]
});
