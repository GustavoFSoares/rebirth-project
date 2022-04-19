<template>
  <div class="main">
    <v-header />

    <v-section title="Title1">
      <service-item
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />
    </v-section>

    <v-section title="Title2" type="light">
      <service-item
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />
    </v-section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
  .main {
    section:first-of-type {
      margin-top:  116px;
    }
  }
</style>
