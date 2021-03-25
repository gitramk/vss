import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentData: "",
    isLoading: false,
    salesPrice: {},
    bpNumber: "",
  },
  mutations: {
    SET_PAYMENT_DATE(state, value) {
      state.paymentData = value;
    },
    SET_LOADING_VALUE(state, value) {
      state.isLoading = value;
    },
    SET_SALES_PRICE(state, value) {
      state.salesPrice = value;
    },
    SET_BP_NUMBER(state, value) {
      state.bpNumber = value;
    },
  },
  actions: {
    setPaymentData({state, commit}, value) {
      if (state) {
        commit("SET_PAYMENT_DATE", value);
      }
    },
    updateLoading({state, commit}, value) {
      if (state) {
        commit("SET_LOADING_VALUE", value);
      }
    },
    setSalesPrice({state, commit}, value) {
      if (state) {
        commit("SET_SALES_PRICE", value);
      }
    },
    setBPNumber({state, commit}, value) {
      if (state) {
        commit("SET_BP_NUMBER", value);
      }
    },
  },
  modules: {},
});
