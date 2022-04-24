<template>
  <div class="main">
    <v-header />

    <our-services />

    <about-us />

    <v-footer />
  </div>
</template>

<script>
import OurServices from '~/pages/partials/OurServices'
import AboutUs from '~/pages/partials/AboutUs'
import VFooter from '~/pages/partials/VFooter'

export default {
  name: 'IndexPage',
  components: {
    OurServices,
    AboutUs,
    VFooter
  }
}
</script>

<style lang="scss" scoped>
.main {
  &:first-child {
    margin-top: calc(1rem + 72px);
  }
}
</style>
