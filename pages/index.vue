<template>
  <div>
    <hero />
    <our-services />
    <portfolio />
    <about-us />
    <members />
    <our-clients />
    <contact-us />
  </div>
</template>

<script>
import goTo from '~/mixins/go-to'

export default {
  name: 'IndexPage',
  components: {
    Hero: () => import('~/pages/partials/Hero'),
    OurServices: () => import('~/pages/partials/OurServices'),
    Portfolio: () => import('~/pages/partials/Portfolio'),
    AboutUs: () => import('~/pages/partials/AboutUs'),
    Members: () => import('~/pages/partials/Members'),
    OurClients: () => import('@/pages/partials/OurClients'),
    ContactUs: () => import('@/pages/partials/ContactUs')
  },
  mixins: [goTo],
  mounted () {
    this.goToElement()
  }
}
</script>
