<template lang="pug">
  svg(:class="'ico-svg icon-' + name")
    use(:xlink:href="src")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      const sprite = require('@/assets/images/icons/sprites.svg')
      return sprite + '#icon-' + this.name
    },
  },
}
</script>

<style lang="scss">
.ico-svg {
  display: inline-block;
  width: 1em;
  height: 1em;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.ico-size-16 {
  svg {
    @include font-size(16px);
  }
}

.ico-size-18 {
  svg {
    @include font-size(18px);
  }
}

.ico-size-20 {
  svg {
    @include font-size(20px);
  }
}

.ico-size-22 {
  svg {
    @include font-size(22px);
  }
}

.ico-size-24 {
  svg {
    @include font-size(24px);
  }
}

.ico-size-28 {
  svg {
    @include font-size(28px);
  }
}

.ico-size-36 {
  svg {
    @include font-size(36px);
  }
}

.ico-size-60 {
  svg {
    @include font-size(60px);
  }
}

.ico-color-white {
  svg {
    fill: #ffffff;
  }
}

.ico-animation-rotate {
  svg {
    transition: transform 250ms ease-out;
  }
  &:hover {
    svg {
      transform: rotate(90deg);
    }
  }
}
</style>
