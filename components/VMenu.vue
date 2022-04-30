<template>
  <nav class="menu" :class="{'active' : isShowMenu}">
    <v-logo class="menu-logo" />
    <div
      class="menu-close"
      :class="{'active' : isShowMenu}"
      @click="isShowMenu = !isShowMenu"
    >
      <span />
      <span />
      <span />
    </div>
    <div class="menu-items" @click="isShowMenu = false">
      <menu-item
        v-for="(item, index) in menuItems"
        :key="`${index}-${item}`"
        :label="item.label"
        :href="item.path"
        :hash="item.id"
      />
    </div>
  </nav>
</template>

<script>

export default {
  name: 'VMenu',
  data () {
    return {
      menuItems: this.$t('menu'),
      isShowMenu: false
    }
  },
  watch: {
    isShowMenu (val) {
      this.showMenu(val)
    }
  },
  mounted () {
    if (window.innerWidth < 768) {
      const gsap = this.$gsap
      gsap.set(
        '.menu-item', {
          x: 768
        })
    }
  },
  methods: {
    showMenu (bol) {
      const gsap = this.$gsap
      gsap.to(
        '.menu-item',
        {
          x: (bol) ? 0 : 768,
          stagger: (bol) ? 0.2 : 0.1
        })
    }

  }
}
</script>

<style lang="scss" scoped>
@keyframes show-menu {
  0% {
    transform: translate3d(50px, 0, 0);
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translate3d( 0, 0, 0);
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 15px 0;
  width: auto;
  margin: 0 auto;

  @include media('tablet', 'max') {
    width: auto;
  }

  &-logo {
    height: 64px;

    @include media("mobile-m", "<") {
      height: 48px;
    }
  }

  &-close {
    height: 32px;
    display: flex;
    border-radius: 3px;
    border: 1px solid  #8C8C8C;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    animation: show-menu 3s ease-in 3s forwards;
    transform: translate3d(100vw, 0, 0);
    box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.2);

    &,
    span {
      transition: 1s ease;
    }

    span {
      width: 32px;
      height: 2px;
      background: #8C8C8C;
      border-radius: 20px;
    }

    &.active {
      span {
        background: #E72E51;
      }

      span:nth-child(1) {
        transform:
          rotate(33deg)
          translate3d(5px, 6px, 0);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform:
          rotate(-33deg)
          translate3d(2px, -6px, 0);
      }
    }

    @include media('tablet', '>') {
      display: none;
    }
  }

  &-items {
    display: flex;
    justify-content: space-between;
    gap: 48px;
  }

  @include media('tablet', 'max') {
    &-items {
      top: 74px;
      flex-direction: column;
      justify-content: unset;
      align-items: flex-start;
      position: fixed;
      z-index: 1;
      left: 0;
      padding: 10px;
      gap: 5px;
      backdrop-filter: blur(12px);
      width: 100vw;
      height: 100vh;
      transform: translate3d(100vw, 0, 0);
      transition: ease 1s;

      .active & {
        transform: translate3d(0, 0, 0);
      }
    }

    &-item {
      background: map-get($backgrounds, 'soft-dark');
      width: 100%;
      padding: 20px 10px;
    }

    ::v-deep &-line{
      display: none;
    }
  }
}
</style>
