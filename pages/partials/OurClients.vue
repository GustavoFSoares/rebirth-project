<template>
  <v-section
    id="our-clients"
    class="our-clients"
    type="light"
    :title="$t('section.ourClients.title')"
  >
    <v-our-clients :clients="clients" />
  </v-section>
</template>

<script>
export default {
  name: 'OurClients',
  data () {
    return {
      clients: [
        'jovem-nerd',
        '9-tales',
        'breeders',
        'jambo-editora',
        'tormenta-20'
      ]
    }
  }
}
</script>
