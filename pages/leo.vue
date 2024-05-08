<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="leo.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Leo(Wind Dragon Knight)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & NEMESIS</span><br>
            <span>VAMP & NEMESIS</span><br>
            <span>DESPAIR & REVENGE</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - CRDMG 6 - ATK</span><br>
            <span>2 - HP 4 - CRDMG 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Damage Dealt on Wind</span><br>
            <span>Damage Dealt on Water</span><br>
            <span>CRIT DMG+ up to x% as the enemy's HP condition is good</span><br>
            <span>CRIT DMG+ up to x% as the enemy's HP condition is bad</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
            <span>ATK Increased Proportional to Lost HP up to x%</span><br>
            <span>DEF Increased Proportional to Lost HP up to x%</span><br>
            <span>Single-target skill CRIT DMG x% on your turn</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/mNo_6eUSF8Q" target="_blank">
                  <v-img src="leo1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Despair & Revenge Leo, I always use him and he performs great</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/f_uH5BSH-M4" target="_blank">
                  <v-img src="leo2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Despair & Revenge Leo, he is always op!!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/C-NaOYPRKpg" target="_blank">
                  <v-img src="leo3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Despair Leo season23 ver, this is my top recommendation!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/mNo_6eUSF8Q" target="_blank">
                  <v-img src="leo1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Despair & Revenge Leo, I always use him and he performs great</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/f_uH5BSH-M4" target="_blank">
                  <v-img src="leo2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Despair & Revenge Leo, he is always op!!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/C-NaOYPRKpg" target="_blank">
                  <v-img src="leo3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Despair Leo season23 ver, this is my top recommendation!!</v-card-subtitle>
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
      title: "Leo(Wind Dragon Knight) - Monsters Report【Summoners War】",
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

