<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="giou.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Giou(Wind Onmyouji)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>DESP & REVENGE</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - HP 6 - HP</span><br>
            <span>2 - HP 4 - HP 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Skill 2 Accuracy +x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/cgElZWyDz4k" target="_blank">
                  <v-img src="giou1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】SEASON23 SEMI-MVP Giou, she is new tier SSS for turn2  units!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/Mj6BPLOihsc" target="_blank">
                  <v-img src="giou2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Despair Giou, is she useful for next season? or...</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/cgElZWyDz4k" target="_blank">
                  <v-img src="giou1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】SEASON23 SEMI-MVP Giou, she is new tier SSS for turn2  units!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/Mj6BPLOihsc" target="_blank">
                  <v-img src="giou2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Despair Giou, is she useful for next season? or...</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                
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
      title: "Giou(Wind Onmyouji) - Monsters Report【Summoners War】",
    }
  },
}
</script>

