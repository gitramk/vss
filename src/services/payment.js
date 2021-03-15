import axios from "axios";
import {Client, Config} from "@adyen/api-library";
import store from "../store/index";
const {v4: uuid} = require("uuid");
// Adyen Node.js API library boilerplate (configuration, etc.)
const config = new Config();
config.apiKey =
  "AQEqhmfuXNWTK0Qc+iSZvEEXlMWOXIRAAodDTmBz6LnlzV04L38Xjgcf9zqgEMFdWw2+5HzctViMSCJMYAc=-6LA3XcuzTcI5yV2gDvEN1CodQ2ESGY9Mq4FI8YTFM+Y=-79{8X%c<bdBtn_6]";
const client = new Client({config});
client.setEnvironment("TEST");

const apiClient = axios.create({
  baseURL: "https://checkout-test.adyen.com/v67/",
  withCredentials: false,
  headers: {
    "X-API-Key": config.apiKey,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default {
  setPaymentData(data) {
    store.dispatch("setPaymentData", data);
  },
  getPayments() {
    return apiClient.post("paymentMethods", {
      merchantAccount: "INEOSAutomotiveECOM",
    });
  },
  initiatePayment(url, data, emailId) {
    let orderRef = uuid();
    const paylod = {
      amount: {
        currency: "EUR",
        value: 45000,
      },
      reference: orderRef,
      paymentMethod: data.paymentMethod,
      browserInfo: {
        userAgent:
          "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9) Gecko/2008052912 Firefox/3.0",
        acceptHeader:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      returnUrl: `http://localhost:8080/Payment/${emailId}`,
      merchantAccount: "INEOSAutomotiveECOM",
    };
    return apiClient.post(url, paylod);
  },
  paymentDetails(payload) {
    return apiClient.post("payments/details", payload);
  },
};
