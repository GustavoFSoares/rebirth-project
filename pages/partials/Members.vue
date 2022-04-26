<template>
  <v-section
    class="members"
    :title="$t('section.members.title')"
  >
    <div class="members-container">
      <v-member
        v-for="(memberKey, position) in memberPositions"
        :key="memberKey"
        :class="[
          'member',
          `member-position-${position}`
        ]"
        :identifier="memberKey"
        v-bind="members[memberKey]"
      />
    </div>
  </v-section>
</template>

<script>
export default {
  name: 'PMembers',
  data () {
    return {
      members: this.$t('section.members.people'),
      memberPositions: [
        'alef-mengali',
        'catatau',
        'daiany-tadaieski',
        'felipe-castro',
        'guilherme-castro',
        'mariana-livraes',
        'mariana-morgan',
        'pedro-dutra'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.members {
  &-container {
    @extend .grid;

    .member {
      @extend .grid-2;

      &-position-0 {
        @extend .grid-start-2;
      }

      &-position-5 {
        @extend .grid-start-4;
      }

      @include media("tablet", "<") {
        @extend .m-grid-3;

        &.member-position-0 {
          grid-column-start: 1;
          grid-column-end: span 3;
        }

        &.member-position-5 {
          grid-column: span 3;
        }
      }
    }
  }
}
</style>
