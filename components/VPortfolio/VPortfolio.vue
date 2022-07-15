<template>
  <div
    id="js-grid-mosaic-flat"
    class="portfolio portfolio-container cbp cbp-l-grid-mosaic-flat"
  >
    <div
      v-for="(photo, index) in images"
      :key="index"
      :class="`cbp-item ${photo.small}`"
    >
      <a :href="getEditedImageUrl(photo.img)" class="cbp-caption cbp-lightbox">
        <div class="cbp-caption-defaultWrap">
          <img :src="getEditedImageUrl(photo.small)" :alt="photo.small">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import cube from '@/helpers/cube-portifolio-helper'

export default {
  name: 'VPortfolio',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  mounted () {
    cube('#js-grid-mosaic-flat', {
      filters: '#js-filters-mosaic-flat',
      layoutMode: 'mosaic',
      sortByDimension: true,
      mediaQueries: [
        // { width: 1350, cols: 3 },
        { width: 1300, cols: 5 },
        { width: 1000, cols: 4 },
        { width: 767, cols: 2 },
        {
          width: 480,
          cols: 1,
          options: {
            caption: '',
            gapHorizontal: 15,
            gapVertical: 15
          }
        }
      ],
      defaultFilter: '*',
      animationType: 'fadeOutTop',
      gapHorizontal: 0,
      gapVertical: 0,
      gridAdjustment: 'responsive',
      caption: 'zoom',
      displayType: 'fadeIn',
      displayTypeSpeed: 100,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

      plugins: {
        loadMore: {
          element: '#js-loadMore-mosaic-flat',
          action: 'click',
          loadItems: 3
        }
      }
    })
  },
  methods: {
    getEditedImageUrl (url) {
      return `/portfolio/${url}.webp?${this.$config.projectVersion}`
    }
  }
}
</script>
