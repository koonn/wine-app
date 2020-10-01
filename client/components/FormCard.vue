<template>
  <v-card
    class="ma-2 pa-1"
  >
    <div class="subheading">
      Heading
    </div>

    <div>
      {{ num }} / 11
    </div>

    <v-slider
      class="px-5 pt-15 pb-3"
      thumb-label="always"
      height="3"
      hide-details
    />
  </v-card>
</template>

<script>
export default {
  name: 'FormCard',
  props: {
    num: {
      type: Number,
      required: false,
      default: 20
    }
  }
}
</script>
