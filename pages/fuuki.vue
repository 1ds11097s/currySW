<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="fuuki.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Fuuki(Wind Onimusha)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & REVENGE</span><br>
            <span>VIO & WILL</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - SPD 4 - HP 6 - HP</span><br>
            <span>2 - HP 4 - HP 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>ATK Increased Proportional to Lost HP up to x%</span><br>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/AAlA9lYXdIQ" target="_blank">
                  <v-img src="fuuki1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Destroy*2, Revenge*1, The Destroyer Fuuki!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/trvoS0wmLHM" target="_blank">
                  <v-img src="fuuki2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Fuuki, he is very dangerous this season!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/kPLH0Vs7ldw" target="_blank">
                  <v-img src="fuuki3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Fuuki, The Power Destroyer....season 22 start!!</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/AAlA9lYXdIQ" target="_blank">
                  <v-img src="juno1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】Destroy*2, Revenge*1, The Destroyer Fuuki!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/trvoS0wmLHM" target="_blank">
                  <v-img src="juno2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Fuuki, he is very dangerous this season!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/kPLH0Vs7ldw" target="_blank">
                  <v-img src="juno3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Fuuki, The Power Destroyer....season 22 start!!</v-card-subtitle>
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
      title: "Fuuki(Wind Onimusha) - Monsters Report【Summoners War】",
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

