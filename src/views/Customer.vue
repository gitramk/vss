<template>
  <v-card color="#00152c" dark class="mb-12" height="100%">
    <v-row>
      <v-col dark cols="4">
        <div
          class="d-md-flex align-items-center hr-aside-bg p-2 min-vh-100"
          style='background-image: url("https://mss-p-034-delivery.stylelabs.cloud/api/public/content/ce7b4969d85047a7a11bbfef74367d81?v=0b366201");'
        >
          <div class="timeline__container">
            <div class="timeline__line"></div>
            <div
              class="timeline__point isActive"
              style="transform: translate3d(0px, -68px, 0px);"
            >
              <div class="timeline__highlight-point highlighted"></div>
              <div class="timeline__point-content">
                <div class="timeline__content--heading mb-2">About Me</div>
                <div class="timeline__point-contentbody isVisible">
                  <div class="timeline__content--large-heading">
                    You are one step closer to Grenadier experience.
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
                  Purchase a E-Token
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
      <v-col cols="7">
        <div class="hero-plain  ">
          <h1 class="ml-10 t-md hero-plain">
            About Me
          </h1>
        </div>

        <div class="form mt-5 ml-5">
          <div class="form__row form__row--required mb-3">
            <div class="d-flex flex-wrap align-items-flex-start">
              <span class="form__label form__label--inline">My name is</span>
              <div class="ml-4 form__field form__field--inline">
                <input
                  :readonly="getReadOnly"
                  type="text"
                  :class="getFirstNameClass"
                  name="firstName"
                  placeholder="First name"
                  aria-label="First name"
                  maxlength="32"
                  v-model="firstName"
                  style="min-height: 40px;"
                  @click="firstNameClicked = true"
                />
                <div
                  class="field-validation-error"
                  v-if="firstName == '' && firstNameClicked"
                >
                  Please add your first name
                </div>
              </div>
              <div class="form__field form__field--inline">
                <input
                  :readonly="getReadOnly"
                  type="text"
                  :class="getLastNameClass"
                  name="lastName"
                  placeholder="Last name"
                  aria-label="Last name"
                  maxlength="32"
                  v-model="lastName"
                  style="min-height: 40px;"
                  @click="lastNameClicked = true"
                />
                <div
                  class="field-validation-error"
                  v-if="lastName == '' && lastNameClicked"
                >
                  Please add your last name
                </div>
              </div>
            </div>
          </div>
          <div class="form__row form__row--required mb-3">
            <label
              class="form__label form__label--inline"
              for="handraiser-email"
              >My email address is</label
            >
            <div class="form__field flex-fill form__field--full-width-tablet">
              <input
                type="email"
                readonly
                class="form__input form__input--text "
                id="handraiser-email"
                name="email"
                maxlength="320"
                value=""
                v-model="emailId"
                style="min-height: 40px;"
                @click="emailClicked = true"
              />
            </div>
            <div
              class="field-validation-error"
              v-if="!getValidEmail && emailClicked"
            >
              {{ getErrorText }}
            </div>
          </div>
          <div class="form__row form__row--required mb-3">
            <label
              class="form__label form__label--inline"
              for="handraiser-email"
              >My number is</label
            >
            <div class="form__field flex-fill form__field--full-width-tablet">
              <input
                :readonly="getReadOnly"
                type="tel"
                class="form__input form__input--text "
                id="handraiser-email"
                name="email"
                maxlength="320"
                value=""
                v-model="contactNumber"
                style="min-height: 40px;"
                @click="contactNumberClicked = true"
              />
            </div>
            <div
              class="field-validation-error"
              v-if="contactNumber == '' && contactNumberClicked"
            >
              Please add your contact number
            </div>
          </div>
          <form>
            <fieldset>
              <legend class="d-block mb-3">
                <span class="form__label">And here's my billing address</span>
              </legend>
              <div class="form__row form__row--required mb-2">
                <label
                  class="form__label form__label--plain"
                  for="handraiser-address-1"
                  >Building and street name</label
                >
                <div class="form__field flex-fill">
                  <input
                    :readonly="getReadOnly"
                    type="text"
                    class="form__input form__input--text "
                    id="handraiser-address-1"
                    name="addressLine1"
                    maxlength="32"
                    v-model="streetName"
                    @click="streetNameClicked = true"
                    style="min-height: 40px;"
                  />
                </div>
                <div
                  class="field-validation-error"
                  v-if="streetName == '' && streetNameClicked"
                >
                  Please add your building and street name
                </div>
              </div>
              <div class="form-row mb-2 form__row--required">
                <div class="form-group col-md-12">
                  <label
                    class="form__label form__label--plain"
                    for="handraiser-town-city"
                    >Town / city</label
                  >
                  <div class="form__field flex-fill">
                    <input
                      :readonly="getReadOnly"
                      type="text"
                      class="form__input form__input--text "
                      id="handraiser-town-city"
                      name="townCity"
                      maxlength="32"
                      v-model="city"
                      style="min-height: 40px;"
                      @click="cityClicked = true"
                    />
                  </div>
                  <div
                    class="field-validation-error"
                    v-if="city == '' && cityClicked"
                  >
                    Please add your Town/City
                  </div>
                </div>
              </div>
              <div class="form-row mb-2 form__row--required">
                <div class="form-group col-md-6">
                  <label
                    class="form__label form__label--plain"
                    for="handraiser-county"
                    >County / State</label
                  >
                  <div class="form__field flex-fill">
                    <input
                      :readonly="getReadOnly"
                      type="text"
                      class="form__input form__input--text "
                      id="handraiser-county"
                      name="county"
                      maxlength="32"
                      v-model="state"
                      style="min-height: 40px;"
                      @click="stateClicked = true"
                    />
                  </div>
                  <div
                    class="field-validation-error"
                    v-if="state == '' && stateClicked"
                  >
                    Please add your County/State
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label
                    class="form__label form__row--required form__label--plain"
                    for="handraiser-postcode"
                    >Postcode / Zip ode</label
                  >
                  <div class="form__field flex-fill">
                    <input
                      type="text"
                      class="form__input form__input--text "
                      id="handraiser-postcode"
                      name="postCode"
                      :readonly="getReadOnly"
                      v-model="postCode"
                      maxlength="32"
                      style="min-height: 40px;"
                      @click="postCodeClicked = true"
                    />
                  </div>
                  <div
                    class="field-validation-error"
                    v-if="postCode == '' && postCodeClicked"
                  >
                    Please add your Postcode/ Zip code
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          <div class="form__row">
            <button
              type="button"
              class="btn btn--primary"
              @click="buyToken"
              :disabled="formValidate"
            >
              Next
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TokenService from "@/services/TokenService";

