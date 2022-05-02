<template>
  <v-section
    id="about-us"
    class="about-us"
    :title="$t('section.aboutUs.title')"
  >
    <div class="about-us-container">
      <div class="decorator">
        <div class="arrow-3-red">
          <double-arrow-3-red />
        </div>
      </div>

      <v-paragraphs
        class="about-us-item"
        :paragraphs="$t('section.aboutUs.paragraphs')"
      />

      <div class="decorator">
        <div class="arrows-bars">
          <bars class="bars" />
          <double-arrow-3-red />
        </div>
      </div>
    </div>
  </v-section>
</template>

<script>
export default {
  name: 'AboutUs',
  components: {
    Bars: () => import('@/assets/images/icons/decorators/bars.svg?inline'),
    DoubleArrow3Red: () => import('@/assets/images/icons/decorators/double-arrow-3-red.svg?inline')
  }
}
</script>

<style lang="scss" scoped>
.about-us {
  &-container {
    .decorator {
      @include media("mobile", "max") {
        display: none;
      }

      .arrow-3-red {
        position: absolute;
        top: -10%;
        right: 4%;
      }

      .arrows-bars {
        position: absolute;
        bottom: -25%;
        left: 11%;

        display: flex;

        .bars {
          margin-right: 24px;
        }
      }
    }
  }
}
</style>
