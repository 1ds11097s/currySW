<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="molong.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Mo Long(Water Panda Warrior)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">regarding runes</div>
I'd recommend vamp,will or vio,will.
For slots 2,4,6 I'd recommend spd, hp, hp or hp, hp, hp
I've seen more and more players using vio recently due to buffs, so you can build whichever you prefer.
I recommend vamp.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">regarding artifacts</div>
use hp as your main option

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">regarding left option</div>
I'd recommend water or fire or wind dmg dealt
I'm using water now, but you can decide what's best for you depending on what kind of enemy you're going to use him against.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">regarding right option</div>
increase acc of skill1 is recommended.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">Priority of statuses</div>
Prioritize the statuses in the following order:
res, hp, def, speed, acc, atk, cri rate, crdmg(for a style like mine)
or
hp, speed , def, res, acc, atk, cri rate, crdmg

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for res</div>
Aim for max

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for def</div>
Aim for +600-700

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for hp</div>
Aim for +30000
Aim for +35,000 in the end.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for speed</div>
It's up to your team to decide his speed.
If the speed difference is too large, the enemy monster may move before he can use his skill.
For example, if you use him with bolverk, he should move after him and the speed difference should not be more than 5
If you use with attacker, he should move first and attacker should move after def break

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for acc</div>
It's not a high priority, but it's very important.
Aim for about 20-30
A total of about 40 with artifact is good.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for atk</div>
not needed

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for cri rate</div>
not needed

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">for crdmg</div>
not needed

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">Usage</div>
Some players use him as a first pick, but I would recommend using him as a last pick as he'll be at a great disadvantage against cc teams.
If you have a monster like ragdoll, tian lang, you can first pick him.
I think there are many situations where you can use him in case of damage battles
You need to support him so that he won't be defeated immediately after he uses skill3.
It would be good to use him with riley or gapsoo for example.
Also, if his res is maxed out, he'll be less likely to be knocked down.
          
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
      title: "Mo Long(Water Panda Warrior) - Monsters Report【Summoners War】",
    }
  },
}
</script>

