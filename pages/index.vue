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
    // eslint-disable-next-line no-console
    console.log('aaaa')
    this.goToElement()
  },
  methods: {
    getElement: (id) => {
      return new Promise((resolve, reject) => {
        let count
        const interval = setInterval(() => {
          const el = document.querySelector(id)

          if (el) {
            clearInterval(interval)
            resolve(el)
          } else if (count > 10) {
            clearInterval(interval)
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ error: 'fail to find element' })
          } else {
            count++
          }
        }, 100)
      })
    },
    async goToElement (anchor = null) {
      if (!this.$route.meta?.id && !anchor) {
        return
      }
      try {
        const { id } = this.$route.meta
        const el = await this.getElement(anchor || id)
        const top = el.offsetTop
        if (top !== undefined) {
          window.scrollTo({ top, behavior: 'smooth' })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
