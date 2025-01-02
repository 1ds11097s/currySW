<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="mork.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Mork(Water Tomb Warden)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - HP 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="6">
                <v-card hover ripple style="height:100%" href="https://youtu.be/GsdTudt9dXY" target="_blank">
                  <v-img src="mork1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">The Power of Mork, He is God Tank and can put up shields that are too hard😐😐😐</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>This video introduces how to use the new character, Water Tomb Warden.<br> 
This character is primarily designed with a defensive skill set, focusing on gradually whittling down the opponent rather than launching quick attacks.<br> 
It is emphasized that awakening this character increases resistance, making it easier to manage with a focus on durability.<br>
In terms of stats, the character has 36,000 HP, 780 defense, 100 speed, 99 resistance, and 35 accuracy, ensuring high defensive capabilities and durability.<br> 
As for the skills, Skill 1 is not particularly strong, but Skill 2 offers two attacks with a vertical split effect and a new debuff that prevents revival.<br> 
This debuff can prevent characters like Vanessa and Nana from reviving, making it potentially powerful if used correctly.<br>
Skill 3 grants two turns of immunity to all allies and creates a shield equal to 20% of the maximum HP.<br> 
The shield is extremely sturdy, so if the character has 47,000 to 50,000 HP, the shield would be around 10,000, and it also increases attack power, making it an excellent support in battle.<br> 
For its use, the character is mainly equipped with defensive runes, and artifacts that enhance damage reduction and effectiveness.<br>
In actual combat, the strategy involves enduring enemy attacks while gradually chipping away at their HP and using the revival-blocking debuff to limit the opponent's actions. However, there are few opportunities to successfully apply the revival-blocking debuff, so timing is important.<br> 
The character's ability to use shields and immunity while supporting durability highlights the effectiveness of a strategy that allows other monsters to withstand attacks while slowly depleting the opponent's health.<br>
However, this character can struggle in long battles, so combining with healing characters or utilizing durability strategies like Will Runes is necessary.<br> 
Additionally, the revival-blocking debuff is not always easy to use effectively, and it is only useful against certain opponents, which means the character is not considered universally powerful.<br>
In conclusion, the character’s strength lies in its solid defense, offering immunity and shields.<br> 
While its skills to increase attack and durability are appreciated, the character ultimately relies on specific tactics.<br> 
Therefore, its priority for leveling up is relatively low, especially for players who already possess strong characters.<br> 
However, it can be useful in certain situations, so it is worth using depending on the context.</span>
              </v-col>
            </template>
            <template v-else>
            <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/GsdTudt9dXY" target="_blank">
                  <v-img src="mork1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">The Power of Mork, He is God Tank and can put up shields that are too hard😐😐😐</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>This video introduces how to use the new character, Water Tomb Warden.<br> 
This character is primarily designed with a defensive skill set, focusing on gradually whittling down the opponent rather than launching quick attacks.<br> 
It is emphasized that awakening this character increases resistance, making it easier to manage with a focus on durability.<br>
In terms of stats, the character has 36,000 HP, 780 defense, 100 speed, 99 resistance, and 35 accuracy, ensuring high defensive capabilities and durability.<br> 
As for the skills, Skill 1 is not particularly strong, but Skill 2 offers two attacks with a vertical split effect and a new debuff that prevents revival.<br> 
This debuff can prevent characters like Vanessa and Nana from reviving, making it potentially powerful if used correctly.<br>
Skill 3 grants two turns of immunity to all allies and creates a shield equal to 20% of the maximum HP.<br> 
The shield is extremely sturdy, so if the character has 47,000 to 50,000 HP, the shield would be around 10,000, and it also increases attack power, making it an excellent support in battle.<br> 
For its use, the character is mainly equipped with defensive runes, and artifacts that enhance damage reduction and effectiveness.<br>
In actual combat, the strategy involves enduring enemy attacks while gradually chipping away at their HP and using the revival-blocking debuff to limit the opponent's actions. However, there are few opportunities to successfully apply the revival-blocking debuff, so timing is important.<br> 
The character's ability to use shields and immunity while supporting durability highlights the effectiveness of a strategy that allows other monsters to withstand attacks while slowly depleting the opponent's health.<br>
However, this character can struggle in long battles, so combining with healing characters or utilizing durability strategies like Will Runes is necessary.<br> 
Additionally, the revival-blocking debuff is not always easy to use effectively, and it is only useful against certain opponents, which means the character is not considered universally powerful.<br>
In conclusion, the character’s strength lies in its solid defense, offering immunity and shields.<br> 
While its skills to increase attack and durability are appreciated, the character ultimately relies on specific tactics.<br> 
Therefore, its priority for leveling up is relatively low, especially for players who already possess strong characters.<br> 
However, it can be useful in certain situations, so it is worth using depending on the context.</span>
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
      title: "Mork(Water Tomb Warden) - Monsters Report【Summoners War】",
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

