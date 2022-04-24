<template>
  <section :class="['section', `rb-background-${type}`]">
    <slot name="container">
      <div class="section-container rb-mx-auto">
        <h1 v-if="title" class="section-title">
          {{ title }}
        </h1>

        <div class="section-content">
          <slot />
        </div>
      </div>
    </slot>
  </section>
</template>

<script>
export default {
  name: 'VSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'dark',
      validation: v => ['dark', 'light'].includes(v)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  min-height: 100vh;
  padding-top: calc(11.4rem + 72px);

  @include media("desktop", "max") {
    padding: 1.5rem;
  }

  @include media('mobile', 'max') {
    padding: 0 #{map-get($margin-sizes, 8)}rem;
  }

  &.rb-background-dark {
    .section-title {
      @extend .rb-font-size-40;
      @extend .rb-text-color-1;
    }
  }
  &.rb-background-light {
    .section-title {
      @extend .rb-text-color-dark;
    }
  }

  &-container {
    @extend .container;

    .section-title {
      display: flex;
      flex-direction: column;

      @extend .rb-font-weight-bold;
      @extend .rb-font-size-40;

      &::after {
        content: ' ';
        width: 6.5rem;
        height: 1.7rem;

        @extend .rb-mt-16;
        @extend .rb-background-primary;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @extend .rb-mt-96;

    @include media('mobile', 'max') {
      margin-top: #{map-get($margin-sizes, 64)}rem;
      padding: 0 #{map-get($margin-sizes, 8)}rem;
    }
  }
}
</style>
