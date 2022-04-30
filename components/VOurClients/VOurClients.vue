<template>
  <div class="our-clients">
    <v-our-clients-item
      v-for="(client, index) in loadedClients"
      :key="index"
      :class="`our-clients-item our-clients-item-${index+1}`"
      :identifier="client"
    />
  </div>
</template>

<script>
export default {
  name: 'VOurClients',
  props: {
    clients: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      loadedClients: []
    }
  },
  mounted () {
    const loadedClients = this.clients.map(imageIndex => require(`@/assets/images/our-clients/${imageIndex}.webp`))

    this.loadedClients = loadedClients
  }
}
</script>

<style lang="scss" scoped>
.our-clients {
  @extend .grid;

  &-item {
    @extend .grid-2;

    @include media("tablet", "<") {
      @extend .m-grid-3;
    }

    &-1 {
      @extend .grid-start-2;

      @include media("tablet", "<") {
        grid-column-start: 1 !important;
        grid-column-end: span 3 !important;
      }
    }

    &-5 {
      @include media("tablet", "<") {
        @extend .m-grid-start-1;

        &::v-deep {
          img {
            width: initial !important;
          }
        }
      }
    }
  }
}
</style>
