<template>
  <div>
    <VMenu />

    <VSection title="Title1">
      <menu-item label="Mussum" />

      <ServiceItem
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />
    </VSection>

    <VSection title="Title2" type="light">
      <menu-item label="Mussum" />

      <ServiceItem
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />
    </VSection>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>

</style>
