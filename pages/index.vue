<template>
  <div>
    <menu-item label="Mussum" />

    <ServiceItem
      title="title"
      content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #262626;
}

.rb-logo {
  width: 80vw;
  height: 80vh;
}
</style>
