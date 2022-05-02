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
      :instagram="instagram"
      :artstation="artstation"
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
    },
    instagram: {
      type: String,
      default: null
    },
    artstation: {
      type: String,
      default: null
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
