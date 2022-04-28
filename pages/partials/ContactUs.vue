<template>
  <v-section :title="$t('section.contactUs.title')" class="contact-us">
    <form class="contact-us__form form">
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
        :label="$t('section.contactUs.form.button.send')"
        :disabled="isDisabled"
        @click="send()"
      />
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
    }
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
        await emailjs.send({ ...this.form })
      } catch (e) {
        console.error(e)
      }
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
      }
    }
  }
</style>
