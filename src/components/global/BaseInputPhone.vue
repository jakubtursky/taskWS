<template lang="pug">
  .form-group-phone(:class="[fieldBlockClassObject]")
    BaseSelect(
        v-model="formData.phonePrefix"
        :options="phonePrefix"
        customSelect=true
        label=""
        type="text"
        required=false
        @input="updatePhoneNumber($event)"
        fieldBlockClass="form-field-normal form-field-select form-field-custom-select"
      )

    .form-field(
        :class="[fieldBlockClassObject, fieldBlockClass]"
        )
      span.form-required-text(v-if="required") required

      label.form-label(v-if="label") {{ label }}

      input(
        :type="passwordFieldType"
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        :id="id"
        :name="name"
        class="form-input"
        :class="[fieldClassObject, fieldClass]"
        )


      BaseFieldErrors(:errorObject="errorObject")

</template>

<script>
// Mixin for general field settings
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
  mixins: [formFieldMixin],
  props: {},
  data() {
    return {
      phonePrefix: ['+420', '+421', '+422'],
      formData: {
        phonePrefix: '+421',
      },
    }
  },
  computed: {},
  methods: {
    updatePhoneNumber(value) {
      this.formData.phonePrefix = value
      this.$emit('setPhonePrefix', this.formData.phonePrefix)
    },
    updateValue(event) {
      let value = event.target.value
      this.$emit('input', value)
    },
  },
  created: function() {
    this.$emit('setPhonePrefix', this.formData.phonePrefix)
  },
}
</script>

<style lang="scss">
.form-group-phone {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  &.is-required {
    @include bp(rev-xsmall) {
      margin-top: 2.5rem;
    }
  }
  &.is-active {
    .multiselect__tags {
      border-color: $ws-primary;
    }
  }
  &.has-error {
    .multiselect__tags {
      border-color: $ws-red;
    }
  }
  &.has-success {
    .multiselect__tags {
      border-color: $ws-green;
    }
  }
  .multiselect {
    &.multiselect--active .multiselect__tags {
      border-right-width: 2px;
      // border-color: $ws-isabelline;
    }
  }
  .form-field-select {
    width: 120px;
    margin-bottom: 0;
  }
  .form-field-input {
    width: calc(100% - 120px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .multiselect__tags {
    border-right-width: 0;
  }
  .form-input {
    border-left-width: 0;
  }
}
</style>
