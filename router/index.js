export default {
  extendRoutes (routes, resolve) {
    routes.push({
      name: 'portfolio',
      path: '/portfolio',
      component: '@/pages/index.vue',
      meta: {
        id: '#portfolio'
      }
    })
    routes.push({
      name: 'about-us',
      path: '/about-us',
      component: '@/pages/index.vue',
      meta: {
        id: '#about-us'
      }
    })
    routes.push({
      name: 'members',
      path: '/members',
      component: '@/pages/index.vue',
      meta: {
        id: '#members'
      }
    })
    routes.push({
      name: 'contact-us',
      path: '/contact-us',
      component: '@/pages/index.vue',
      meta: {
        id: '#contact-us'
      }
    })
  }
}
