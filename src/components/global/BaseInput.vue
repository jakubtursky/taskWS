<template lang="pug">
  .form-field(
      :class="[fieldBlockClassObject, fieldBlockClass]"
      )
    span.form-required-text(v-if="required") required

    span.form-password-eye.ico-size-28(v-if="type == 'password'" @click="togglePassword")
      template(v-if="passwordFieldType == 'password'")
        BaseSvgIcon(name="eye")
      template(v-if="passwordFieldType != 'password'")
        BaseSvgIcon(name="eye-closed")
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
// Import mixin for basic settings of fields
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
  mixins: [formFieldMixin],
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      passwordFieldType: this.type,
    }
  },
  computed: {},
  methods: {
    togglePassword() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}
</script>

<style scoped lang="scss">
.form-password-eye {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @include bp(xsmall) {
    right: -50px;
  }
  &:hover {
    svg {
      fill: $ws-primary;
    }
  }
}
</style>
