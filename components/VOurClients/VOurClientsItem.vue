<template>
  <div class="our-clients-item">
    <img :src="imagePath">
  </div>
</template>

<script>
export default {
  name: 'VOurClientsItem',
  props: {
    identifier: {
      type: String,
      required: true
    }
  },
  computed: {
    imagePath () {
      return this.identifier
    }
  }
}
</script>

<style lang="scss" scoped>
.our-clients-item {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    @include media("tablet", "<") {
      width: 90%;
    }
  }
}
</style>
