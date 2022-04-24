<template>
  <div class="form-input">
    <label>
      <span class="form-input__label">
        {{ label }}
      </span>
      <input
        v-model="value"
        :type="type"
        class="form-input__input"
        :placeholder="placeholder"
        @input="updateValue"
        @blur="blur"
      >
    </label>
    <transition>
      <div v-if="error.$error" class="form-input__message">
        <span v-if="!error.required" class="form-input__message--error">
          {{ errorMessage }}
        </span>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'VInput',
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
</style>
