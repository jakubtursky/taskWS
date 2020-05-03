<template lang="pug">
  div.field-error-message-group(v-if="errorObject.$error")
    span(v-if="validateErrorRule('required')" class="field-error-message") Field is required
    span(v-if="validateErrorRule('sameAs')" class="field-error-message") Checkbox must be checked
    span(v-if="validateErrorRule('minLength')" class="field-error-message") Field contains few characters
    span(v-if="validateErrorRule('numeric')" class="field-error-message") Field accept only numbers
    span(v-if="validateErrorRule('containsMultipleEmails')" class="field-error-message") Invalid Email
    span(v-if="validateErrorRule('isPhoneNumber')" class="field-error-message") Invalid Phone number
    span(v-if="validateErrorRule('containsUppercase')" class="field-error-message") Set minimum 1 upper character
    span(v-if="validateErrorRule('containsLowercase')" class="field-error-message") Set minimum 1 lower character
    span(v-if="validateErrorRule('containsNumber')" class="field-error-message") Set minimum 1 number
</template>

<script>
export default {
  props: {
    errorObject: {
      type: Object,
      default: function() {
        return {}
      },
    },
  },
  methods: {
    validateErrorRule(name) {
      return !this.errorObject[name] && this.errorObject[name] != undefined
    },
  },
}
</script>
