<template>
  <div class="line">
    <slot />
    <component
      :is="'VOl'"
      :content="line.title"
      :start="index"
      class="line-title"
      :class="[{ 'hidden-number' : !line.typeTitle}, line.style]"
    />
    <VParagraph
      v-for="(p, i) in line.paragraphs"
      :key="i"
      :text="p.text"
      :high-lights="p.highLights"
      :list="p.list"
    />
  </div>
</template>

<script>
export default {
  name: 'VLine',
  components: {
    VOl: () => import('./VOl'),
    VParagraph: () => import('./VParagraph')
  },
  props: {
    line: undefined,
    index: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    component: undefined
  })
}
</script>

<style scoped lang="scss">
.line {
  padding: 3rem;
  padding-bottom: 0.5rem;

  & + & {
    padding-top: 0;
  }

  &:nth-last-child(-n+3) {
    ::v-deep ol {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &:last-of-type {
    ::v-deep ol {
      margin-bottom: 2em;
    }
  }
}

</style>
