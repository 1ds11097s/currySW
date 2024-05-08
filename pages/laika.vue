<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="laika.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Laika(Fire Dragon Knight)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VAMP & NEMESIS</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - ATK 4 - CRI DMG 6 - ATK</span><br>
            <span>2 - ATK 4 - CRI DMG 6 - RESISTANCE</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Dealt on Fire +x%</span><br>
            <span>Damage Dealt on Wind +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>ATK Increased Proportional to Lost HP up to x%</span><br>
            <span>Single-target skill CRIT DMG x% on your turn</span><br>
            <span>Life Drain +x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/dxHpqnD9B5k" target="_blank">
                  <v-img src="laika1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Unbreakable! The Power Resis 100% Laika!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/bh6hseU1M1k" target="_blank">
                  <v-img src="laika2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The BUFFED 30% → 24% Laika, is he usefull for next season???</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/WpjbdTmzbu4" target="_blank">
                  <v-img src="laika3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Full Power Laika, he is best one shot killer!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/dxHpqnD9B5k" target="_blank">
                  <v-img src="laika1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Unbreakable! The Power Resis 100% Laika!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/bh6hseU1M1k" target="_blank">
                  <v-img src="laika2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The BUFFED 30% → 24% Laika, is he usefull for next season???</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/WpjbdTmzbu4" target="_blank">
                  <v-img src="laika3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Full Power Laika, he is best one shot killer!!</v-card-subtitle>
                </v-card>
              </v-col>  
            </template>    
          </v-row>
        </v-col>
      </v-row>
      <template>
        <adsbygoogle ad-slot="5626360063" />
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
      title: "Laika(Fire Dragon Knight) - Monsters Report【Summoners War】",
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

