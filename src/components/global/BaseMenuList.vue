<template lang="pug">
  nav
    ul.menu-list(:class="listClass")
        router-link(tag="li" class="menu-list-item" :to="item.path" v-for="item in navLinksList" :key="item.id")
          a.menu-list-link(
            :class="listLinkClass"
          ) {{ item.name }}
</template>

<script>
export default {
  props: {
    listClass: {
      type: String,
      default: '',
    },
    listLinkClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      navLinksList: [
        {
          path: '/',
          name: 'Home',
        },
        // {
        //   path: '/form-classic',
        //   name: 'Form classic',
        // },
        {
          path: '/form-vuelidate',
          name: 'Form vuelidate',
        },
        // {
        //   path: '/form-quasar',
        //   name: 'Form quasar',
        // },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.menu-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.menu-list-xs-full {
  .menu-list-item {
    @include bp(rev-xsmall) {
      width: 100%;
    }
  }
}

.menu-list-item {
  padding: 0 0.8rem;
  margin-bottom: 0.2rem;
  @include bp(small) {
    padding: 0 1.2rem;
  }
  &:hover,
  &.is-exact-active {
    .menu-list-link {
      color: $ws-primary;
      &:after {
        width: 100%;
      }
    }
  }
}

.menu-list-link {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0.8rem 0;
  text-decoration: none;
  color: $ws-black;
  line-height: 1.2;
  font-weight: 700;
  @include font-size(16px);
  @include bp(xsmall) {
    @include font-size(16px);
  }
  @include bp(small) {
    @include font-size(18px);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    width: 0;
    height: 2px;
    transition: width 250ms ease-out;
    background-color: $ws-primary;
  }
}

.menu-list-link-small {
  @include font-size(14px);
  @include bp(xsmall) {
    @include font-size(16px);
  }
}

.menu-list-link-white {
  color: $ws-white;
}
</style>
