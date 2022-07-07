<template>
  <v-section
    id="members"
    class="members"
    :title="$t('section.members.title')"
  >
    <div class="members-container">
      <div class="decorator">
        <div class="arrow-3-red">
          <arrow-3-red />
        </div>
      </div>

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

      <div class="decorator">
        <div class="double-arrow-3-red">
          <double-arrow-3-red />
        </div>
      </div>
    </div>
  </v-section>
</template>

<script>
export default {
  name: 'PMembers',
  components: {
    Arrow3Red: () => import('@/assets/images/icons/decorators/arrow-3-red.svg?inline'),
    DoubleArrow3Red: () => import('@/assets/images/icons/decorators/double-arrow-3-red.svg?inline')
  },
  data () {
    return {
      members: this.$t('section.members.people'),
      memberPositions: [
        'alef-mengali',
        'catatau',
        'daiany-tadaieski',
        'felipe-castro',
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
        @extend .grid-start-3;
      }

      &-position-4 {
        @extend .grid-start-5;
      }

      @include media("tablet", "<") {
        @extend .m-grid-3;

        &.member-position-0 {
          grid-column-start: 1;
          grid-column-end: span 3;
        }

        &.member-position-4 {
          grid-column: span 3;
        }
      }

      &:nth-child(odd) {
        &::v-deep .member-item {
          &-picture:hover {
            transform: scale(1.1) rotate(-5deg);
          }
        }
      }
    }

    .decorator {
      @include media("mobile", "max") {
        display: none;
      }

      .arrow-3-red {
        position: absolute;
        top: -10%;
        right: 40%;
      }

      .double-arrow-3-red {
        position: absolute;
        bottom: -10%;
        right: 4%;
      }
    }
  }
}
</style>
