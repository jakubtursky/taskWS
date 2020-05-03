<template lang="pug">
  .form-field( :class="[fieldBlockClassObject, fieldBlockClass]")

    span.form-required-text(v-if="required") required

    label.form-label(v-if="label") {{ label }}

    resizableTextarea
      template(v-slot:default="{resize}")
        textarea(
          :value="value"
          @input="resize"
          v-on="listeners"
          v-bind="$attrs"
          :id="id"
          :name="name"
          class="form-textarea form-textarea-limit"
          :class="[fieldClassObject, fieldClass]"
          )

    BaseFieldErrors(:errorObject="errorObject")


</template>

<script>
// Mixin for general field settings
import { formFieldMixin } from '@/mixins/formFieldMixin.js'
import ResizableTextarea from '@/helpers/ResizableTextarea.js'

export default {
  mixins: [formFieldMixin],
  components: { ResizableTextarea },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style></style>
