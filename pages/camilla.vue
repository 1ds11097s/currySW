<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="camilla.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Camilla(Water Valkyrja)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & NEMESIS</span><br>
            <span>VIO & BLADE</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - CRDMG 6 - HP</span><br>
            <span>2 - SPD 4 - CRDMG 6 - ATK</span><br>
            <span>2 - HP 4 - CRDMG 6 - ATK</span><br>
            <span>2 - ATK 4 - CRDMG 6 - ATK</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>Damage Dealt on Fire +x%</span><br>
            <span>Damage Dealt on Water +x%</span><br>
            <span>Single-target skill CRIT DMG x% on your turn</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/lwd1JRkwwB4" target="_blank">
                  <v-img src="camilla1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War RTA】Tier S for this season??? The Full Power Camilla, 26ATK,4CRDMG is so strong!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/I6d8F8u-TBs" target="_blank">
                  <v-img src="camilla2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Camilla, she is new god damage cutter!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/hEckBpEeJiY" target="_blank">
                  <v-img src="camilla3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Next Spd +0 is Camilla, Hyper Power and Tanky so she is GOAT!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/lwd1JRkwwB4" target="_blank">
                  <v-img src="camilla1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War RTA】Tier S for this season??? The Full Power Camilla, 26ATK,4CRDMG is so strong!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/I6d8F8u-TBs" target="_blank">
                  <v-img src="camilla2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Camilla, she is new god damage cutter!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/hEckBpEeJiY" target="_blank">
                  <v-img src="camilla3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Next Spd +0 is Camilla, Hyper Power and Tanky so she is GOAT!</v-card-subtitle>
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
      title: "Camilla(Water Valkyrja) - Monsters Report【Summoners War】",
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

