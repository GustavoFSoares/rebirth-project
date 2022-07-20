<template>
  <div class="v-carousel">
    <client-only>
      <div class="v-carousel-component">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="v-carousel-component-slide"
        >
          <div
            class="image-container"
            :style="`background-image: url(${image})`"
          />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'TineSlider',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  beforeMount () {
    this.$nextTick(() => {
      this.tineSlider({
        container: '.v-carousel-component',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        touch: true,
        controls: false,
        nav: false,
        speed: 1000,
        autoplayButtonOutput: false
      })
    })
  }
}
</script>

<style scoped lang="scss">
.v-carousel {
  pointer-events: none;
  &-component {
    &-slide {
      width: 100%;
      height: 100%;

      .image-container {
        background-size: cover;
        background-position: top top;
        background-repeat: no-repeat;
        width: 100%;
        min-height: calc(100vh - 83px);

        @include media("mobile", "max") {
          background-position: center center;
        }
      }
    }
  }
}
</style>
