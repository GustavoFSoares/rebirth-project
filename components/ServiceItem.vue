<template>
  <div class="service-item">
    <div class="service-item-title-container">
      <div class="title-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
          <path d="M17.0145 11.315L0.725733 20.8944C0.403183 21.0582 0 20.8125 0 20.485V1.40803C0 1.08053 0.403183 0.834904 0.725733 0.998655L17.0145 10.5781C17.2564 10.66 17.2564 11.1513 17.0145 11.315Z" fill="#ADADAD" />
        </svg>
      </div>

      <h4 class="title-content">
        {{ title }}
      </h4>
    </div>

    <h6 class="service-item-content">
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
    transform: translateX(1rem);
  }
}

.service-item {
  max-width: 42rem;

  &-title-container {
    display: flex;

    &:hover {
      .title-arrow {
        animation: movement 1s ease-in-out forwards alternate;
      }
    }

    .title-arrow {
      width: 24px;
      margin-right: 1.6rem;
    }

    .title-content {
      @extend .rb-text-color-2;

      font-size: 2.4rem;
      line-height: 2.4rem;
      font-weight: 600;
    }
  }

  &-content {
    @extend .rb-text-color-3;
    margin-top: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-style: italic;
  }
}
</style>
