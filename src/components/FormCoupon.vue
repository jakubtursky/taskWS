<template lang="pug">
  form.form-group.form-group-coupon.content-width-300.margin-left-auto.margin-top-3(
      @submit.prevent="checkCoupon"
      novalidate="true"
      method=""
    )
    BaseInput(
      v-model="coupon"
      @input="updateValue($event)"
      label="Enter code"
      type="text"
      fieldBlockClass="form-field-normal"
      :errorObject="$v.coupon"
    )


    BaseButton(
      type="submit"
      name=""
      buttonClass="btn-green-fill btn-size-large btn-coupon btn-absolute btn-flex"
    )
      span(class="d-flex align-items-center ico-size-22 ico-color-white " slot="icon")
        BaseSvgIcon(name="plus")


</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      coupon: '',
    }
  },
  validations: {
    coupon: { required },
  },
  methods: {
    checkCoupon() {
      if (this.coupon.length == 0) {
        this.$v.coupon.$touch()
        return
      }

      this.$emit('setCouponValue', this.coupon)
      alert('Validation coupon code on server...')
    },
    updateValue(value) {
      this.$emit('setCouponValue', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-coupon {
  width: 60px;
  height: 60px;
}
</style>
