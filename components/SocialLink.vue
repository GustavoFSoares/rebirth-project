<template>
  <a v-if="icon" :href="href" class="social-link">
    <component :is="getIcon" class="social-link__icon"/>
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

<style scoped>

</style>
