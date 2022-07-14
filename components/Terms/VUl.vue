<template>
  <ul>
    {{ content }}
  </ul>
</template>

<script>
export default {
  name: 'VUl',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
