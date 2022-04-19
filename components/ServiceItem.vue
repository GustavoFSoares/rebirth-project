<template>
  <div class="service-item">
    <div class="service-item-title-container">
      <div class="title-arrow rb-mr-16">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
          <path d="M17.0145 11.315L0.725733 20.8944C0.403183 21.0582 0 20.8125 0 20.485V1.40803C0 1.08053 0.403183 0.834904 0.725733 0.998655L17.0145 10.5781C17.2564 10.66 17.2564 11.1513 17.0145 11.315Z" fill="#ADADAD" />
        </svg>
      </div>

      <h4 class="title-content rb-text-color-2 rb-font-size-24">
        {{ title }}
      </h4>
    </div>

    <h6 class="service-item-content rb-text-color-3 rb-font-size-16 rb-mt-16">
      {{ content }}
    </h6>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
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
  to {

  }
}

.service-item {
  max-width: 42rem;

  &:hover {
    .service-item-title-container .title-arrow {
      transform: translate3d(1rem,0,0);
    }
  }

  &-title-container {
    display: flex;

    .title-arrow {
      width: 24px;
      align-self: center;

      svg {
        width: 1.8rem;
        height: 2.1rem;
      }

      transition: transform 0.5s ease-in-out;
    }

    .title-content {
      font-weight: 600;
    }
  }

  &-content {
    font-style: italic;
  }
}
</style>
