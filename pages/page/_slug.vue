<template>
  <div class="page">
    <v-section class="page-header flex flex-center-center">
      <h1 class="rb-font-size-35 rb-font-weight-bold rb-text-color-1 p-0">
        {{ term.title }}
      </h1>
    </v-section>
    <v-section class="page-main">
      <div class="page-container flex flex-space-evenly flex-column flex-gap-4">
        <div class="decorator">
          <div class="arrow-3-red">
            <double-arrow-3-red />
          </div>
        </div>
        <div class="page-description rb-font-size-16 rb-text-color-1">
          <v-line
            v-for="(line, index) in term.description"
            :key="index"
            :line="line"
            :index="index"
          />
        </div>
        <div class="decorator">
          <div class="arrows-bars">
            <bars class="bars" />
            <double-arrow-3-red />
          </div>
        </div>
      </div>
    </v-section>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  components: {
    VLine: () => import('@/components/Terms/VLine'),
    Bars: () => import('@/assets/images/icons/decorators/bars.svg?inline'),
    DoubleArrow3Red: () => import('@/assets/images/icons/decorators/double-arrow-3-red.svg?inline')
  },
  data: () => ({
    page: '',
    term: ''
  }),
  mounted () {
    this.term = this.$t(`pages.${this.$route.params.slug}`)
    this.page = this.$route.params.slug

    this.$nextTick(() => {
      setTimeout(() => this.toTop(), 200)
    })
  },
  methods: {
    toTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.title = `Rebirth Studio | ${this.term.title}`
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  &-header {
    min-height: 40vh;
    max-height: 40vh;
    background-image: url("/portfolio/7.webp");
    background-position: center -15vh;
    background-attachment: fixed;
    position: relative;
    text-transform: uppercase;
    text-align: center;

    &::v-deep .section-container {
      &:before {
        content: '';
        display: block;
        position: absolute;
        background: rgba($secondary, 0.3);
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        backdrop-filter: blur(3px);
      }

      &-content {
        padding: 0;
      }
    }
  }

  &-description {
    line-height: 1.3;
    background: $primary;
    border-radius: 10px;

    ::v-deep {
      strong {
        &,
        & span {
          font-weight: bold;
        }
      }
    }
  }

  &-container {
    padding: 96px 0;
    width: 100%;

    @include media('tablet', '<'){
      padding: 0 10px;
    }
  }

  &-main ::v-deep .section-container-content {
    padding: 0;
  }
}

</style>
