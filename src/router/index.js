import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Payment from "../views/Payment.vue";
import Customer from "../views/Customer.vue";
import Register from "@/views/Register.vue";
import Token from "@/views/Token.vue";
import RegistrationSuccessful from "@/views/RegistrationSuccessful.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buy-e-token/:emailId",
    name: "Token",
    component: Token,
    props: true,
  },
  {
    path: "/Customer/:emailId",
    name: "Customer",
    component: Customer,
    props: true,
  },
  {
    path: "/Payment/:emailId",
    name: "Payment",
    component: Payment,
    props: true,
  },
  {
    path: "/register-your-interest",
    name: "Register",
    component: Register,
  },
  {
    path: "/RegistrationSuccessful",
    name: "RegistrationSuccessful",
    component: RegistrationSuccessful,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
