<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="josephine.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Josephine(Water Paladin)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - CRI DMG 6 - HP</span><br>
            <span>2 - HP 4 - CRI DMG 6 - HP</span><br>
            <span>2 - HP 4 - CRI DMG 6 - ATK</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Dealt on Fire +x%</span><br>
            <span>Damage Dealt on Wind +x%</span><br>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/3zjcQByViHA" target="_blank">
                  <v-img src="josephine1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Crazy Resis 100% Josephine, she is hyper tanky attacker!!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/e3OwG6X4v0Q" target="_blank">
                  <v-img src="josephine2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】『+197』The Power Swift Josephine, No one can stop her!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/5Am0JoDOFCY" target="_blank">
                  <v-img src="josephine3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Josephine, she is anti control and stun machine!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/3zjcQByViHA" target="_blank">
                  <v-img src="josephine1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Crazy Resis 100% Josephine, she is hyper tanky attacker!!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/e3OwG6X4v0Q" target="_blank">
                  <v-img src="josephine2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】『+197』The Power Swift Josephine, No one can stop her!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/5Am0JoDOFCY" target="_blank">
                  <v-img src="josephine3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Josephine, she is anti control and stun machine!!</v-card-subtitle>
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
  head() {
    return {
      title: "Josephine(Water Paladin) - Monsters Report【Summoners War】",
      link: [
        {
          rel: 'canonical',
          href: `https://summoners-war-reference-book.xyz/${this.currentPageForCanonical}`,
        },
      ],
    }
  },
}
</script>

