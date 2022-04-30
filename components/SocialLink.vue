<template>
  <a v-if="icon" :href="href" class="social-link" target="__blank">
    <component :is="getIcon" class="social-link__icon" />
  </a>
</template>

<script>

export default {
  name: 'SocialLink',
  props: {
    icon: undefined,
    href: {
      type: String,
      default: '#'
    }
  },
  methods: {
    getIcon () {
      return import(`@/assets/images/icons/${this.icon}.svg?inline`)
    }
  }
}
</script>

<style scoped lang="scss">
  .social-link {
    cursor: pointer;
    transition: ease .5s;

    &:hover {
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, .7));
      transform: scale(1.2);
      stroke: $secondary;
    }

    &__icon {
      max-width: 28px;
    }
  }
</style>
