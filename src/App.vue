<template>
  <v-app>
    <v-app-bar app color="#00152c" clipped-left clipped-right dark>
      <IneosWeb
    /></v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="#00152c" padless app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import IneosWeb from "@/components/IneosWeb.vue";

export default {
  name: "App",

  components: {
    Footer,
    IneosWeb,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped></style>
