<template>
  <v-section :title="$t('section.contactUs.title')" class="contact-us">
    <form ref="form" class="contact-us__form form">
      <v-input
        class="contact-us__form-name"
        :label="$t('section.contactUs.form.name.label')"
        :error-message="$t('section.contactUs.form.name.errorMessage')"
        type="text"
        :value.sync="form.name"
        :error="$v.form.name"
        @blur="$v.form.name.$touch()"
      />
      <v-input
        class="contact-us__form-email"
        :error-message="$t('section.contactUs.form.email.errorMessage')"
        :error-email="$t('section.contactUs.form.email.errorEmail')"
        :label="$t('section.contactUs.form.email.label')"
        type="email"
        :value.sync="form.email"
        :error="$v.form.email"
        @blur="$v.form.email.$touch()"
      />
      <v-input
        class="contact-us__form-subject"
        :error-message="$t('section.contactUs.form.subject.errorMessage')"
        :label="$t('section.contactUs.form.subject.label')"
        type="text"
        :value.sync="form.subject"
        :error="$v.form.subject"
        @blur="$v.form.subject.$touch()"
      />
      <v-input
        class="contact-us__form-textarea"
        :error-message="$t('section.contactUs.form.message.errorMessage')"
        :label="$t('section.contactUs.form.message.label')"
        type="textarea"
        :value.sync="form.message"
        :error="$v.form.message"
        @blur="$v.form.message.$touch()"
      />
      <v-button
        class="button--outline"
        type="reset"
        :label="$t('section.contactUs.form.button.reset')"
      />
      <v-button
        :disabled="isDisabled || sending"
        :class="{'sending' : sending}"
        @click="send()"
      >
        <transition mode="out-in">
          <span v-if="!sending" key="label">
            {{ $t('section.contactUs.form.button.send') }}
          </span>
          <span v-else key="loading" class="button-loading" />
        </transition>
      </v-button>
      <recaptcha style="display: none" />
    </form>
  </v-section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import emailjs from '@/helpers/emailjs'

export default {
  name: 'ContactUs',
  data: () => ({
    form: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    sending: false
  }),
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      subject: {
        required
      },
      message: {
        required
      }
    }
  },
  computed: {
    isDisabled () {
      return this.$v.form.$invalid
    }
  },
  methods: {
    async send () {
      try {
        this.sending = true
        const token = await this.$recaptcha.getResponse()
        await emailjs.send({ 'g-recaptcha-response': token, ...this.form })
        await this.$recaptcha.reset()
        this.showToast(this.$t('section.contactUs.form.messages.success'), 'success')
      } catch (e) {
        this.showToast(this.$t('section.contactUs.form.messages.error'), 'error')
        console.error(e)
      }
      this.sending = false
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped lang="scss">
  .contact-us {
    &__form {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(12, 1fr);
      gap: 12px 24px;

      @include media('tablet', '<') {
        grid-template-columns: repeat(6, 1fr);
      }

      &-name,
      &-email {
        grid-column: span 6;
      }

      &-subject,
      &-textarea {
        grid-column: span 12;

        @include media('tablet', '<') {
          grid-column: span 6;
        }
      }

      &-textarea {
        ::v-deep textarea {
          height: 96px;
        }
      }

      .button {
        grid-column-start: -1;
        grid-column: span 2;

        @include media('tablet', '<') {
          grid-column: span 3;
        }

        &--outline {
          grid-column-start: -5;
          grid-column-end: span 2;

          @include media('tablet', '<') {
            grid-column-start: -7;
            grid-column-end: span 3;
          }
        }

        &-loading {
          width: 20px;
          height: 20px;
          display: block;
          border: 3px solid $primary;
          border-bottom: 3px solid transparent;
          border-radius: 50%;
          margin: 0 auto;
          animation:
            girar linear 0.4s infinite,
            bordar ease-in-out 2s infinite alternate;
        }
      }
    }
  }

  @keyframes girar {
    70% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bordar {
    0% {
      border-style: dashed;
    }
    60%{
      filter: blur(0.5px);
    }
    90% {
      filter: blur(2px);
    }
    100% {
      filter: blur(2px);
      border-color: #E8E8E8;
      box-shadow: inset 0 0 12px 1px #E8E8E8;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
</style>
