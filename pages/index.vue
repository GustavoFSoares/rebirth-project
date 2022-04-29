<template>
  <div class="main">
    <v-header />

    <hero />

    <our-services />

    <portfolio />

    <about-us />

    <members />

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
    ContactUs: () => import('@/pages/partials/ContactUs'),
    Members: () => import('~/pages/partials/Members'),
    VFooter: () => import('~/pages/partials/VFooter')
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
