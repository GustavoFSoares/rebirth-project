<template>
  <div class="about-us">
    <v-section :title="$t('section.aboutUs.title')">
      <div class="about-us-container">
        <v-paragraphs
          class="about-us-item"
          :paragraphs="$t('section.aboutUs.paragraphs')"
        />
      </div>
    </v-section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
