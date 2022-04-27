<template>
  <div class="main">
    <v-header />

    <our-services />

    <portfolio />

    <about-us />

    <members />

    <v-footer />
  </div>
</template>

<script>
import OurServices from '~/pages/partials/OurServices'
import Portfolio from '~/pages/partials/Portfolio'
import AboutUs from '~/pages/partials/AboutUs'
import Members from '~/pages/partials/Members'
import VFooter from '~/pages/partials/VFooter'

export default {
  name: 'IndexPage',
  components: {
    OurServices,
    Portfolio,
    AboutUs,
    Members,
    VFooter
  }
}
</script>

<style lang="scss" scoped>
.main {
  &:first-child {
    margin-top: calc(1rem + 72px);
  }

  section + section {
    @include media('tablet', 'max') {
      margin-top: 5rem;
    }
  }

  > * {
    @include media('desktop', 'max') {
      padding: 0 16px;
    }

    @include media('mobile-m', '<') {
      padding: 0 10px;
    }
  }
}
</style>
