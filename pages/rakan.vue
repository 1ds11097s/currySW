<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="rakan.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Rakan(Fire Chimera)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VAMP & WILL</span><br>
            <span>VIO & WILL</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - CRI DMG 6 - HP</span><br>
            <span>2 - HP 4 - CRI DMG 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Dealt on Fire +x%</span><br>
            <span>Damage Dealt on Wind +x%</span><br>
            <span>Skill 3 Accuracy +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 3 CRIT DMG +x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Damage Received from Water -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/T8Weoliwvvo" target="_blank">
                  <v-img src="rakan1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Swift Rakan, the king of beasts, fast and strong!!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/PgEZcg8f3Fg" target="_blank">
                  <v-img src="rakan2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Rakan, is he masha breaker?</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/C-NaOYPRKpg" target="_blank">
                  <v-img src="rakan3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Rakan, vio & will = endless provokes!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/T8Weoliwvvo" target="_blank">
                  <v-img src="rakan1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Swift Rakan, the king of beasts, fast and strong!!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/PgEZcg8f3Fg" target="_blank">
                  <v-img src="rakan2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Rakan, is he masha breaker?</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/C-NaOYPRKpg" target="_blank">
                  <v-img src="rakan3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Rakan, vio & will = endless provokes!</v-card-subtitle>
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
      title: "Rakan(Fire Chimera) - Monsters Report【Summoners War】",
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

