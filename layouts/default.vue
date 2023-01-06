<template>
 <v-app class="body-black">
    <Header />
    <v-row justify="center" class="mt-2 pb-4 px-6">
      <v-col cols="10">
        <Nuxt />
      </v-col>
    </v-row>
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>