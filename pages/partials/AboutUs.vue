<template>
  <v-section
    class="about-us"
    :title="$t('section.aboutUs.title')"
  >
    <div class="about-us-container">
      <v-paragraphs
        class="about-us-item"
        :paragraphs="$t('section.aboutUs.paragraphs')"
      />
    </div>
  </v-section>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
