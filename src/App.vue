<template>
  <div>
    <IneosWeb />

    <router-view></router-view>

    <Footer />
    <v-app>
      <v-dialog v-model="$store.state.isLoading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular
              indeterminate
              :size="70"
              :width="7"
              color="red"
            ></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-app>
  </div>
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

  data() {
    return {};
  },
};
</script>
<style></style>
