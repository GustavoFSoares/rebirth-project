<template>
  <header class="header" :class="{'rb-bshadow-3' : showShadow}">
    <v-menu class="container rb-mx-auto" />
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  data: () => ({
    limit: 78,
    scroll: 0
  }),
  computed: {
    showShadow () {
      return !!(this.scroll > this.limit)
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll ({ currentTarget: { scrollY } }) {
      this.scroll = scrollY
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    width: 100vw;
    max-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    transition: .2s ease-in-out;

    @include media('desktop', 'max') {
      padding: 0 15px;
    }
  }
</style>
