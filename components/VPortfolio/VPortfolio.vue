<template>
  <div
    :class="[
      'portfolio',
      'portfolio-container',
    ]"
  >
    <v-portfolio-item
      v-for="(photo, index) in shuffleImageList"
      :key="index"
      class="portfolio-item"
      :identifier="photo.identifier"
      :description="photo.index+''"
      @click.native="handlePortfolioImage(photo)"
    />

    <v-portfolio-modal
      v-if="modal.currentIndex !== null"
      :identifier="modal.identifier"
      @hide="handleHidePortfolio"
    />
  </div>
</template>

<script>
export default {
  name: 'VPortfolio',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      modal: {
        currentIndex: null,
        identifier: null
      },
      shuffleImageList: []
    }
  },
  mounted () {
    const images = this.images.map((imageId, index) => {
      return {
        identifier: imageId,
        index
      }
    })

    this.shuffleImageList = this.shuffle(images)
  },
  methods: {
    shuffle (imageList) {
      const shuffle = imageList.sort(() => Math.random() - 0.5)

      return shuffle
    },
    handlePortfolioImage ({ identifier, index }) {
      this.modal = {
        identifier,
        currentIndex: index
      }
    },
    handleHidePortfolio () {
      this.modal = {
        identifier: null,
        currentIndex: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  &-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;

    @include media("mobile", "max") {
      max-height: 80vh;
      overflow-y: auto;
    }

    > div {
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
  }

}
</style>
