<template>
  <v-section
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
        'direwolf',
        'eternal',
        'breeders',
        'jambo-editora',
        'jovem-nerd',
        'mana-rocks',
        'sicko-games',
        'storybook-brawl',
        'tormenta-20'
      ]
    }
  }
}
</script>
