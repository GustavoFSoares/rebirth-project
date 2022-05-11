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

        <v-paragraphs
          class="page-description rb-font-size-16 rb-text-color-1"
          v-html="term.description"
        />

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
    Bars: () => import('@/assets/images/icons/decorators/bars.svg?inline'),
    DoubleArrow3Red: () => import('@/assets/images/icons/decorators/double-arrow-3-red.svg?inline')
  },
  data: () => ({
    page: '',
    term: ''
  }),
  mounted () {
    // eslint-disable-next-line no-console
    console.log('aaa')
    // eslint-disable-next-line no-console
    this.term = this.$t(`pages.${this.$route.params.slug}`)
    this.page = this.$route.params.slug

    // eslint-disable-next-line no-console
    console.log(this.term)
  }
}
</script>

<style scoped lang="scss">
.page {
  &-header {
    min-height: 40vh;
    background-image: url("/portfolio/7.webp");
    background-position: center -15vh;
    background-attachment: fixed;
    position: relative;
    text-transform: uppercase;

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
    white-space: pre-wrap;
    line-height: 1.3;
    text-align: justify;

    ::v-deep {
      strong {
        &,
        & span {
          font-weight: bold;
        }
      }

      ol {
        margin-left: 4rem;
      }
    }
  }

  &-container {
    padding: 96px 0;
  }

  &-main ::v-deep .section-container-content {
    padding: 0;
  }
}

</style>
