<template>
  <a
    class="menu-item"
    :href="href"
    @click.prevent="goTo()"
  >
    <span class="rb-text-color-1 rb-font-size-16">{{ label }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="127"
      height="10"
      viewBox="0 0 127 10"
      fill="none"
      class="menu-line"
    >
      <g id="menu-item--line">
        <path
          id="middle-line"
          d="M1 5C50 4.99998 77.1845 5 126 5"
          stroke="#E72E51"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: String,
      default: 'Menu Item',
      required: true
    },
    href: {
      type: String,
      default: '#',
      required: false
    },
    hash: {
      type: String,
      default: '#'
    }
  },
  methods: {
    getElement: id => document.querySelector(id),
    goToElement (anchor = null) {
      if (!this.$route.meta?.id && !anchor) {
        return
      }
      const { id } = this.$route.meta
      const top = this.getElement(anchor || id).offsetTop
      if (top !== undefined) {
        window.scrollTo({ top, behavior: 'smooth' })
      }
    },
    goTo () {
      this.goToElement(this.hash)
    }
  }
}
</script>

<style scoped lang="scss">

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &--line path#middle-line {
    transform-origin: center center;
    transform-box: fill-box;
  }

  svg path{
    transition: ease .4s;
  }

  &:hover > svg path#middle-line {
    stroke: map-get($text-colors, 3);
  }
}
</style>
