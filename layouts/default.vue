<template>
  <div class="main">
    <v-header />
    <Nuxt />
    <v-footer />
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 9000)
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: calc(1rem + 72px);

  section + section {
    @include media('tablet', 'max') {
      margin-top: 5rem;
    }
  }

  div > section:not(.hero):not(.footer) {
    @include media('desktop', 'max') {
      padding: 0 16px;
    }

    @include media('mobile-m', '<') {
      padding: 0 10px;
    }
  }
}

</style>
