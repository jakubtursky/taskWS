<template lang="pug">
  .form-group
    form(@submit.prevent="checkForm" novalidate="true" method="" id="formVuelidate")
      BaseInput(
        v-model="formData.login"
        label="Login (inverse)"
        type="text"
        name="login"
        id="login"
        required=true
        fieldBlockClass="form-field-normal form-field-inverse"
        fieldClass="form-input-inverse"
        :errorObject="$v.formData.login"
        @blur="$v.formData.login.$touch()"
      )

      BaseInput(
        v-model="formData.password"
        label="Password"
        type="password"
        name="password"
        id="password"
        required=true
        fieldBlockClass="form-field-normal"
        fieldClass="form-input-password"
        :errorObject="$v.formData.password"
        @blur="$v.formData.password.$touch()"
      )

      BaseTextarea(
        v-model="formData.email"
        label="Emails (comma separated)"
        name="emails"
        id="emails"
        required=true
        fieldBlockClass="form-field-normal"
        :errorObject="$v.formData.email"
        @blur="$v.formData.email.$touch()"
      )

      BaseSelect(
        v-model="formData.gender"
        :options="gender"
        label="Gender"
        type="text"
        name="gender"
        id="gender"
        required=false
        fieldBlockClass="form-field-normal"
      )

      BaseSelect(
        v-model="formData.day"
        :options="days"
        customSelect=true
        label="Days"
        type="text"
        name="days"
        id="days"
        required=true
        fieldBlockClass="form-field-normal form-field-custom-select"
        :errorObject="$v.formData.day"
        @blur="$v.formData.day.$touch()"
      )

      BaseInputPhone(
        v-model="formData.phone"
        label="Phone number"
        type="text"
        name="phone"
        id="phone"
        required=true
        fieldBlockClass="form-field-normal form-field-input"
        :errorObject="$v.formData.phone"
        @blur="$v.formData.phone.$touch()"
        @setPhonePrefix="formData.phonePrefix = $event"
      )

      BaseQuantity(
        v-model="formData.quantity"
        label="Quantity"
        type="number"
        name="quantity"
        id="quantity"
        required=true
        min="1"
        max="10"
        step="1"
        :value="formData.quantity"
        fieldBlockClass="form-field-normal form-field-quantity"
        :errorObject="$v.formData.quantity"
        @blur="$v.formData.quantity.$touch()"
      )

      BaseCheckbox(
        v-model="formData.terms"
        label="I agree with Personal data processing"
        type="checkbox"
        required=true
        id="agree-terms"
        name="agree-terms"
        fieldBlockClass="form-field-checkbox checkbox-classic"
        :errorObject="$v.formData.terms"
        @change="$v.formData.terms.$touch()"
      )

    FormCoupon(@setCouponValue="formData.coupon = $event")


    .margin-top-2.txt-r
      BaseButton(
        type="submit"
        name="Submit"
        form="formVuelidate"
        buttonClass="btn-blue-fill btn-size-large btn-min-width-big btn-sm-responsive"
        :disabled="$v.$anyError"
      )

    transition(name="fade")
      .box.padding-content-2.bg-green-normal.margin-top-3.txt-c.h-color-white.h-margin-0(v-if="successSendForm")
        .gamma Thank you for your email :)

    .box.padding-content-3.bg-gray-light.margin-top-3(v-if="showResult")
      .gamma Result:
      .p-margin-0-last.p-margin-1.p-size-16
        p(v-if="formData.login") Login: {{ formData.login }}
        p(v-if="formData.password") Password: {{ formData.password }}
        p(v-if="formData.email") Email: {{ formData.email }}
        p(v-if="formData.gender") Gender: {{ formData.gender }}
        p(v-if="formData.day") Days: {{ formData.day }}
        p(v-if="formData.phonePrefix && formData.phone") Phone number: {{ formData.phonePrefix + formData.phone }}
        p(v-if="formData.terms") Agree terms: {{ formData.terms }}
        p(v-if="formData.coupon") Enterd coupon: {{ formData.coupon }}
        p(v-if="formData.quantity") Quantity: {{ formData.quantity }}

</template>

<script>
import FormCoupon from '@/components/FormCoupon.vue'
import { required, sameAs, numeric, minLength } from 'vuelidate/lib/validators'

import {
  isPhoneNumber,
  containsMultipleEmails,
  containsUppercase,
  containsLowercase,
  containsNumber,
} from '@/helpers/fieldValidators.js'

export default {
  components: {
    FormCoupon,
  },
  data() {
    return {
      fieldsResult: [],
      successSendForm: false,
      gender: ['male', 'female'],
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      formData: {
        login: '',
        password: '',
        email: '',
        gender: '',
        phonePrefix: '',
        phone: '',
        day: '',
        coupon: '',
        terms: '',
        quantity: 1,
      },
    }
  },
  validations: {
    formData: {
      login: { required },
      password: {
        required,
        minLength: minLength(8),
        containsUppercase,
        containsLowercase,
        containsNumber,
      },
      email: { required, containsMultipleEmails },
      gender: {},
      coupon: {},
      quantity: { required },
      day: { required },
      phone: { required, numeric, isPhoneNumber },
      terms: { sameAs: sameAs(() => true) },
    },
  },
  computed: {
    showResult() {
      return (
        this.formData.email.length > 0 ||
        this.formData.login.length > 0 ||
        this.formData.password.length > 0 ||
        this.formData.gender.length > 0 ||
        this.formData.day.length > 0 ||
        this.formData.phone.length > 0 ||
        this.formData.coupon.length > 0 ||
        this.formData.quantity.length != '' ||
        this.formData.terms != false
      )
    },
  },
  methods: {
    checkForm: function() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        setTimeout(() => {
          this.scrollToFirstErrorField()
        }, 10)
      } else {
        this.successSendForm = true
        setTimeout(() => {
          this.successSendForm = false
        }, 3000)
      }
    },
    scrollToFirstErrorField() {
      this.$nextTick(() => {
        let firstErrorFieldBlock = document.querySelector('.has-error')
        let firstErrorInput = document.querySelector('.has-field-error')
        firstErrorFieldBlock.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
        firstErrorInput.focus()
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/helpers/form/_form-base.scss';
@import '@/assets/scss/helpers/form/_form-validation.scss';
@import '@/assets/scss/helpers/form/_form-placeholder.scss';
</style>
