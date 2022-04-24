<template>
  <div class="main">
    <v-header />

    <our-services />

    <v-footer />
  </div>
</template>

<script>
import OurServices from '~/pages/partials/OurServices'
import VFooter from '~/pages/partials/VFooter'

export default {
  name: 'IndexPage',
  components: {
    OurServices,
    VFooter
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
