<template>
  <v-section class="rb-mb-64" :title="$t('section.portfolio.title')">
    <template #container>
      <div id="js-grid-mosaic-flat" class="cbp cbp-l-grid-mosaic-flat">
        <div
          v-for="(photo, index) in images"
          :key="index"
          class="cbp-item"
          :class="photo.groupBy"
        >
          <a :href="photo.url" class="cbp-caption cbp-lightbox">
            <div class="cbp-caption-defaultWrap">
              <img :src="photo.url" :alt="'photo.name'">
            </div>
            <!-- <div class="cbp-caption-activeWrap" />
            <div class="cbp-l-caption-alignCenter center-block">
              <div class="cbp-l-caption-body">
                <div class="plus" />
                <h5 class="text-white mb-1">
                  Ampliar
                </h5>
                <p class="text-white">
                  {{ 'photo.description' }}
                </p>
              </div>
            </div> -->
          </a>
        </div>
      </div>
    </template>
  </v-section>
</template>

<script>
import cube from '@/helpers/cube-portifolio-helper'

export default {
  name: 'PPortfolio',
  computed: {
    images () {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      const maxImages = 20
      const totalImagesAvailable = 28

      while (numbers.length !== maxImages) {
        const random = Math.floor(Math.random() * totalImagesAvailable)

        if (!numbers.includes(random) && random !== 0) {
          numbers.push(random)
        }
      }

      console.log(numbers)
      const imageCount = numbers.map(image => ({ url: `portifolio/${image}.webp` }))

      return imageCount
    }
  },
  mounted () {
    this.startCubePortfolio()
  },
  methods: {
    startCubePortfolio () {
      cube('#js-grid-mosaic-flat', {
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [
          // { width: 1921, cols: 6 },
          { width: 1440, cols: 6 },
          // { width: 1920, cols: 5 },
          // { width: 1400, cols: 4 },
          { width: 991, cols: 4 },
          { width: 767, cols: 2 },
          { width: 480, cols: 1, options: { caption: '', gapHorizontal: 15, gapVertical: 15 } }
        ],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100

        // lightbox
        // lightboxDelegate: '.cbp-lightbox',
        // lightboxGallery: true,
        // lightboxTitleSrc: 'data-title',
        // lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'

        // plugins: {
        //   loadMore: {
        //     element: '#js-loadMore-mosaic-flat',
        //     action: 'click',
        //     loadItems: 3
        //   }
        // }
      })
    }
  }
}
</script>
