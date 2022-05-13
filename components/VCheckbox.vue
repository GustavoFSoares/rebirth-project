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

<script scoped>
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
.checkbox {
  --checkbox-size: 30px;
  --checkbox-color: #{map-get($text-colors, 1)};
  --hover-color: #{map-get($text-colors, 3)};
  --tick-color: #{$primary};

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
      width: var(--checkbox-size);
      height: var(--checkbox-size);
      border: calc(var(--checkbox-size) * 0.05) solid var(--checkbox-color);
      border-radius: 5px;
      -webkit-transition: 400ms 100ms ease-out;
      -o-transition: 400ms 100ms ease-out;
      transition: 400ms 100ms ease-out;
    }

    .tick-container:hover {
      border-color: var(--hover-color);
    }

    input[type="checkbox"] {
      display: none;
    }

    .tick {
      position: relative;

      right: calc(var(--checkbox-size) * -0.3);
      top: calc(var(--checkbox-size) * 0.1);
      width: calc(var(--checkbox-size) * 0.3);
      height: calc(var(--checkbox-size) * 0.6);

      border-right: calc(var(--checkbox-size) * 0.10) solid var(--tick-color);
      border-bottom: calc(var(--checkbox-size) * 0.10) solid var(--tick-color);

      transform: rotate(45deg) scale(0);
      opacity: 0;

      transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.5);
    }

    .tick:before {
      content: "";
      position: absolute;
      left: calc(var(--checkbox-size) * -0.07);
      bottom: calc(var(--checkbox-size) * -0.1);
      border: calc(var(--checkbox-size) * 0.05) solid var(--tick-color);
      border-radius: 50%;
    }

    .tick:after {
      content: "";
      position: absolute;
      right: calc(var(--checkbox-size) * -0.1);
      top: calc(var(--checkbox-size) * -0.07);
      border: calc(var(--checkbox-size) * 0.05) solid var(--tick-color);
      border-radius: 50%;
    }

    input[type="checkbox"]:checked + .tick-container {
      border-color: var(--hover-color);

      .tick {
        opacity: 1;
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
      }
    }

    input[type="checkbox"]:focus + .tick-container {
      -webkit-animation-name: cb-pop;
      animation-name: cb-pop;
      -webkit-animation-duration: 400ms;
      animation-duration: 400ms;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
    }

    @keyframes cb-pop {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      33% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      66% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      100% {
        tranform: scale(1);
      }
    }
  }

  &-label {
    @extend .rb-font-size-16;
    @extend .rb-text-color-2;

    display: flex;
    gap: 4px;

    @include media('tablet', '<') {
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
