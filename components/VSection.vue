<template>
  <section :class="['section', `rb-background-${type}`]">
    <slot name="section">
      <div class="section-container rb-mx-auto">
        <h1 v-if="title" class="section-container-title rb-mx-auto">
          {{ title }}
        </h1>

        <div class="section-container-content">
          <slot name="container">
            <div class="section-container-content-wrapper">
              <slot />
            </div>
          </slot>
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

  &:not(.footer):not(.hero):not(.portfolio) {
    padding-bottom: 36px;
  }

  @include media('mobile', 'max') {
    padding: 0 #{map-get($margin-sizes, 8)}rem;
  }

  &.rb-background-dark {
    .section-container-title {
      @extend .rb-text-color-1;
    }
  }
  &.rb-background-light {
    .section-container-title {
      @extend .rb-text-color-dark;
    }
  }

  &-container {
    &-title, &-content-wrapper {
      @extend .container;
    }

    &-title {
      display: flex;
      flex-direction: column;

      @extend .rb-font-weight-bold;
      @extend .rb-font-size-35;
      padding-top: 120px;

      &::after {
        content: ' ';
        width: 6.5rem;
        height: 1.7rem;

        @extend .rb-mt-16;
        @extend .rb-background-primary;
      }
    }

    &-content {
      position: relative;
      /* max-width: #{map-get($screen-sizes, 'largger')}px; */

      @extend .rb-pt-64;

      @include media('mobile', 'max') {
        padding:
          #{map-get($margin-sizes, 64)}rem
          #{map-get($margin-sizes, 8)}rem
          0;
      }

      &, &-wrapper {
        @extend .rb-mx-auto;
      }

      &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

}
</style>
