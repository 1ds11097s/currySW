<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="gronn.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Gronn(Wind Tomb Warden)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & REV</span><br>
            <span>VIO & WILL</span><br>
            <span>DESP & WILL</span><br>
            <span>DESP & REV</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - CRI RATE 6 - HP</span><br>
            <span>2 - HP 4 - CRDMG 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>CRIT DMG+ up to x% as the enemy's HP condition is good</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="6">
                <v-card hover ripple style="height:100%" href="https://youtu.be/u0jSEjMwj1I" target="_blank">
                  <v-img src="gronn1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">The Power of Gronn, Don't touch him, or you'll get an automatic counter😝😝😝</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>The topic for discussion this time is the analysis of the new character Wind Tomb Warden, focusing on its usage and performance in RTA.<br> 
This character is notable for its counterattack ability granted by the passive skill Eternal Revenge.<br> 
Specifically, it has a 50% chance to counterattack when attacked, and it does not suffer from misses against AoE attacks.<br> 
This high probability of 50% is comparable to that of other characters like Laika, making it highly valued for its consistent counterattacks whenever struck.<br>
In practical matches, the mainstream strategy involves equipping Despair runes to maximize its counterattack potential and leverage the stun effect.<br> 
For instance, when attacked by enemies, it can continuously activate provoke or stuns, significantly restricting the opponent's actions.<br> 
The appeal of this character lies in its ability to aim for stuns even during counterattacks when equipped with Despair runes.<br> 
Regarding stat builds, a tanky setup focused on HP is recommended.<br> 
Specifically, it’s suggested to aim for +36,000 HP, +760 Defense, and +103 Speed while enhancing survivability with Artifacts that provide damage reduction or increased accuracy.<br>
In battles, the common playstyle revolves around absorbing enemy attacks and gradually wearing them down through counterattacks.<br> 
Particularly noteworthy is its ability to utilize provoke to limit enemy skill usage while incorporating stuns or defense breaks through counterattacks to gain an advantage in the match.<br> 
However, this character lacks healing skills, which raises concerns about its durability in prolonged battles.<br> 
Therefore, pairing it with healers or employing Will runes as a safeguard may be necessary.<br> 
Additionally, in situations where the passive skill is ineffective, using Revenge runes to ensure stable damage output becomes another viable strategy.<br>
When compared to the Fire and Water Tomb Wardens, Gronn is somewhat limited in the usability of its passive skill.<br> 
The Fire attribute offers high utility with its supportive abilities and AoE defense breaks, while the Water attribute significantly shifts the battlefield dynamics with the resurrection ability of its third skill.<br> 
Consequently, the overall evaluation of Gronn tends to be lower in comparison.<br> 
That said, Gronn can still perform impressively when its stun-spreading strategy with Despair runes is effectively implemented.<br>
In conclusion, this character holds latent potential to excel as a supportive role depending on the situation.<br> 
However, in terms of development priority, it may be relegated to a lower rank if there are other more powerful characters available.<br> 
Specifically, it shines as a "stun machine" leveraging Despair runes or as a stable damage dealer through provokes and counterattacks, making it suitable for specific tactical roles.</span>
              </v-col>
            </template>
            <template v-else>
            <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/u0jSEjMwj1I" target="_blank">
                  <v-img src="gronn1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">The Power of Gronn, Don't touch him, or you'll get an automatic counter😝😝😝</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>The topic for discussion this time is the analysis of the new character Wind Tomb Warden, focusing on its usage and performance in RTA.<br> 
This character is notable for its counterattack ability granted by the passive skill Eternal Revenge.<br> 
Specifically, it has a 50% chance to counterattack when attacked, and it does not suffer from misses against AoE attacks.<br> 
This high probability of 50% is comparable to that of other characters like Laika, making it highly valued for its consistent counterattacks whenever struck.<br>
In practical matches, the mainstream strategy involves equipping Despair runes to maximize its counterattack potential and leverage the stun effect.<br> 
For instance, when attacked by enemies, it can continuously activate provoke or stuns, significantly restricting the opponent's actions.<br> 
The appeal of this character lies in its ability to aim for stuns even during counterattacks when equipped with Despair runes.<br> 
Regarding stat builds, a tanky setup focused on HP is recommended.<br> 
Specifically, it’s suggested to aim for +36,000 HP, +760 Defense, and +103 Speed while enhancing survivability with Artifacts that provide damage reduction or increased accuracy.<br>
In battles, the common playstyle revolves around absorbing enemy attacks and gradually wearing them down through counterattacks.<br> 
Particularly noteworthy is its ability to utilize provoke to limit enemy skill usage while incorporating stuns or defense breaks through counterattacks to gain an advantage in the match.<br> 
However, this character lacks healing skills, which raises concerns about its durability in prolonged battles.<br> 
Therefore, pairing it with healers or employing Will runes as a safeguard may be necessary.<br> 
Additionally, in situations where the passive skill is ineffective, using Revenge runes to ensure stable damage output becomes another viable strategy.<br>
When compared to the Fire and Water Tomb Wardens, Gronn is somewhat limited in the usability of its passive skill.<br> 
The Fire attribute offers high utility with its supportive abilities and AoE defense breaks, while the Water attribute significantly shifts the battlefield dynamics with the resurrection ability of its third skill.<br> 
Consequently, the overall evaluation of Gronn tends to be lower in comparison.<br> 
That said, Gronn can still perform impressively when its stun-spreading strategy with Despair runes is effectively implemented.<br>
In conclusion, this character holds latent potential to excel as a supportive role depending on the situation.<br> 
However, in terms of development priority, it may be relegated to a lower rank if there are other more powerful characters available.<br> 
Specifically, it shines as a "stun machine" leveraging Despair runes or as a stable damage dealer through provokes and counterattacks, making it suitable for specific tactical roles.</span>
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
      title: "Gronn(Wind Tomb Warden) - Monsters Report【Summoners War】",
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

