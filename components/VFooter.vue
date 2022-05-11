<template>
  <v-section id="footer" class="footer">
    <template #section>
      <div class="footer-container">
        <div class="footer-container-social-links">
          <social-link
            v-for="(link, index) in socialLinks"
            :key="`${index}-social-link`"
            v-bind="link"
          />
        </div>

        <a
          class="footer-container-mail rb-text-color-1 rb-font-size-20"
          href="mailto:contact@rebirthstudio.com.br"
        >
          contact@rebirthstudio.com.br
        </a>

        <r-brand class="footer-container-brand" @click="toTop" />

        <div class="footer-container-terms">
          <nuxt-link :to="$t('menu.privacyPolicy.path')" class="footer-container-terms-privacy-policy">
            {{ $t('menu.privacyPolicy.label') }}
          </nuxt-link>

          <nuxt-link :to="$t('menu.termsOfUse.path')" class="footer-container-terms-terms-of-use">
            {{ $t('menu.termsOfUse.label') }}
          </nuxt-link>
        </div>
      </div>
    </template>
  </v-section>
</template>

<script>
export default {
  name: 'VFooter',
  components: {
    RBrand: () => import('@/assets/images/icons/brand.svg?inline')
  },
  data: () => ({
    socialLinks: [
      {
        icon: 'artstation',
        href: 'https://www.artstation.com/rebirthstudio'
      },
      {
        icon: 'insta',
        href: 'https://www.instagram.com/studiorebirth_/'
      },
      {
        icon: 'twitter',
        href: 'https://twitter.com/rebirth_studio'
      }
    ]
  }),
  methods: {
    toTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      history.pushState('/', 'Rebirth Studio', '/')
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  &-container {
    padding-top: 160px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url("~/assets/images/footer-background.webp");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    @include media('tablet', 'max') {
      background-position-x: right;
      padding-top: 116px;
    }

    @include media('mobile', 'max') {
      background-position-x: -600px;
    }

    @include media('mobile-m', 'max') {
      background-position-x: -680px;
    }

    &-social-links {
      display: flex;
      gap: 24px;
      margin-bottom: 48px;

      @include media('tablet', 'min') {
        gap: 48px;
        margin-bottom: 72px;
      }

      @include media('tablet', 'max') {
        margin-bottom: 48px;
      }

      ::v-deep .social-link__icon {
        @include media('tablet', 'max') {
          max-width: 24px !important;
        }
      }
    }

    &-mail {
      @include media('tablet', 'max') {
        font-size: 1.6rem;
      }
    }

    &-brand {
      bottom: 100px;
      position: absolute;
      cursor: pointer;
    }

    &-terms {
      bottom: 10px;
      position: absolute;

      @include media('mobile', 'max') {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      a {
        @extend .rb-text-color-1;
        @extend .rb-font-size-20;

        &:nth-child(2) {
          @extend .rb-ml-16;

          @include media('mobile', 'max') {
            margin-left: 0;
            margin-top: #{map-get($margin-sizes, 16)}rem;
          }
        }
      }
    }
  }
}
</style>
