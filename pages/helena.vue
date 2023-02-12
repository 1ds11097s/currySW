<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="helena.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Helena(Fire Unicorn)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & REVENGE</span><br>
            <span>VIO & WILL</span><br>
            <span>DESPAIR & REVENGE</span><br>
            <span>DESPAIR & WILL</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - CRI RATE 6 - HP</span><br>
            <span>2 - HP 4 - CRI RATE 6 - HP</span><br>
            <span>2 - SPD 4 - CRDMG 6 - HP</span><br>
            <span>2 - HP 4 - CRDMG 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/DhoROsI1rnQ" target="_blank">
                  <v-img src="helena1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War RTA】The Power Speed+0 & Resis100% Helena, non stop crazy horse debut!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/HEZVriwubZ8" target="_blank">
                  <v-img src="helena2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Helena, is Despair & Resis 100% strong?</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/rufYXcvaGxE" target="_blank">
                  <v-img src="helena3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Despair and High resis crazy Helena, she breaks all enemy!!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/DhoROsI1rnQ" target="_blank">
                  <v-img src="helena1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War RTA】The Power Speed+0 & Resis100% Helena, non stop crazy horse debut!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/HEZVriwubZ8" target="_blank">
                  <v-img src="helena2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Helena, is Despair & Resis 100% strong?</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/rufYXcvaGxE" target="_blank">
                  <v-img src="helena3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Despair and High resis crazy Helena, she breaks all enemy!!!</v-card-subtitle>
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
      title: "Helena(Fire Unicorn) - Monsters Report【Summoners War】",
    }
  },
}
</script>

