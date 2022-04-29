<template>
  <header class="header" :class="{'rb-bshadow-3' : showShadow}">
    <div class="decorator">
      <div class="arrows-black">
        <arrows-black />
      </div>
    </div>
    <v-menu class="container rb-mx-auto" />
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  components: {
    ArrowsBlack: () => import('@/assets/images/icons/decorators/arrows-black.svg?inline')
  },
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
    z-index: 10;
    top: 0;
    left: 0;
    transition: .2s ease-in-out;

    @include media('desktop', 'max') {
      padding: 0 15px;
    }

    .decorator {
      .arrows-black {
        position: absolute;
        top: 0;
        right: 0;

        @include media("tablet", "max") {
          display: none;
        }

        ::v-deep svg {
          height: 20px;
          width: 100%;
        }
      }
    }
  }
</style>
