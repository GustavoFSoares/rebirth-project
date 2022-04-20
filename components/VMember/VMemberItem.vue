<template>
  <div class="member-item">
    <div class="member-item-picture">
      <img
        :class="[
          'member-item-picture-content',
          { 'no-profile-picture': !identifier},
          'ma-auto'
        ]"
        :src="imagePath"
        alt="Member picture"
      >
    </div>

    <h5 class="member-item-name">
      {{ name }}
    </h5>

    <h6 class="member-item-role rb-text-color-1">
      {{ role }}
    </h6>
  </div>
</template>

<script>
export default {
  name: 'VMemberItem',
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    identifier: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    imagePath () {
      if (this.identifier) {
        return `/members/${this.identifier}.png`
      }

      return require('~/assets/img/members/default-image.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.member-item {
  width: 16.8rem;

  &-picture {
    display: flex;
    width: 100%;
    height: 16.8rem;
    @extend .rb-background-primary;

    &-content {
      display: block;
      @extend .rb-ma-auto;

      &.no-profile-picture {
        width: 90%;
        height: 90%;
      }

      &:not(.no-profile-picture) {
        width: 100%;
        height: 100%;
      }
    }
  }

  &-name {
    @extend .rb-mt-16;
    @extend .rb-text-color-1;
    @extend .rb-font-size-16;
    @extend .rb-font-weight-semibold;
  }

  &-role {
    @extend .rb-mt-8;
    @extend .rb-text-color-1;
    @extend .rb-font-size-12;
    @extend .rb-font-weight-light;
    font-style: italic;
  }
}
</style>
