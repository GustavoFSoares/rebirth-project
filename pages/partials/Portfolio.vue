<template>
  <v-section
    id="portfolio"
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
      const images = [
        { small: '8-300x600', img: '8' },
        { small: '1-300x300', img: '1' },
        { small: '3-600x600', img: '3' },
        { small: '5-300x300', img: '5' },
        { small: '7-600x300', img: '7' },
        { small: '2-600x300', img: '2' },
        { small: '4-600x600', img: '4' },
        { small: '6-600x600', img: '6' }
      ]

      return images
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
