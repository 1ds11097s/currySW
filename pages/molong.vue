<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="molong.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Mo Long</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span><br>
            <span>VAMP & WILL</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - HP 6 - HP</span><br>
            <span>2 - SPD 4 - HP 6 - HP</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Dealt on Wind</span><br>
            <span>Skill 1 Accuracy</span><br>
            <span>Skill 2 Accuracy</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/CQ3phY2COL8" target="_blank">
                  <v-img src="molong1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】VAMP & VIO Double Panda Debut!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/dUT_3vzKFGQ" target="_blank">
                  <v-img src="molong2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】World Arena Season 22 MVP - ULTIMATE Mo Long</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/I0RK2r5BbbM" target="_blank">
                  <v-img src="molong3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Mo Long, he is World No1 Tanky!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/CQ3phY2COL8" target="_blank">
                  <v-img src="molong1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】VAMP & VIO Double Panda Debut!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/dUT_3vzKFGQ" target="_blank">
                  <v-img src="molong2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】World Arena Season 22 MVP - ULTIMATE Mo Long</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/I0RK2r5BbbM" target="_blank">
                  <v-img src="molong3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Mo Long, he is World No1 Tanky!!</v-card-subtitle>
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
      title: "Mo Long - Curry's Monsters Report【Summoners War】",
    }
  },
}
</script>

