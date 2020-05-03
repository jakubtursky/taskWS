<template lang="pug">
  .form-field(
      :class="[fieldBlockClassObject, fieldBlockClass]"
      )
    span.form-required-text(v-if="required") required
    label.form-label(v-if="label") {{ label }}

    template(v-if="!customSelect")
      select(
        :value="value"
        @input="updateValue"
        v-on="listeners"
        v-bind="$attrs"
        :id="id"
        :name="name"
        class="form-select"
        :class="[fieldClassObject, fieldClass]"
        )
        option(v-for="option in options" :key="option" :value="option" :selected="option === value")
          | {{ option }}

    template(v-if="customSelect")
      multiselect(
        :value="selectOption"
        :options="options",
        @input="onChange",
        @close="onClose",
        @open="onOpen",
        @select="onSelect"
        v-bind="$attrs"
        placeholder=""
        :searchable="false",
        :close-on-select="true",
        :show-labels="false"
      )

      //- select(
        :value="value"
        @input="updateValue"
        v-on="listeners"
        v-bind="$attrs"
        class="form-select"
        :class="[fieldClassObject, fieldClass]"
        )
        option(v-for="option in options" :key="option" :value="option" :selected="option === value")
          | {{ option }}

    BaseFieldErrors(:errorObject="errorObject")

</template>

<script>
// Mixin for general field settings
import Multiselect from 'vue-multiselect'
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
  mixins: [formFieldMixin],
  components: { Multiselect },
  props: {
    options: {
      type: Array,
      required: true,
    },
    customSelect: {
      type: Boolean,
      default: false,
    },
    value: [String, Number],
  },
  data() {
    return {
      selectOption: this.value,
    }
  },
  computed: {
    // completeValue() {
    //   console.log(this.value)
    //   return true
    // },
  },
  methods: {
    onChange(value) {
      this.selectOption = value
      this.$emit('input', this.selectOption)
    },
    onSelect() {
      this.focused = true
      this.$emit('focus', this.selectOption)
    },
    onOpen() {
      this.focused = true
      this.$emit('open', this.selectOption)
    },
    onClose() {
      if (this.selectOption.length == 0) {
        this.focused = false
      } else {
        this.focused = true
      }
      this.$emit('blur', this.selectOption)
    },
  },
}
</script>

<style lang="scss">
@import '~vue-multiselect/dist/vue-multiselect.min.css';

.form-field-custom-select {
  .form-required-text {
    @include bp(xsmall) {
      right: 50px;
    }
  }
}

.form-field {
  &.is-placeholder {
    .multiselect__tags {
      padding: 25px 40px 0 19px;
    }
  }
}

.multiselect {
  min-height: 60px;
  &.multiselect--active {
    z-index: auto;
    .multiselect__tags {
      border-color: $ws-primary;
    }
  }
}

.multiselect__select {
  height: 58px;
  width: 50px;
  &:before {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    width: 20px;
    height: 16px;
    display: block;
    margin: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('~@/assets/images/icons/chevron-down.svg');
  }
}

.multiselect__tags {
  border-radius: 0;
  min-height: 60px;
  border: 2px solid $ws-isabelline;
  @include font-size(14px);
  padding: 20px 40px 0 19px;
}

.multiselect__placeholder {
  font-weight: 700;
  color: $ws-black;
  margin-bottom: 0;
}

.multiselect__content-wrapper {
  border-radius: 0;
  border: 2px solid $ws-isabelline;
  border-top: 0;
  transition: none;
  * {
    transition: none;
  }
}

.multiselect__option {
  padding: 17px 25px;
}

.multiselect__option--selected.multiselect__option--highlight,
.multiselect__option--selected {
  background: $ws-primary;
  color: $ws-white;
}

.multiselect__option--highlight {
  background: $ws-isabelline;
  color: $ws-black;
}
</style>
