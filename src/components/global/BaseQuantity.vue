<template lang="pug">
  .form-field(
      :class="[fieldBlockClassObject, fieldBlockClass]"
      )
    span.form-required-text(v-if="required") required

    .quantity-group
      label.form-label(v-if="label") {{ label }}
      .quantity-down(class="align-items-center ico-size-22 ico-color-white" @click="decrementQuantity")
        BaseSvgIcon(name="minus")
      input(
        :type="passwordFieldType"
        :value="quantityValue"
        v-on="listeners"
        v-bind="$attrs"
        :id="id"
        :name="name"
        class="form-input quantity-input"
        :class="[fieldClassObject, fieldClass]"
      )
      .quantity-up(class="align-items-center ico-size-22 ico-color-white" @click="incrementQuantity")
        BaseSvgIcon(name="plus")

    BaseFieldErrors(:errorObject="errorObject")

</template>

<script>
// Import mixin for basic settings of fields
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
  mixins: [formFieldMixin],
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      quantityValue: this.value,
    }
  },
  computed: {},
  methods: {
    incrementQuantity() {
      if (this.quantityValue < this.$attrs.max) {
        this.quantityValue += 1
        this.$emit('input', this.quantityValue)
      }
    },
    decrementQuantity() {
      if (this.quantityValue > this.$attrs.min) {
        this.quantityValue -= 1
        this.$emit('input', this.quantityValue)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/form/_quantity.scss';
</style>
