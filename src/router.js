// router
import Vue from 'vue'
import Router from 'vue-router'

// views
import Home from './views/Home.vue'
import FormVuelidate from './views/Form-vuelidate.vue'
// import FormQuasar from './views/Form-quasar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/form-vuelidate',
      component: FormVuelidate,
    },
    // {
    //   path: '/form-quasar',
    //   component: FormQuasar,
    // },
  ],
})
