<template>
  <v-section class="rb-mb-64" :title="$t('section.portfolio.title')">
    <template #container>
      <div class="portfolio-container">
        <div
          v-for="(photo, index) in images"
          :key="index"
          class="portfolio-item"
          :style="`background-image: url(${photo.url})`"
        />
      </div>
    </template>
  </v-section>
</template>

<script>
export default {
  name: 'PPortfolio',
  computed: {
    images () {
      const numbers = [...new Array(28)]
      const imageCount = numbers.map((_, image) => ({ url: `/portifolio/${image + 1}.webp` }))

      return this.shuffle(imageCount)
    }
  },
  methods: {
    shuffle (imageList) {
      return imageList.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  overflow: hidden;

  @include media("mobile", "max") {
    max-height: 80vh;
    overflow-y: auto;
  }

  > div {
    background: #ccc;
    flex: 1 0 50px;
    height: 200px;
    transition: all ease 1s;
    border-radius: 2px;
    background-position: center 15%;
    background-repeat: no-repeat;
    background-size: cover;

    @include media("mobile", "max") {
      background-position: center center;
      min-width: 200px;
    }

    &:before {
      content: ' ';
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
      position: relative;
      transform: scale(1.03);
      cursor: pointer;
      box-shadow: 0 0 15px 10px rgba(0, 0, 0, .3);
      overflow: hidden;

      &:before {
        opacity: 0.2;
      }
    }

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
</style>
