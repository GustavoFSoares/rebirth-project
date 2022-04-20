<template>
  <div class="member">
    <v-member-item
      class="member-item"
      :name="name"
      :role="role"
      :identifier="identifier"
      @click.native="handleExpandMember"
    />

    <v-member-modal
      v-if="expand"
      :name="name"
      :role="role"
      :identifier="identifier"
      :description="description"
      @hide="handleExpandMember"
    />
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
    role: {
      type: String,
      required: true
    },
    identifier: {
      type: [Number, String],
      default: null
    },
    description: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      expand: false
    }
  },
  methods: {
    handleExpandMember () {
      this.expand = !this.expand
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  &-item {
    cursor: pointer;
  }
}
</style>
