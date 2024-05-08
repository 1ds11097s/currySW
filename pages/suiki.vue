<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="suiki.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Suiki(Water Onimusha)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span><br>
            <span>VIO & REVENGE</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - ATK 6 - HP</span><br>
            <span>2 - SPD 4 - HP 6 - HP</span><br>
            <span>2 - HP 4 - ATK 6 - HP</span><br>
            <span>2 - HP 4 - ATK 6 - ATK</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Additional Damage by x% of ATK</span><br>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/bi33Lhzla44" target="_blank">
                  <v-img src="suiki1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Destroy*2, Revenge*1, The Destroyer Suiki!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/J-Eqq1p3GuU" target="_blank">
                  <v-img src="suiki2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Suiki with Crazy Tanky Resis100%!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/gyg8NmU4nds" target="_blank">
                  <v-img src="suiki3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Suiki, he can easily defeat enemies!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/bi33Lhzla44" target="_blank">
                  <v-img src="suiki1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Destroy*2, Revenge*1, The Destroyer Suiki!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/J-Eqq1p3GuU" target="_blank">
                  <v-img src="suiki2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Suiki with Crazy Tanky Resis100%!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/gyg8NmU4nds" target="_blank">
                  <v-img src="suiki3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Suiki, he can easily defeat enemies!</v-card-subtitle>
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
      title: "Suiki(Water Onimusha) - Monsters Report【Summoners War】",
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

