<template>
  <div class="main">
    <v-header />

    <hero />

    <our-services />

    <portfolio />

    <about-us />

    <members />

    <our-clients />

    <contact-us />

    <v-footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    Hero: () => import('~/pages/partials/Hero'),
    OurServices: () => import('~/pages/partials/OurServices'),
    Portfolio: () => import('~/pages/partials/Portfolio'),
    AboutUs: () => import('~/pages/partials/AboutUs'),
    Members: () => import('~/pages/partials/Members'),
    OurClients: () => import('@/pages/partials/OurClients'),
    ContactUs: () => import('@/pages/partials/ContactUs'),
    VFooter: () => import('~/pages/partials/VFooter')
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 9000)
    })
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

  > section:not(.hero) {
    @include media('desktop', 'max') {
      padding: 0 16px;
    }

    @include media('mobile-m', '<') {
      padding: 0 10px;
    }
  }
}
</style>
