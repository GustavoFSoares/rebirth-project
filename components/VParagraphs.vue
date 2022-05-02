<template>
  <div class="paragraphs">
    <p
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      class="paragraphs-item"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'VParagraphs',
  props: {
    paragraphs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.paragraphs {
  @extend .rb-pa-32;
  @extend .rb-background-primary;
  border-radius: 10px;

  display: grid;
  gap: #{map-get($margin-sizes, 24)}rem;

  &-item {
    @extend .rb-font-size-24;
    @extend .rb-font-weight-semibold;
    @extend .rb-text-color-1;

    @include media("mobile", "max") {
      font-size: 16px;
      line-height: 1.3;
    }
  }
}
</style>
