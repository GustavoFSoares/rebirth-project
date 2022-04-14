<template>
  <div class="menu">
    <menu-item
      v-for="(item, index) in menuItems"
      :key="`${index}-${item}`"
      :label="item"
    />
  </div>
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

<style lang="scss" scoped>
  .menu {
    display: flex;
    justify-content: space-between;
    gap: 48px;

    @include media('tablet') {
      background: purple !important;
    }
  }
</style>
