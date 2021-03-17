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
              :class="getActiveClass"
              style="transform: translate3d(0px, -200px, 0px);"
            >
              <div :class="getHighlightedClass"></div>
              <div class="timeline__point-content">
                <div class="timeline__content--heading mb-2">Sign up</div>
                <div class="timeline__point-contentbody isVisible">
                  <div class="timeline__content--large-heading">
                    Tell us about yourself
                  </div>
                  <div class="quote-plain mt-2">
                    <blockquote class="small">
                      <p class="plain">
                        Let us know more about you. Then we can truly tailor
                        your Grenadier experience.
                      </p>
                    </blockquote>
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
            Sign up for the very first look at our latest updates, exclusive
            content and the chance to order before anyone else.
          </h1>
        </div>

        <div class="form mt-5 ml-5">
          <div class="form__row form__row--required mb-3">
            <div class="d-flex flex-wrap align-items-flex-start">
              <span class="form__label form__label--inline">My name is</span>
              <div>
                <select class="ml-5 mr-4 form-select form-select-lg">
                  <option selected>Mr.</option>
                  <option value="1">Miss</option>
                  <option value="2">Mrs.</option>
                </select>
              </div>
              <div class="form__field form__field--inline">
                <input
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
                class="form__input form__input--text "
                name="email"
                maxlength="320"
                value=""
                v-model="emailId"
                style="min-height: 55px;"
                @click="emailClicked = true"
              />
            </div>
            <div
              class="field-validation-error"
              v-if="!getValidEmail(emailId) && emailClicked"
            >
              {{ getErrorText(emailId) }}
            </div>
          </div>
          <div class="custom-control-lg custom-control custom-checkbox">
            <input
              class="custom-control-input"
              id="checkbox-large"
              type="checkbox"
              v-model="organisation"
            />
            <label class="custom-control-label" for="checkbox-large">
              Sign up under your organisation
            </label>
          </div>

          <div
            class="form__row form__row--required mb-3 mt-5"
            v-if="organisation"
          >
            <label
              class="form__label form__label--inline"
              for="handraiser-email"
              >My organisation email address is</label
            >
            <div class="form__field flex-fill form__field--full-width-tablet">
              <input
                type="email"
                class="form__input form__input--text "
                id="handraiser-email"
                name="email"
                maxlength="320"
                value=""
                v-model="orgEmailId"
                style="min-height: 40px;"
                @click="orgEmailClicked = true"
              />
            </div>
            <div
              class="field-validation-error"
              v-if="!getValidEmail(orgEmailId) && orgEmailClicked"
            >
              {{ getErrorText(orgEmailId) }}
            </div>
          </div>
          <div class="form__row mt-5">
            <button
              type="button"
              :disabled="formValidate"
              class="btn btn--primary"
              @click="register"
            >
              Submit
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
  computed: {
    formValidate() {
      if (
        this.firstName &&
        this.lastName &&
        this.emailId &&
        (this.orgEmailId || !this.organisation)
      ) {
        return false;
      }
      return true;
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
  },
  data: () => ({
    organisation: false,
    firstName: "",
    lastName: "",
    emailId: "",
    orgEmailId: "",
    firstNameClicked: false,
    lastNameClicked: false,
    emailClicked: false,
    orgEmailClicked: false,
    emailValidationError: "Please add an email address",
  }),

  methods: {
    async register() {
      this.$store.dispatch("updateLoading", true);
      const response = await TokenService.sendEmailRegistration(
        this.emailId,
        this.firstName,
        this.lastName
      );
      this.$store.dispatch("updateLoading", false);
      if (response.status === 200) {
        this.$router.push({
          name: "RegistrationSuccessful",
          params: {firstName: this.firstName, lastName: this.lastName},
        });
      }
    },
    getValidEmail(event) {
      const v = event;
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
    getErrorText(v) {
      if (!v) {
        return "Please add an email address";
      } else if (/.+@.+\..+/.test(v)) {
        return "";
      } else {
        return "Check email format";
      }
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
.form-select {
  font-size: 1.4rem !important;
  line-height: 1.4rem !important;
  -webkit-appearance: auto !important;
  -moz-appearance: auto !important;
}
.custom-control-lg .custom-control-label::before,
.custom-control-lg .custom-control-label::after {
  top: 0.1rem !important;
  left: -2rem !important;
  width: 1.25rem !important;
  height: 1.25rem !important;
}

.custom-control-lg .custom-control-label {
  margin-left: 0.5rem !important;
  font-size: 1rem !important;
}
</style>
