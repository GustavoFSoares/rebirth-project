<template>
  <v-section
    class="portfolio"
    :title="$t('section.portfolio.title')"
  >
    <template #container>
      <div class="portfolio-container">
        <div class="decorator">
          <div class="arrow-2-red">
            <arrow-2-red />
          </div>
        </div>

        <v-portfolio :images="images" />
      </div>
    </template>
  </v-section>
</template>

<script>
export default {
  name: 'PPortfolio',
  components: {
    Arrow2Red: () => import('@/assets/images/icons/decorators/arrow-2-red.svg?inline')
  },
  computed: {
    images () {
      const numbers = [...new Array(28)]
      const imageCount = numbers.map((_, index) => index + 1)

      return imageCount
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  &-container {
    .decorator {
      @include media("mobile", "max") {
        display: none;
      }

      .arrow-2-red {
        position: absolute;
        top: -3%;
        right: 4%;
      }
    }
  }
}
</style>
