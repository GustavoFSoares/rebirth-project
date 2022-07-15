<template>
  <v-section class="hero">
    <template #section>
      <tine-slider :images="images" />
    </template>
  </v-section>
</template>

<script>
export default {
  name: 'PHero',
  computed: {
    images () {
      const numbers = [...new Array(4)]
      const imageCount =
        numbers
          .map((_, index) => index + 1)
          .map(image => `/hero/${image}.webp`)
      return imageCount
    }
  }
}
</script>
