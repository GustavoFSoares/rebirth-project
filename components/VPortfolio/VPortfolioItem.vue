<template>
  <div class="portfolio-item">
    <img
      :src="imagePath"
      :alt="description"
    >
  </div>
</template>

<script>
export default {
  name: 'VPortfolioItem',
  props: {
    identifier: {
      type: [Number, String],
      required: true
    },
    description: {
      type: String,
      default: null
    }
  },
  computed: {
    imagePath () {
      return `/portifolio/${this.identifier}.webp`
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  flex: 1 0 50px;
  /* flex: 1 0 0; */

  height: 200px;
  border-radius: 2px;

  overflow: hidden;
  position: relative;

  transition: all ease 1s;
  background: transparent;

  @include media("mobile", "max") {
    min-width: 200px;
  }

  img {
    position: relative;
    top: 50%;

    transform: translateY(-50%);

    max-width: 100%;
    min-height: 100%;

    @include media("mobile", "max") {
      top: 0;

      transform: initial;

      max-width: initial;
      min-height: initial;

      min-width: 100%;
      max-height: 100%;
    }
  }

  &:before {
    content: ' ';

    z-index: 10;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    min-height: 100%;

    background: $secondary;

    opacity: 0;
    transition: opacity ease-in .2s;
  }

  &:hover {
    cursor: pointer;
    overflow: hidden;

    transform: scale(1.03);
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, .3);

    &:before {
      opacity: 0.2;
    }
  }

}
</style>
