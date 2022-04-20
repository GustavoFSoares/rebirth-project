<template>
  <div class="main">
    <v-header />

    <v-section title="Title1">
      <service-item
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />

      <div class="rb-mt-16" style="display: flex; justify-content: space-around; width: 100%">
        <v-member
          name="Joao Santos de Oliveira"
          role="dev"
          description="Chuck Norris is the reason why Waldo is hiding. Chuck Norris plays Jenga with Stonehenge. Chuck Norris once won an underwater breathing contest. With a fish. When God said, “Let there be light!” Chuck said, “Say Please.”. Chuck Norris can kill your imaginary friends."
        />

        <v-member
          name="Joao (Sem foto)"
          role="dev"
          description="Chuck Norris can slam revolving doors. Some kids pee their name in the snow. Chuck Norris can pee his name into concrete. The only time Chuck Norris was ever wrong was when he thought he had made a mistake. Chuck Norris can squeeze orange juice out of a lemon. Chuck Norris threw a grenade and killed 50 people. Then it exploded. Chuck Norris used to beat the shit out of his shadow because it was following to close. It now stands a safe 30 feet behind him."
        />
      </div>
    </v-section>

    <v-section title="Title2" type="light">
      <service-item
        title="title"
        content="Chuck Norris threw a grenade and killed 50 people. Then it exploded."
      />
    </v-section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
  //
</style>
