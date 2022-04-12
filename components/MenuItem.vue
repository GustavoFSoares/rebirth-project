<template>
  <div class="menu-item">
    <span class="rb-text-color-1 rb-text-size-16">{{ label }}</span>
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
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: String,
      default: 'Menu Item',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

@keyframes menu-line {
  0% {
    d: path('M1 5C50 4.99998 77.1845 5 126 5');
  }
  30% {
    d: path('M1 5C52.3183 9.09391 79.4405 8.95118 126 5');
  }
  60% {
    d: path('M1 4.99931C52.5833 0.261296 79.119 0.80672 126 4.99931');
  }
  100% {
    d: path('M1 5C50 4.99998 77.1845 5 126 5');
  }
}

@keyframes menu-line-click {
  0% {
    d: path('M1 5C50 4.99998 77.1845 5 126 5');
  }
  30%, 100% {
    d: path('M1 5C52.3183 9.09391 79.4405 8.95118 126 5');
  }
}

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

  &:hover > svg path#middle-line {
    animation: menu-line 1s ease forwards alternate;
  }

  &:active svg path#middle-line {
    animation: menu-line-click 1s ease forwards alternate;
  }
}
</style>