export default {
  props: ["emailId"],
  computed: {
    formValidate() {
      if (
        this.firstName &&
        this.lastName &&
        this.contactNumber &&
        this.streetName &&
        this.city &&
        this.state &&
        this.postCode
      ) {
        return false;
      }
      return true;
    },
    getReadOnly() {
      return this.readOnly;
    },
    getActiveClass() {
      return "timeline__point isActive";
    },
    getHighlightedClass() {
      return "timeline__highlight-point highlighted";
    },
    getFirstNameClass() {
      const defualt = "form__input form__input--text";
      return this.firstName ? defualt : defualt + " error";
    },
    getLastNameClass() {
      const defualt = "form__input form__input--text";
      return this.lastName ? defualt : defualt + " error";
    },
    getValidEmail() {
      const v = this.emailId;
      if (!v) {
        //  this.emailValidationError = "Please add an email address";
        return false;
      } else if (/.+@.+\..+/.test(v)) {
        //  this.emailValidationError = "Check email format";
        return true;
      } else {
        // this.emailValidationError = "";
        return false;
      }
    },
    getErrorText() {
      const v = this.emailId;
      if (!v) {
        return "Please add an email address";
      } else if (/.+@.+\..+/.test(v)) {
        return "";
      } else {
        return "Check email format";
      }
    },
  },
  data: () => ({
    sfData: {},
    firstName: "",
    lastName: "",
    contactNumber: "",
    streetName: "",
    city: "",
    state: "",
    postCode: "",
    readOnly: false,
    firstNameClicked: false,
    lastNameClicked: false,
    emailClicked: false,
    contactNumberClicked: false,
    streetNameClicked: false,
    cityClicked: false,
    stateClicked: false,
    postCodeClicked: false,
    emailValidationError: "Please add an email address",
  }),
  async mounted() {
    this.$store.dispatch("updateLoading", true);
    const response = await TokenService.getCustomerDetails(this.emailId);
    const data = response.data.d;
    this.sfData = data;
    if (response.status === 200 && data.Firstname) {
      this.readOnly = true;
      this.firstName = data.Firstname;
      this.lastName = data.Lastname;
      this.contactNumber = data.Phone;
      this.streetName = data.Mailingstreet;
      this.city = data.Mailingcity;
      this.state = data.Mailingstate;
      this.postCode = data.Mailingpostalcode;
    }
    this.$store.dispatch("updateLoading", false);
  },
  methods: {
    async buyToken() {
      if (this.readOnly) {
        this.$router.push({
          name: "Token",
          params: {emailId: this.emailId},
        });
      } else {
        const response = await TokenService.createCustomerDetails(
          this.firstName,
          this.lastName,
          this.emailId,
          this.contactNumber,
          this.streetName,
          this.city,
          this.state,
          this.postCode
        );
        if (response.status == 200) {
          this.$router.push({
            name: "Token",
            params: {emailId: this.emailId},
          });
        }
      }
    },
  },
};
</script>

<style>
.form__label,
.form__label--inline,
.bg--blue .form__label,
.hero-plain,
.quote-plain,
.timeline__content--heading,
.timeline__content--large-heading {
  color: white !important;
}
.form__field--inline {
  margin-top: -10px !important;
}
.form__label--plain {
  font-size: 1.2rem !important;
  line-height: 0.6em !important;
}
.form__input,
.form__label {
  font-size: 1.5rem !important;
  line-height: 1em !important;
}

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
