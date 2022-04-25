<template>
  <v-section
    class="our-services"
    :title="$t('section.ourServices.title')"
  >
    <div class="our-services-container grid">
      <service-item
        v-for="(service, index) in services"
        :key="index"
        class="our-services-item grid-6"
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
    gap: 4.8rem 10%;

    @include media('mobile', 'max') {
      gap: 4.8rem;
    }
  }
}
</style>
