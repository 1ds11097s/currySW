<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="leo.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Leo(Wind Dragon Knight)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
        <div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About rune</div>
I think the most famous ones are vio and vamp, but I recommend desp and rev.
If you use vio, I recommend him with turn1 team
If you use vamp, I recommend him with turn2 team
desp and his passive are very good together
For example, if there is an enemy monster who has no will set, you can get a big advantage if you can stun it first.
Especially against cc team, if you can do it, the enemy may surrender.
Vamp can work well later in the game, but I think desp is more advantageous.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About artifact</div>
I recommend hp as the main option.
For the left sub-option, I recommend DMG taken from fire.
For the sub option on the right, I recommend increasing the crdmg of skill1 and skill2.
DMG taken from fire is necessary because you are often targeted by kassandra, verde, masha, etc.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about the priority status</div>
Prioritize statuses in order of res, hp, def, cri rate, crdmg, atk, acc

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About hp</div>
I think you should aim for +25k in the end.
(It depends on the rank range you are aiming for, but +20k or more is necessary.
Especially, you need more hp to avoid being defeated by kassandra's attack.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About def</div>
There is no specific value to aim for, but +700 or more is necessary.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about atk</div>
Aim for +500 or so, although this is not a priority.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about speed</div>
Not necessary.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About res</div>
max is recommended

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About acc</div>
Low priority, but 10% is necessary

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">usage</div>
If the enemy uses cc team, miles, beast rider, chimera, etc., always pick him.
Basically, my team's monsters are slow, so I always pick him against enemies who are likely to have a big speed difference.
I often use it with riley
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
  computed: {
    currentPageForCanonical() {
      return this.$route.path.slice(1)
    }
  },
  head() {
    return {
      title: "Leo(Wind Dragon Knight) - Monsters Report【Summoners War】",
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

