<template>
  <v-container>
    <v-layout text-xs-center align-center justify-center wrap style="height:90vh">
      <v-flex xs8>
        <v-layout mt-5>
          <v-flex xs-3>
            <router-link
              :to="vueItems.href"
              style="text-decoration:none; font-size:20px; color:#42b983;"
            >
              <div>
                <svg style="width:150px;height:150px" viewBox="0 0 24 24">
                  <path
                    fill="#42b983"
                    d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"
                  ></path>
                </svg>
              </div>
              {{ vueItems.text }}
            </router-link>
          </v-flex>
          <v-flex xs-3>
            <a
              :href="stdItems.href"
              target="_blank"
              style="text-decoration:none; font-size:20px; color:#ff6600;"
            >
              <div>
                <svg style="width:150px;height:150px" viewBox="0 0 24 24">
                  <path
                    fill="#ff6600"
                    d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
                  ></path>
                </svg>
              </div>
              {{ stdItems.text }}
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    vueItems: {
      text: "Standard VueJS",
      href: "/Vue"
    },
    stdItems: {
      text: "Standard HTML5",
      href: "/Home/html/index.html"
    }
  })
};
</script>

<style>
</style>
