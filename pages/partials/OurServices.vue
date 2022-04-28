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
  </v-section>
</template>

<script>
export default {
  name: 'OurServices',
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
  }
}
</style>
