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
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 9000)
    })
  }
}
</script>
