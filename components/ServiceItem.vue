<template>
  <div class="service-item">
    <div class="service-item-decoration">
      <simple-arrow />
    </div>

    <div class="service-item-text-container">
      <h5 class="service-item-text-container__title-content rb-text-color-2 rb-font-size-24 rb-font-weight-semibold">
        {{ title }}
      </h5>

      <h6 class="service-item-text-container__content rb-text-color-3 rb-font-size-16 rb-mt-16">
        {{ content }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  components: {
    SimpleArrow: () => import('@/assets/images/icons/simple-arrow.svg?inline')
  },
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes movement {
  from {
    transform: translateX(0);
  }
}

.service-item {
  max-width: 42rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: #{map-get($margin-sizes, 16)}rem;

  &:hover {
    .service-item-decoration {
      transform: translate3d(1rem,0,0);
    }
  }

  &-decoration {
    transition: transform 0.5s ease-in-out;
  }

  &-text-container {
    &__content {
      font-style: italic;
      line-height: 1.3;

      @include media("mobile", "max") {
        user-select: none;
      }
    }
  }
}
</style>
