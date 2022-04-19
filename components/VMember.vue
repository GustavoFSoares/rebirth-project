<template>
  <div class="member">
    <div class="member-picture">
      <img
        :class="[
          'member-picture-content',
          { 'no-profile-picture': !identifier},
          'ma-auto'
        ]"
        :src="imagePath"
        alt="Member picture"
      >
    </div>

    <h5 class="member-name">
      {{ name }}
    </h5>

    <h6 class="member-occupation rb-text-color-1">
      {{ occupation }}
    </h6>
  </div>
</template>

<script>
export default {
  name: 'VMember',
  props: {
    name: {
      type: String,
      required: true
    },
    occupation: {
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
.member {
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

  &-occupation {
    @extend .rb-mt-8;
    @extend .rb-text-color-1;
    @extend .rb-font-size-12;
    @extend .rb-font-weight-light;
    font-style: italic;

  }
}
</style>
