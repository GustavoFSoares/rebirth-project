<template>
  <div class="main">
    <v-header />
    <Nuxt />
    <v-cookie />
    <v-footer />
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 9000)
    })
  }
}
</script>

<style lang="scss">
.main > div {
  margin-top: calc(1rem + 72px);

  section + section {
    @include media('tablet', 'max') {
      margin-top: 5rem;
    }
  }

  > section:not(.hero):not(.footer):not(.page-header) {
    @include media('desktop', 'max') {
      padding: 0 16px 5rem;
    }

    @include media('mobile-m', '<') {
      padding: 0 10px 5rem;
    }
  }
}

</style>
