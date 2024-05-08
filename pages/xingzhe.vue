<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="xingzhe.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Xing Zhe(Wind Monkey King)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & REVENGE</span><br>
            <span>DESPAIR & REVENGE</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - CRDMG 6 - ATK</span><br>
            <span>2 - HP 4 - CRDMG 6 - HP</span><br>
            <span>2 - HP 4 - HP 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Dealt on Wind</span><br>
            <span>Damage Dealt on Water</span><br>
            <span>ATK Increased Proportional to Lost HP up to x%</span><br>
            <span>CRIT DMG+ up to x% as the enemy's HP condition is good</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/881VEI_gpzs" target="_blank">
                  <v-img src="xingzhe1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The power ULTIMATE Xing Zhe, he is world no.1 monkey!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/4VkjIsmg36M" target="_blank">
                  <v-img src="xingzhe2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】SEASON23 MVP DOUBLE Xing Zhe, I used Vio and Desp!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/-rKRYuu4Hro" target="_blank">
                  <v-img src="xingzhe3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED God Despair Xing Zhe, is his good rune set despair or ???</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/881VEI_gpzs" target="_blank">
                  <v-img src="xingzhe1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The power ULTIMATE Xing Zhe, he is world no.1 monkey!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/4VkjIsmg36M" target="_blank">
                  <v-img src="xingzhe2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】SEASON23 MVP DOUBLE Xing Zhe, I used Vio and Desp!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/-rKRYuu4Hro" target="_blank">
                  <v-img src="xingzhe3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】THE BUFFED God Despair Xing Zhe, is his good rune set despair or ???</v-card-subtitle>
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
      title: "Xing Zhe(Wind Monkey King) - Monsters Report【Summoners War】",
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

