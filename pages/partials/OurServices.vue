<template>
  <div class="our-services">
    <v-section :title="$t('section.ourServices.title')">
      <div class="our-services-container">
        <service-item
          v-for="(service, index) in services"
          :key="index"
          class="our-services-item"
          :title="service.title"
          :content="service.content"
        />
      </div>
    </v-section>
  </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem 10%;

    @include media('mobile', 'max') {
      grid-template-columns: 1fr;
      gap: 4.8rem;
    }
  }
}
</style>
