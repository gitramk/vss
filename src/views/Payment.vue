<template>
  <main>
    <v-row style="background-color:#00152c">
      <v-col cols="5" dark>
        <div
          class="d-md-flex align-items-center hr-aside-bg p-2 min-vh-100"
          style='background-image: url("https://mss-p-034-delivery.stylelabs.cloud/api/public/content/ce7b4969d85047a7a11bbfef74367d81?v=0b366201");'
        >
          <div class="timeline__container">
            <div class="timeline__line"></div>
            <div
              class="timeline__point"
              style="transform: translate3d(0px, -68px, 0px);"
            >
              <div class="timeline__highlight-point "></div>
              <div class="timeline__point-content">
                <div class="timeline__content--heading mb-2">About Me</div>
              </div>
            </div>
            <div class="timeline__point ">
              <div class="timeline__highlight-point "></div>
              <div class="timeline__point-content">
                <div class="timeline__content--heading mb-2">
                  Purchase a E-Token
                </div>
              </div>
            </div>
            <div class="timeline__point isActive">
              <div class="timeline__highlight-point highlighted"></div>
              <div class="timeline__point-content">
                <div class="timeline__content--heading mb-2">
                  Receive E-Token
                </div>
                <div class="timeline__point-contentbody isVisible">
                  <div class="timeline__content--large-heading">
                    {{ getSubText }}
                  </div>
                  <div class="quote-plain mt-2">
                    <blockquote class="small">
                      <p class="plain"></p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div></div
      ></v-col>
      <v-col cols="6">
        <div
          id="content"
          class="container-fluid component hero-plain col-9 m-lg-t"
        >
          <div class="status-container">
            <p class="status-message">
              <span v-if="type === 'error'" class="t-md quote-plain">
                Error! Please review response in console and refer to
                <a
                  href="https://docs.adyen.com/development-resources/response-handling"
                  >Response handling.</a
                >
                {{ reason }}
              </span>
              <span v-else-if="type === 'failed'" class="t-md quote-plain">
                The payment was refused. Please try a different payment method
                or card. {{ reason }}
              </span>
              <span v-else-if="type === 'pending'" class="t-md quote-plain">
                Your order has been received! Payment completion pending.
              </span>
              <span v-else-if="type === 'success'" class="t-md quote-plain">
                Your order has been successfully placed. <br />
                You are now in the top 1000 and step closer on purchasing new
                Grenadier.
              </span>
            </p>
          </div>
          <v-row class="ml-10 mt-10 mb-10">
            <v-col cols="8" dark>
              <img
                src="https://mss-p-034-delivery.stylelabs.cloud/api/public/content/e8d841709f244bc39a51a18d07d2f90d?v=5ff94b48"
                class="img-fluid"
                alt="..."
              />
            </v-col>
          </v-row>
          <span v-if="type === 'success'" class="t-md quote-plain ml-10 mt-10"
            >Your Grenadier is here.</span
          >
          <div v-if="type === 'success'" class="ml-10 mt-10">
            Please check your E-mail for next steps.
          </div>
        </div>
      </v-col>
      <v-col col="1"></v-col>
    </v-row>
  </main>
</template>

<script>
import PaymentService from "@/services/payment";
import TokenService from "@/services/TokenService";
export default {
  computed: {
    getSubText() {
      if (this.type == "success") {
        return "Awesome, you will get your Grenadier very soon.";
      } else if (this.type == "error") {
        return "Something went haywire, please check.";
      }
      return "";
    },
  },
  data() {
    return {
      type: "",
      refNo: "",
      reason: "",
    };
  },
  props: ["emailId"],
  async mounted() {
    this.$store.dispatch("updateLoading", true);
    const that = this;
    const redirect = this.$route.query.redirectResult;
    const details = {};
    details.redirectResult = redirect;
    const payload = {
      details: {
        redirectResult: redirect,
      },
      // paymentData: this.$store.state.paymentData,
    };

    try {
      const response = await PaymentService.paymentDetails(payload);
      that.refNo = response.data.pspReference;
      if (response.data.resultCode == "Authorised") {
        try {
          const orderRes = await TokenService.createOrder(
            that.emailId,
            that.refNo
          );
          if (orderRes.status == 200) {
            that.type = "success";
          }
          console.log(orderRes);
        } catch (error) {
          that.type = "error";
          that.reason =
            "Payment is successful. Something happened with backend";
          // Error 😨
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            const message = error.response.data.error.message.value;
            if (message.includes("Already")) {
              that.reason =
                " \n Congrats! You have already registered for the token";
            } else {
              that.reason =
                "Payment is successful. Something happened with backend" +
                "\n " +
                message;
            }
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log("req" + error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log("Error", error.message);
          }
        }

        this.$store.dispatch("updateLoading", false);
      } else {
        switch (response.data.resultCode) {
          case "Pending":
          case "Received":
            that.type = "pending";

            break;
          case "Refused":
            that.type = "error";
            that.reason = response.data.refusalReason;

            break;
          default:
            that.type = "error";

            break;
        }
      }
      // Conditionally handle different result codes for the shopper

      this.$store.dispatch("updateLoading", false);
    } catch (err) {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
      this.$store.dispatch("updateLoading", false);
    }
  },
};
</script>

<style>
.quote-plain > a {
  text-decoration: underline;
  text-decoration-color: red;
}
</style>
