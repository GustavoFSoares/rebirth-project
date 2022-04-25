<template>
  <div class="form-input">
    <label class="flex flex-column flex-gap-1">
      <span class="form-input__label rb-font-size-16 rb-font-weight-bold rb-text-color-2">
        {{ label }}
      </span>
      <input
        v-if="type !== 'textarea'"
        v-model="value"
        :type="type"
        class="form-input__input rb-text-color-3 rb-font-weight-bold"
        :placeholder="placeholder"
        @input="updateValue"
        @blur="blur"
      >
      <textarea
        v-else
        v-model="value"
        :type="type"
        class="form-input__input rb-text-color-3 rb-font-weight-bold"
        :placeholder="placeholder"
        @input="updateValue"
        @blur="blur"
      />
    </label>
    <transition>
      <div v-if="error.$error" class="form-input__message mw-2">
        <span
          v-if="!error.required || !error.email"
          class="form-input__message--error rb-text-color-primary rb-font-size-12 flex flex-start flex-gap-1 flex-center-center"
        >
          <error-icon class="form-input__message-icon" /> {{ errorMessage }}
        </span>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'VInput',
  components: {
    ErrorIcon: () => import('@/assets/images/icons/error-icon.svg?inline')
  },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    errorMessage: {
      type: String,
      default: 'Enter a valid value'
    },
    error: undefined
  },
  data: () => ({
    value: null
  }),
  methods: {
    updateValue () {
      this.$emit('update:value', this.value)
    },
    blur () {
      this.$emit('blur')
    }
  }
}
</script>

<style scoped lang="scss">
  .form-input {
    &__input {
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      line-height: 2;

      &:focus-visible,
      &:active {
        outline: unset;
      }
    }
    &__message-icon {
      max-width: 20px;
    }
  }
</style>
