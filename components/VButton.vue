<template>
  <button
    class="button rb-font-weight-bold"
    :type="type"
    :disabled="disabled"
    @click="click($event)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Send'
    }
  },
  methods: {
    click (event) {
      if (this.type !== 'reset') {
        event.preventDefault()
      }

      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  .button {
    @extend .rb-background-primary, .rb-text-color-1;
    border-radius: 3px;
    text-transform: uppercase;
    padding: 8px 10px;
    border: none;
    letter-spacing: .5px;
    transition: ease .5s, background-color ease 0.8s;

    @include media('tablet', '<') {
      padding: 15px 10px;
      font-size: 2rem;
    }

    &:hover {
      background-color: lighten($primary, 3);
      cursor: pointer;
      transform: scale(1.1);
      box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 41%);
    }

    &:active {
      background-color: darken($primary, 10);
    }

    &:focus-visible {
      outline: none;
      text-decoration: underline;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &--outline {
      border: 2px solid $primary;
      color: $primary;
      background: transparent;

      &:hover {
        @extend .rb-text-color-1;
      }
    }
  }
</style>
