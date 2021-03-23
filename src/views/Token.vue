<template>
  <v-row style="background-color:#00152c">
    <v-col cols="4" dark>
      <div
        class="d-md-flex align-items-center hr-aside-bg p-2 min-vh-100"
        style='background-image: url("https://mss-p-034-delivery.stylelabs.cloud/api/public/content/ce7b4969d85047a7a11bbfef74367d81?v=0b366201");'
      >
        <div class="timeline__container">
          <div class="timeline__line"></div>
          <div
            class="timeline__point "
            style="transform: translate3d(0px, -68px, 0px);"
          >
            <div class="timeline__highlight-point "></div>
            <div class="timeline__point-content">
              <div class="timeline__content--heading mb-2">About Me</div>
            </div>
          </div>
          <div class="timeline__point isActive">
            <div class="timeline__highlight-point highlighted"></div>
            <div class="timeline__point-content">
              <div class="timeline__content--heading mb-2">
                Purchase a E-Token
              </div>
              <div class="timeline__point-contentbody isVisible">
                <div class="timeline__content--large-heading">
                  Almost Done.
                </div>
                <div class="quote-plain mt-2">
                  <blockquote class="small">
                    <p class="plain"></p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline__point">
            <div class="timeline__highlight-point"></div>
            <div class="timeline__point-content">
              <div class="timeline__content--heading mb-2">
                Receive E-Token
              </div>
            </div>
          </div>
        </div>
      </div></v-col
    >
    <v-col cols="4">
      <div class="hero-plain col-12">
        <h1 class="ml-10 t-md hero-plain">
          Please pay to pre-book your vehicle
        </h1>
      </div>

      <v-card width="100%" class="mx-10 mt-2">
        <div id="dropin-container"></div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <OrderSummary />
    </v-col>
  </v-row>
</template>

<script>
import PaymentService from "@/services/payment";
import OrderSummary from "../components/OrderSummary.vue";
import TokenService from "@/services/TokenService";
let AdyenCheckout;
AdyenCheckout = require("@adyen/adyen-web");
// Event handlers called when the shopper selects the pay button,
// or when additional information is required to complete the payment
async function handleSubmission(state, component, url, emailId) {
  try {
    const res = await PaymentService.initiatePayment(url, state.data, emailId);
    handleServerResponse(res.data, component);
  } catch (error) {
    console.error(error);
    alert("Error occurred. Look at console for details");
  }
}
function filterUnimplemented(pm) {
  pm.paymentMethods = pm.data.paymentMethods.filter((it) =>
    [
      "scheme",
      "ideal",
      "dotpay",
      "giropay",
      "sepadirectdebit",
      "directEbanking",
      "ach",
      "alipay",
      "klarna_paynow",
      "klarna",
      "klarna_account",
      "boletobancario_santander",
    ].includes(it.type)
  );
  return pm;
}
// Handles responses sent from your server to the client
function handleServerResponse(res, component) {
  if (res.action) {
    PaymentService.setPaymentData(res.action.data);

    component.handleAction(res.action);
  } else {
    switch (res.resultCode) {
      case "Authorised":
        window.location.href = "/result/success";
        break;
      case "Pending":
      case "Received":
        window.location.href = "/result/pending";
        break;
      case "Refused":
        window.location.href = "/result/failed";
        break;
      default:
        window.location.href = "/result/error";
        break;
    }
  }
}
export default {
  components: {OrderSummary},
  data() {
    return {
      payments: [],
    };
  },
  props: ["emailId", "BPNumber"],
  computed: {
    getActiveClass() {
      return "timeline__point isActive";
    },
    getHighlightedClass() {
      return "timeline__highlight-point highlighted";
    },
  },
  async mounted() {
    this.$store.dispatch("updateLoading", true);
    let clientKey = "test_YCX3NSHD3JCYJLDXABEPHEPOTIDXP7CD";
    if (!this.BPNumber || this.BPNumber == "") {
      try {
        const bpRes = await TokenService.createBP(this.emailId);
        console.log(bpRes);
      } catch (e) {
        this.$store.dispatch("updateLoading", false);
      }
    } else {
      const salesRes = await TokenService.getSalesPrice(this.BPNumber);
      console.log(salesRes);
    }
    PaymentService.getPayments().then((res) => {
      const configuration = {
        paymentMethodsResponse: filterUnimplemented(res),
        clientKey,
        locale: "en_US",
        environment: "test",
        showPayButton: true,
        paymentMethodsConfiguration: {
          ideal: {
            showImage: true,
          },
          card: {
            hasHolderName: true,
            holderNameRequired: true,
            name: "Credit or debit card",
            amount: {
              value: 45000,
              currency: "EUR",
            },
          },
        },
        onSubmit: (state, component) => {
          if (state.isValid) {
            handleSubmission(state, component, "payments", this.emailId);
          }
        },
        onAdditionalDetails: (state, component) => {
          handleSubmission(state, component, "submitAdditionalDetails");
        },
      };

      const checkout = new AdyenCheckout(configuration);
      checkout.create("dropin").mount("#dropin-container");
      this.$store.dispatch("updateLoading", false);
    });
  },
};
</script>

<style>
.form__label--inline,
.bg--blue .form__label,
.hero-plain,
.quote-plain,
.timeline__content--heading,
.timeline__content--large-heading {
  color: white !important;
}
</style>
