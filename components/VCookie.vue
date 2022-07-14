<template>
  <transition>
    <div v-if="!hasCookie" class="cookie">
      {{ $t('cookie') }}
      <nuxt-link :to="$t('menu.privacyPolicy.path')" class="cookie--link">
        {{ $t('menu.privacyPolicy.label') }}
      </nuxt-link>
      {{ $t('and') }}
      <nuxt-link :to="$t('menu.termsOfUse.path')" class="cookie--link">
        {{ $t('menu.termsOfUse.label') }}.
      </nuxt-link>

      <v-button class="cookie--button" @click="close">
        {{ $t('close') }}
      </v-button>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'VCookie',
  data: () => ({
    cookieName: '__LGPD_REBIRTHSTUDIO=ACCEPTED',
    hasCookie: false
  }),
  mounted () {
    this.checkCookie()
  },
  methods: {
    close () {
      this.hasCookie = true
      this.setCookie()
    },
    setCookie () {
      const d = new Date()
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000))
      const expires = 'expires=' + d.toGMTString()
      document.cookie = `${this.cookieName};${expires};path=/`
    },
    getCookie () {
      const cookieArray = decodeURIComponent(document.cookie).split(';')
      return !!cookieArray.find(cookie => cookie.includes(this.cookieName))
    },
    checkCookie () {
      this.hasCookie = this.getCookie()
    }
  }
}
</script>

<style scoped lang="scss">

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.cookie {
  background: rgba($secondary, 0.9);
  border: solid 2px $primary;
  border-radius: 10px;
  width: 90vw;
  position: fixed;
  display: block;
  margin: 0 auto;
  bottom: 5vh;
  z-index: 9;
  padding: 40px;
  left: 0;
  right: 0;
  color: #E8E8E8;
  font-size: 16px;
  text-align: center;

  &--link {
    font-weight: bold;
    text-decoration: underline;
  }

  &--button {
    display: block;
    margin: 3rem auto 0;
  }
}
</style>
