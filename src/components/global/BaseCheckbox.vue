<template lang="pug">
  .form-field(
    :class="[fieldBlockClassObject, fieldBlockClass]"
    )

    .checkbox
      input(
        :value="value"
        @change="onChange"
        v-bind="$attrs"
        :type="type"
        :id="id"
        :name="name"
        class="checkbox-hidden"
        :class="[fieldClassObject, fieldClass]"
        )
      label.checkbox-label(:for='id')
        span.checkbox-box
        span.checkbox-text(v-if="label") {{ label }}


      BaseFieldErrors(:errorObject="errorObject")


</template>

<script>
// Mixin for general field settings
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
  mixins: [formFieldMixin],
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    onChange(event) {
      let value = event.target.checked
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/form/_checkbox.scss';
</style>
