<template>
  <div class="main">
    <v-header />

    <v-section title="Title1">
      <service-item
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />

      <v-member
        name="Joao Santos de Oliveira"
        occupation="dev"
      />

      <v-member
        name="Joao (Sem foto)"
        occupation="dev"
      />
    </v-section>

    <v-section title="Title2" type="light">
      <service-item
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />
    </v-section>
    <v-footer />
  </div>
</template>

<script>
import VFooter from '~/pages/partials/VFooter'
export default {
  name: 'IndexPage',
  components: { VFooter }
}
</script>

<style lang="scss" scoped>
  //
</style>
