<template>
  <ol :start="getStart">
    <li>
      {{ content }}
      <slot />
    </li>
  </ol>
</template>

<script>
export default {
  name: 'VOl',
  props: {
    start: {
      type: Number,
      default: 1
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    getStart () {
      return this.start + 1
    }
  }
}
</script>

<style scoped lang="scss">
ol {
  margin: 2rem;
  font-weight: bold;
  font-size: 2rem;

  li {
    font-weight: bold;
  }

  p > & {
    margin-left: 4rem;
    font-weight: normal;
    font-size: unset;
    margin-top: .5rem;
    margin-bottom: 0;

  }

  &.hidden-number {
    list-style: none;
    margin-left: 0;
  }

  &.light li{
    font-weight: normal;
  }
}
</style>
