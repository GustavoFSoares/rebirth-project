<template>
  <div class="portfolio portfolio-container">
    <v-portfolio-item
      v-for="(image, index) in shuffleImageList"
      :key="index"
      class="portfolio-item"
      :identifier="image"
      @click.native="handlePortfolioImage(index)"
    />

    <no-ssr>
      <vue-gallery-slideshow
        :images="shuffleImageList"
        :index="galleryIndex"
        @close="handleHideGallery"
      />
    </no-ssr>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  name: 'VPortfolio',
  components: {
    VueGallerySlideshow
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      galleryIndex: null,
      shuffleImageList: []
    }
  },
  mounted () {
    const images = this.images.map(imageIndex => `/portfolio/${imageIndex}.webp`)
    this.shuffleImageList = this.shuffle(images)
  },
  methods: {
    shuffle (imageList) {
      const shuffle = [...imageList].sort(() => Math.random() - 0.5)

      return shuffle
    },
    handlePortfolioImage (imageIndex) {
      this.galleryIndex = imageIndex
      document.querySelector('body').style.overflow = 'hidden'
    },
    handleHideGallery () {
      document.querySelector('body').style.overflow = 'initial'
      this.galleryIndex = null
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  &-container {
    display: flex;
    gap: 1px;
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;

    @include media("mobile", "max") {
      max-height: 80vh;
      overflow-y: auto;
    }

    > .portfolio-item {
      &:nth-child(2n+1) {
        min-width: 25%;
      }
      &:nth-child(3n+1) {
        min-width: 10%;
      }
      &:nth-child(5n+1) {
        min-width: 30%;
      }
      &:nth-child(even) {
        min-width: 15%;
      }

      @include media("mobile", "max") {
        &:nth-child(2n+1) {
          min-width: 40%;
        }
        &:nth-child(3n+1) {
          min-width: 60%;
        }
        &:nth-child(even) {
          min-width: 20%;
        }
      }
    }

    ::v-deep .vgs {
      backdrop-filter: blur(10px);

      .vgs__container {
        height: 80vh;
        background: transparent;

        @include media("tablet", "max") {
          height: 70vh;
          top: 20%;
        }

        @include media("mobile", "max") {
          height: 70vh;
          top: 30%;
        }
      }

    }
  }

}
</style>
