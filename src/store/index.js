import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentData: "",
    isLoading: false,
  },
  mutations: {
    SET_PAYMENT_DATE(state, value) {
      state.paymentData = value;
    },
    SET_LOADING_VALUE(state, value) {
      state.isLoading = value;
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
  },
  modules: {},
});
