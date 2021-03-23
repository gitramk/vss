import axios from "axios";

const apiClient = axios.create({
  baseURL: "/token/sap/opu/odata/sap/YDP_TOKEN_SRV/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default {
  sendEmailRegistration(emailId, firstName, lastName) {
    return apiClient.get(
      `SendEmailForRegistration?EmailAddress='${emailId}'&FirstName='${firstName}'&LastName='${lastName}'`
    );
  },
  getCustomerDetails(emailId) {
    // return apiClient.get("SFContacts");
    return apiClient.get(`FindSFContact?EmailAddress='${emailId}'`);
  },
  createCustomerDetails(
    firstName,
    lastName,
    emailId,
    phoneNumber,
    streetName,
    city,
    state,
    postCode,
    country
  ) {
    return apiClient.get(
      `CreateSFContact?City='${city}'&Country='${country}'&Email='${emailId}'&FirstName='${firstName}'&LastName='${lastName}'&PhoneNumber='${phoneNumber}'&PostalCode='${postCode}'&State='${state}'&Street='${streetName}'&Title=''`
    );
  },
  createOrder(emailId, pspRef) {
    return apiClient.get(
      `CreateTokenOrder?Email='${emailId}'&Reference='${pspRef}'`
    );
  },
  checkOrder(emailId) {
    return apiClient.get(`GetTokenOrder?Email='${emailId}'`);
  },
  createBP(emailId) {
    return apiClient.get(`CreateSAPBP?Email='${emailId}'`);
  },
  getSalesPrice(bpNumber) {
    return apiClient.get(`GetSalesPrice?Customer='${bpNumber}'`);
  },
  updateSalesforce(
    firstName,
    lastName,
    emailId,
    phoneNumber,
    streetName,
    city,
    state,
    postCode,
    country
  ) {
    return apiClient.get(
      `UpdateSFContact?City='${city}'&Country='${country}'&Email='${emailId}'&FirstName='${firstName}'&LastName='${lastName}'&PhoneNumber='${phoneNumber}'&PostalCode='${postCode}'&State='${state}'&Street='${streetName}'&Title=''`
    );
  },
};
