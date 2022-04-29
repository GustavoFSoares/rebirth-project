<template>
  <v-section
    class="portfolio"
    :title="$t('section.portfolio.title')"
  >
    <template #container>
      <div class="portfolio-container">
        <v-portfolio :images="images" />
      </div>
    </template>
  </v-section>
</template>

<script>
export default {
  name: 'PPortfolio',
  computed: {
    images () {
      const numbers = [...new Array(28)]
      const imageCount = numbers.map((_, index) => index + 1)

      return imageCount
    }
  }
}
</script>
