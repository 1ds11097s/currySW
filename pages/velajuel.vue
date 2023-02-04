<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="velajuel.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Velajuel(Fire Ark Angel)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - DEF 4 - CRDMG 6 - DEF</span><br>
            <span>2 - SPD 4 - CRDMG 6 - DEF</span><br>
            <span>2 - SPD 4 - DEF 6 - DEF</span><br>
            <span>2 - SPD 4 - HP 6 - DEF</span><br>
            <span>2 - DEF 4 - HP 6 - DEF</span><br>
            <span>2 - HP 4 - HP 6 - DEF</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Damage Dealt on Fire +x%</span><br>
            <span>Damage Dealt on Wind +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>DEF Increased Proportional to Lost HP up to x%</span><br>
            <span>Single-target skill CRIT DMG x% on your turn</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/6hfLaJ9pIns" target="_blank">
                  <v-img src="velajuel1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War RTA】Speed≒0, The Power Hyper Tanky Resis100% & CRDMG 140% Velajuel!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/wlRBPVM0BME" target="_blank">
                  <v-img src="velajuel2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Velajuel, is strong god tanky & resis 100%???</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/BSLa-vwMDYQ" target="_blank">
                  <v-img src="velajuel3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【 Summoners War | Curry's RTA 】The Power Velajuel, Power Up skill2 Punishment!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/6hfLaJ9pIns" target="_blank">
                  <v-img src="velajuel1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War RTA】Speed≒0, The Power Hyper Tanky Resis100% & CRDMG 140% Velajuel!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/wlRBPVM0BME" target="_blank">
                  <v-img src="velajuel2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Velajuel, is strong god tanky & resis 100%???</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/BSLa-vwMDYQ" target="_blank">
                  <v-img src="velajuel3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【 Summoners War | Curry's RTA 】The Power Velajuel, Power Up skill2 Punishment!</v-card-subtitle>
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
      title: "Velajuel(Fire Ark Angel) - Monsters Report【Summoners War】",
    }
  },
}
</script>

