export default {
  name: 'ResizableTextarea',
  data() {
    return {
      labelHeight: 20,
    }
  },
  methods: {
    resize(event) {
      event.target.style.height = 'auto'
      let resultHeight = event.target.scrollHeight - this.labelHeight
      event.target.style.height = `${resultHeight}px`
    },
  },
  mounted() {
    this.$nextTick(() => {
      let resultHeight = this.$el.scrollHeight - this.labelHeight
      this.$el.setAttribute('style', 'height', `${resultHeight}px`)
    })
  },
  render() {
    return this.$scopedSlots.default({
      resize: this.resize,
    })
  },
}
