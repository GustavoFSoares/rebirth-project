<template>
  <div class="checkbox">
    <div class="checkbox-input">
      <input id="cb2" type="checkbox" :value="value" @input="handleChange">
      <label class="tick-container" for="cb2"><div class="tick" /></label>
    </div>

    <label class="checkbox-label" for="cb2">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: 'VCheckbox',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange (ev) {
      this.$emit('input', ev.target.checked)
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes cb-pop {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.checkbox {
  $checkboxSize: 20px;
  $checkboxColor: #{map-get($text-colors, 1)};
  $hoverColor: #{map-get($text-colors, 3)};
  $tickColor: #{$primary};

  display: flex;
  align-items: center;

  gap: 10px;
  position: relative;

  label {
    cursor: pointer;
  }

  &-input {
    .tick-container {
      display: inline-block;
      width: $checkboxSize;
      height: $checkboxSize;
      border: calc($checkboxSize * 0.05) solid $checkboxColor;
      border-radius: 5px;
      transition: 400ms 100ms ease-out;
    }

    .tick-container:hover {
      border-color: $hoverColor;
    }

    input[type="checkbox"] {
      display: none;
    }

    .tick {
      position: relative;

      right: calc($checkboxSize * -0.3);
      top: calc($checkboxSize * 0.1);
      width: calc($checkboxSize * 0.3);
      height: calc($checkboxSize * 0.6);

      border-right: calc($checkboxSize * 0.1) solid $tickColor;
      border-bottom: calc($checkboxSize * 0.1) solid $tickColor;

      transform: rotate(45deg) scale(0);
      opacity: 0;

      transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.5);
    }

    .tick:before {
      content: "";
      position: absolute;
      left: calc($checkboxSize * -0.07);
      bottom: calc($checkboxSize * -0.1);
      border: calc($checkboxSize * 0.05) solid $tickColor;
      border-radius: 50%;
    }

    .tick:after {
      content: "";
      position: absolute;
      right: calc($checkboxSize * -0.1);
      top: calc($checkboxSize * -0.07);
      border: calc($checkboxSize * 0.05) solid $tickColor;
      border-radius: 50%;
    }

    input[type="checkbox"]:checked + .tick-container {
      border-color: $hoverColor;

      .tick {
        opacity: 1;
        transform: rotate(45deg) scale(1);
      }
    }

    input[type="checkbox"]:focus + .tick-container {
      animation-name: cb-pop;
      animation-duration: 400ms;
      animation-iteration-count: 1;
      animation-timing-function: linear;
    }
  }

  &-label {
    @extend .rb-font-size-12;
    @extend .rb-text-color-2;

    display: flex;
    gap: 4px;

    @include media("tablet", "<") {
      display: initial;
      line-height: 1.2;
    }

    a {
      text-decoration: underline;
      @extend .rb-font-weight-bold;
    }
  }
}
</style>
