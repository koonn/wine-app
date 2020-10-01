<template>
  <v-layout column>
    <form-card v-for="i in 11" :key="i" :num="i" />
  </v-layout>
</template>

<script>
import FormCard from '~/components/FormCard.vue'

export default {
  components: {
    FormCard
  }
}
</script>
