<template>
  <nav class="menu">
    <menu-item
      v-for="(item, index) in menuItems"
      :key="`${index}-${item}`"
      :label="item"
    />
  </nav>
</template>

<script>
export default {
  name: 'VMenu',
  data: () => ({
    menuItems: [
      'Potfolio',
      'About Us',
      'Members',
      'Contact Us'
    ]
  })
}
</script>

<style scoped lang="scss">
  .menu {
    display: flex;
    justify-content: space-between;
    gap: 48px;
  }
</style>
