<template>
  <p ref="text" class="paragraph">
    {{ text }}
    <ol>
      <li
        v-for="(pos, p) in list"
        :key="pos+p"
        :start="p"
      >
        {{ pos.text }}
      </li>
    </ol>
  </p>
</template>

<script>
export default {
  name: 'VParagraph',
  props: {
    text: {
      type: String,
      default: ''
    },
    highLights: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => undefined,
      required: false
    }
  },
  mounted () {
    this.applyHighLights()
  },
  methods: {
    applyHighLights () {
      if (!this.highLights.length) {
        return
      }

      this.highLights.forEach((high) => {
        const text = this.$refs.text.innerHTML
        this.$refs.text.innerHTML = text.replaceAll(high, `<strong>${high}</strong>`)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.paragraph {
  line-height: 1.3;
  letter-spacing: .5px;

  & + & {
    margin-top: 12px;
  }
  > ol {
    margin-left: 4rem;
    margin-top: 1rem;
    margin-bottom: 2.5rem;

    li + li {
      margin-top: 1rem;
    }

  }
}
</style>
