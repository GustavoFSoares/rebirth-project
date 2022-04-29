<template>
  <v-section
    class="our-services"
    :title="$t('section.ourServices.title')"
  >
    <div class="our-services-container grid">
      <service-item
        v-for="(service, index) in services"
        :key="index"
        class="our-services-container-item m-grid-6 m-grid-start-1"
        :title="service.title"
        :content="service.content"
      />
    </div>

    <div class="decorator">
      <div class="arrow-2-red-1">
        <arrow-2-red />
      </div>

      <div class="arrow-2-red-2">
        <arrow-2-red />
      </div>

      <div class="double-arrow-3-red">
        <double-arrow-3-red />
      </div>

      <div class="arrows-black">
        <arrows-black />
      </div>
    </div>
  </v-section>
</template>

<script>
export default {
  name: 'OurServices',
  components: {
    Arrow2Red: () => import('@/assets/images/icons/decorators/arrow-2-red.svg?inline'),
    ArrowsBlack: () => import('@/assets/images/icons/decorators/arrows-black.svg?inline'),
    DoubleArrow3Red: () => import('@/assets/images/icons/decorators/double-arrow-3-red.svg?inline')
  },
  data () {
    return {
      services: this.$t('section.ourServices.items')
    }
  }
}
</script>

<style lang="scss" scoped>
.our-services {
  &-container {
    @extend .grid;

    gap: 4.8rem 0;

    @include media('mobile', 'max') {
      gap: 4.8rem;
    }

    &-item {
      @extend .grid-5;

      &:nth-of-type(odd) {
        @extend .grid-start-2;
      }
      &:nth-of-type(even) {
        @extend .grid-start-8;
      }
    }

    position: relative;
  }

  .decorator {
    @include media("mobile", "max") {
      display: none;
    }

    .arrow-2-red-1 {
      position: absolute;
      top: -10%;
      right: 4%;
    }

    .arrow-2-red-2 {
      position: absolute;
      top: 0;
      right: 8%;
    }

    .double-arrow-3-red {
      position: absolute;
      bottom: -15%;
      left: 14%;
    }

    .arrows-black {
      position: absolute;
      bottom: -35%;
      left: 0;

      @include media("tablet", "max") {
        bottom: -25%;
      }

      ::v-deep svg {
        width: 100%;
      }
    }
  }
}
</style>
