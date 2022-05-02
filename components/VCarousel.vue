<template>
  <div class="v-carousel">
    <client-only>
      <carousel
        class="v-carousel-component"
        :per-page="1"
        :loop="true"
        :autoplay="true"
      >
        <slide
          v-for="(image, index) in images"
          :key="index"
          class="v-carousel-component-slide"
        >
          <div
            class="image-container"
            :style="`background-image: url(${image})`"
          />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  props: {
    images: {
      type: Array,
      required: true
    }
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
        min-height: 100vh;

        @include media("mobile", "max") {
          background-position: center center;
        }
      }
    }
  }

  ::v-deep {
    .VueCarousel {
      content: '';

      &-inner {
        transition: transform 1s ease-in-out 0s !important;
      }

      &-pagination {
        position: absolute;
        bottom: 5%;

          button:focus {
            border: none;
            outline: none;

        }
      }

      &-dot-container {
        display: none;
      }
    }
  }
}
</style>
