<template>
  <v-card color="#00152c" dark class="mb-12" height="100%">
    <v-row>
      <v-col dark cols="4">
        <div
          class=" hr-aside-bg p-2 min-vh-60"
          style='background-image: url("https://mss-p-034-delivery.stylelabs.cloud/api/public/content/ce7b4969d85047a7a11bbfef74367d81?v=0b366201");'
        >
          <div class="timeline__container">
            <div class="timeline__line"></div>
            <div
              class="timeline__point isActive"
              style="transform: translate3d(0px, -200px, 0px);"
            >
              <div class="timeline__highlight-point highlighted"></div>
              <div class="timeline__point-content">
                <div class="timeline__content--heading mb-2">
                  E-Token Delivered.
                </div>
                <div class="timeline__point-contentbody isVisible">
                  <div class="timeline__content--large-heading">
                    You are already in the queue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></v-col
      >
      <v-col cols="7">
        <div class="hero-plain mt-10 ">
          <h1 class="ml-10 t-md hero-plain">
            Dear {{ firstName }} {{ lastName }} ,
          </h1>
          <h1 class="ml-10 mt-10 t-md hero-plain">
            Cheers! You are already in the queue. <br />
            Thank you so much for your interest in Grenadier.
          </h1>
          <h4 class="ml-10 mt-10 t-md hero-plain">
            You can buy only one token at the moment.
          </h4>
        </div>
        <div class="form__row mt-5">
          <button type="button" class="btn btn--primary" @click="toHome">
            Return Home
          </button>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["firstName", "lastName"],

  data: () => ({}),

  methods: {
    toHome() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style>
.quote-plain blockquote.small p,
.rich-text blockquote.small p {
  font-size: 1.4rem !important;
  line-height: 1.4rem !important;
}
.form__input {
  border-color: rgb(153, 188, 206) !important;
  color: rgb(153, 188, 206) !important;
}
.btn--primary {
  border: 2px solid;
  padding: 20px 48px 20px 24px;
  transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
</style>
