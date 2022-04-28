<template>
  <div
    class="portfolio-modal"
    @click="handleHideMemberModal"
  >
    <div
      ref="container"
      :class="[
        'portfolio-modal-container',
        {'portfolio-modal-container-out': toHide}
      ]"
    >
      <img
        :src="imagePath"
        :description="description"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VMemberModal',
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
  data () {
    return {
      toHide: false
    }
  },
  computed: {
    imagePath () {
      return `/portifolio/${this.identifier}.webp`
    }
  },
  mounted () {
    document.querySelector('body').style.overflow = 'hidden'
  },
  destroyed () {
    document.querySelector('body').style.overflow = 'initial'
  },
  methods: {
    handleHideMemberModal ({ currentTarget, target }) {
      if (currentTarget === target) {
        this.toHide = true
        setTimeout(() => {
          this.$emit('hide')
          this.toHide = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes zoomIn {
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
}

@keyframes zoomOut {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}

.portfolio-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(5px);

  display: flex;

  &-container {
    z-index: 10;
    /* @extend .rb-background-primary; */
    @extend .rb-ma-auto;
    /* @extend .rb-pa-32; */

    width: 80vw;
    max-width: 1127px;

    height: 70vh;
    /* max-height: 274px; */

    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    transform:scale(0);
    animation: zoomIn .6s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

    &-out {
      animation: zoomOut .6s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }

    @include media("tablet", "max") {
      flex-direction: column;

      width: 80vw;
      max-width: initial;

      height: initial;
      max-height: initial;

      padding: #{map-get($margin-sizes, 16)}rem;
    }
  }
}
</style>
