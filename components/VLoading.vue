<template>
  <transition appear>
    <div v-if="loading" class="loading-page">
      <VLogo class="logo" :animate="true" />
    </div>
  </transition>
</template>

<script>
import goTo from '~/mixins/go-to'
export default {
  name: 'VLoading',
  mixins: [goTo],
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
      // window.scroll({ top: 0 })
    },
    finish () {
      this.loading = false
      this.goToElement()
    }
  }
}
</script>
<style scoped lang="scss">
  .loading-page {
    position: fixed;
    z-index: 9999999;
    padding: 15px;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $secondary;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;

    .logo {
      max-width: 1117px;
      width: 70vw;
    }
  }

  .v-leave-active {
    transition: opacity .5s;
  }

  .v-leave-to {
    opacity: 0;
  }
</style>
