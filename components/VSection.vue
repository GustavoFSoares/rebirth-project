<template>
  <section :class="['section', `rb-background-${type}`]">
    <slot name="container">
      <div class="section-container rb-mx-auto">
        <h1 class="section-title">
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
      required: true
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
  height: 100vh;
  padding-top: calc(11.4rem + 72px);

  @include media("desktop", "max") {
    padding: 1.5rem;
  }

  &.rb-background-dark {
    .section-title {
      @extend .rb-text-color-1;
    }
  }
  &.rb-background-light {
    .section-title {
      @extend .rb-text-color-dark;
    }
  }

  &-container {
    max-width: 1127px;

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
  }
}
</style>
