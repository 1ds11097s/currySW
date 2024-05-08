<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="praha.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Praha(Water Oracle)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span><br>
            <span>VIO & REVENGE</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPEED 4 - CRI RATE 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Skill 3 Accuracy +x%</span><br>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
            <span>Additional Damage by x% of SPEED</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/p4-RNnIHUT4" target="_blank">
                  <v-img src="praha1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Slow Praha, she has to be fast to be useful?</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/7ulSuWLYJXU" target="_blank">
                  <v-img src="praha2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Crazy Power Praha, she is key monster in this season!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/4-lf1M6qJnQ" target="_blank">
                  <v-img src="praha3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Praha, she gots new power sleep & speed up!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/p4-RNnIHUT4" target="_blank">
                  <v-img src="praha1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Slow Praha, she has to be fast to be useful?</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/7ulSuWLYJXU" target="_blank">
                  <v-img src="praha2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Crazy Power Praha, she is key monster in this season!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/4-lf1M6qJnQ" target="_blank">
                  <v-img src="praha3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED Praha, she gots new power sleep & speed up!!</v-card-subtitle>
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
      title: "Praha(Water Oracle) - Monsters Report【Summoners War】",
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

