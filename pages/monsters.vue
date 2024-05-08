<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;"><h1 class="h1-font-size">Monsters Report List</h1></div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <h3>Water</h3>
          <v-btn text color="blue" class="font-weight-bold" href="/molong">Mo Long(Water Panda Warrior)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/belial">Belial(Water Demon)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/suiki">Suiki(Water Onimusha)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/josephine">Josephine(Water Paladin)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/woosa">Woosa(Water Pioneer)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/bolverk">Bolverk(Water Emperor)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/chow">Chow(Water Dragon Knight)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/haegang">Haegang(Water Art Master)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/praha">Praha(Water Oracle)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/camilla">Camilla(Water Valkyrja)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/susano">Susano(Water Ninja)</v-btn>
          <h3>Wind</h3>
          <v-btn text color="blue" class="font-weight-bold" href="/leo">Leo(Wind Dragon Knight)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/xingzhe">Xing Zhe(Wind Monkey King)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/fuuki">Fuuki(Wind Onimusha)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/fengyan">Feng Yan(Wind Panda Warrior)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/seara">Seara(Wind Oracle)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/giou">Giou(Wind Onmyouji)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/diana">Diana(Wind Unicorn)</v-btn>
          <h3>Fire</h3>
          <v-btn text color="blue" class="font-weight-bold" href="/juno">Juno(Fire Oracle)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/rakan">Rakan(Fire Chimera)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/laika">Laika(Fire Dragon Knight)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/kaki">Kaki(Fire Onimusha)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/karnal">Karnal(Fire Slayer)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/meihouwang">Mei Hou Wang(Fire Monkey King)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/ophilia">Ophilia(Fire Paladin)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/velajuel">Velajuel(Fire Ark Angel)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/perna">Perna(Fire Phoenix)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/raki">Raki(Fire HellLady)</v-btn>
          <v-btn text color="blue" class="font-weight-bold" href="/helena">Helena(Fire Unicorn)</v-btn>
          <h3>Light</h3>
          <v-btn text color="blue" class="font-weight-bold" href="/elsharion">Elsharion(Light Ifrit)</v-btn>
          <h3>Dark</h3>
        </v-col>
      </v-row>
      <template>
        <adsbygoogle ad-slot="9249275840" />
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "default",
  computed: {
    currentPageForCanonical() {
      return this.$route.path.slice(1)
    }
  },
  head() {
    return {
      title: "Monsters - CurrySW RTA Room【Summoners War】",
      link: [
        {
          rel: 'canonical',
          href: `https://summoners-war-reference-book.xyz/${this.currentPageForCanonical}/`,
        },
      ],
    }
  },
}
</script>
