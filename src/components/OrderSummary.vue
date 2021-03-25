<template>
  <div class="pt-20 ml-10">
    <v-card class="mx-10 mt-10" max-width="400">
      <v-img
        class=""
        src="https://mss-p-034-delivery.stylelabs.cloud/api/public/content/e8d841709f244bc39a51a18d07d2f90d?v=5ff94b48"
        height="200px"
      ></v-img>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            Order Summary
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list class="transparent">
        <v-list-item>
          <v-list-item-title>Grenadier Token </v-list-item-title>

          <v-list-item-subtitle class="text-right">
            € {{ getNetValue }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Tax </v-list-item-title>

          <v-list-item-subtitle class="text-right">
            € {{ getTax }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title>Total </v-list-item-title>

          <v-list-item-subtitle class="text-right">
            € {{ getTotal }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  computed: {
    getTax() {
      return this.$store.state.salesPrice.tax;
    },
    getNetValue() {
      return this.$store.state.salesPrice.netValue;
    },
    getTotal() {
      return this.$store.state.salesPrice.totalValue;
    },
  },
};
</script>

<style></style>
