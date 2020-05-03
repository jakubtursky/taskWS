<template lang="pug">
  button.btn(
    v-bind="$attrs"
    :class="buttonClass"
    @click="clickedBtn"
  ) {{ name }}
    slot(name="icon" v-if="$slots.icon")

</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: '',
    },
    buttonClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickedBtn() {
      this.$emit('clicked')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/class/_button.scss';
</style>
