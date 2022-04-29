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
        return `/members/${this.identifier}.jpg`
      }

      return require('~/assets/images/members/default-image.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.member-item {
  width: 100%;

  &-picture {
    display: flex;
    width: 100%;

    transition: transform ease .6s;

    &:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 1px 1px 10px 5px rgb(0 0 0 / 20%);
    }

    @extend .rb-background-primary;

    &-content {
      widows: 100%;
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
