export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    fieldBlockClass: {
      type: String,
      default: '',
    },
    fieldClass: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    errorObject: {
      type: Object,
      default: function() {
        return {}
      },
    },
    value: [String, Number, Boolean],
  },
  data() {
    return {
      focused: false,
      passwordFieldType: this.type,
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur,
      }
    },
    fieldBlockClassObject: function() {
      return {
        'is-placeholder': this.label.length > 0,
        'is-active': this.focused || this.value.length != '',
        'is-required': this.required,
        'has-error':
          this.errorObject.$error && this.isNonEmptyObject(this.errorObject),
        'has-success':
          !this.errorObject.$invalid && this.isNonEmptyObject(this.errorObject),
      }
    },
    fieldClassObject: function() {
      return {
        'has-field-error':
          this.errorObject.$error && this.isNonEmptyObject(this.errorObject),
        'has-field-success':
          !this.errorObject.$invalid && this.isNonEmptyObject(this.errorObject),
        // 'has-field-success': !this.errorObject.$invalid && this.required,
      }
    },
  },
  methods: {
    updateValue(event) {
      let value = event.target.value
      this.$emit('input', value)
    },
    onFocus(value) {
      this.focused = true
      this.$emit('focus', value)
    },
    onBlur(value) {
      if (this.value.length == 0) {
        this.focused = false
      }
      this.$emit('blur', value)
    },
    isNonEmptyObject(obj) {
      return Object.keys(obj).length !== 0
    },
  },
}
