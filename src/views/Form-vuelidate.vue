<template lang="pug">
  section.padding-style-4
    .container-normal
      .row.margin-bottom-3.h-margin-0.txt-c
        .col-12
          h1.alfa Form vuelidate
      .row
        .col-12
          MainFormVuelidate
</template>

<script>
import MainFormVuelidate from '@/components/MainFormVuelidate.vue'

export default {
  name: 'App',
  components: {
    MainFormVuelidate,
  },
}
</script>
