<template>
  <div
    class="member-modal"
    @click="handleHideMemberModal"
  >
    <div
      ref="container"
      :class="[
        'member-modal-container',
        {'member-modal-container-out': toHide}
      ]"
    >
      <v-member-item
        class="member-modal-container-item"
        :name="name"
        :role="role"
        :identifier="identifier"
      />

      <div class="member-description">
        <div class="member-description-icon">
          <simple-arrow-svg />
        </div>

        <p class="member-description-content">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleArrowSvg from '@/assets/images/icons/simple-arrow.svg?inline'

export default {
  name: 'VMemberModal',
  components: {
    SimpleArrowSvg
  },
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    identifier: {
      type: [Number, String],
      default: null
    },
    description: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      toHide: false
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

.member-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(5px);

  display: flex;

  &-container {
    z-index: 10;
    @extend .rb-background-primary;
    @extend .rb-ma-auto;
    @extend .rb-pa-32;

    width: 80vw;
    max-width: 1127px;

    height: 40vh;
    max-height: 274px;

    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    transform:scale(0);
    animation: zoomIn .6s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

    &-out {
      animation: zoomOut .6s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }

    @include media("tablet", "max") {
      flex-direction: column;

      width: 80vw;
      max-width: initial;

      height: initial;
      max-height: initial;

      padding: #{map-get($margin-sizes, 16)}rem;
    }

    ::v-deep .member-item {
      content: '';
      .member-item-picture:hover {
        box-shadow: initial;
      }
    }

    &-item {
      min-width: 16.8rem;
      max-width: 16.8rem;
    }

    .member-description {
      position: relative;
      flex-grow: 1;
      @extend .rb-ml-24;

      display: flex;

      @include media("tablet", "max") {
        margin-top: #{map-get($margin-sizes, 24)}rem;
      }

      &-icon {
        @extend .rb-mr-16;

        svg path {
          fill: map-get($text-colors, 1)
        }

        @include media("tablet", "max") {
          display: none;
        }
      }

      &-content {
        font-style: italic;
        line-height: 1.3;
        flex-grow: 1;

        @extend .rb-font-weight-light;
        @extend .rb-font-size-16;
        @extend .rb-text-color-1;

      }
    }
  }
}
</style>
