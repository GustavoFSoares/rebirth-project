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

        <r-brand class="footer-container-brand" />
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
      },
      {
        icon: 'face',
        href: '#'
      },
      {
        icon: 'twitch',
        href: '#'
      }
    ]
  })
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
      bottom: 40px;
      position: absolute;
    }
  }
}
</style>
