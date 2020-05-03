<template lang="pug">
  .app-block#app
    the-navigation
    main
      transition(name="fade" mode="out-in")
        router-view
    the-footer
</template>

<script>
import TheNavigation from './components/layout/TheNavigation.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap');
@import './assets/scss/app.scss';

.app-block {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
