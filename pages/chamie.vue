<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="chamie.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Chamie(Light Nine-tailed Fox)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - HP 6 - HP</span><br>
            <span>2 - HP 4 - CRDMG 6 - ATK</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Skill 2 CRIT DMG +x%</span><br>
            <span>Skill 1 CRIT DMG +x%</span><br>
            <span>Skill 1 Accuracy +x%</span><br>
            <span>Skill 2 Accuracy +x%</span><br>
            <span>Damage Received from Fire -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
            <span>Damage Received from Water -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="6">
                <v-card hover ripple style="height:100%" href="https://youtu.be/Q5C_1VC88rs" target="_blank">
                  <v-img src="chamie1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">Full Power ATK 4000 over, Crazy DMG Dealer Chamie🤪🤪🤪</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>This time, I’ll introduce a playstyle focused on maximizing Chamie’s offensive capabilities.<br>
While Chamie is not commonly used in RTA, her skill set is highly versatile and holds great potential when utilized effectively. <br>
A particular highlight is her skill, "Rebirth" This skill removes all debuffs on herself, fully restores her HP, and increases both her attack power and defense by 50%.<br> 
Thanks to this powerful effect, Chamie can work as a durable tank in the early stages of battle while transitioning into a high-damage dealer in the latter stages, offering a flexible strategy.<br>
Chamie’s Skill 1 applies branding and healing block effects on the target, making it highly effective against monsters reliant on healing.<br> 
Furthermore, her Skill 2 not only steals enemy buffs but also applies irresistible debuffs, allowing her to leverage a wide variety of debuffs to turn the tide of battle in your favor.<br>
For this build, I focused on maximizing attack power while maintaining a certain level of durability.<br> 
Additionally, by utilizing artifacts to further enhance attack power and capitalize on bonus damage from skills, I designed Chamie to consistently deal approximately 4,000 damage per attack.<br> 
This setup enables her to inflict significant pressure on enemy monsters.<br>
In actual combat, there were many instances where Chamie became the primary target and faced concentrated attacks.<br> 
However, by properly utilizing "Rebirth," she could fully recover and execute counterattacks effectively.<br> 
Additionally, by employing branding and healing block effects, she was able to neutralize enemy recovery capabilities while dealing sustained damage.<br> 
This strategy is particularly effective against tank-type monsters, allowing her to maintain stable damage output even in prolonged battles.<br>
In conclusion, Chamie’s offense-focused build combines high attack performance with versatile debuff skills, enabling her to deal substantial damage to opponents.<br> 
However, proper adjustment of her durability is equally critical, as balancing offense and defense is the key to success.<br> 
By using this method of utilizing Chamie, you can expand your strategic options and achieve greater versatility in battles.</span>
              </v-col>
            </template>
            <template v-else>
            <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/Q5C_1VC88rs" target="_blank">
                  <v-img src="xingzhe1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">Full Power ATK 4000 over, Crazy DMG Dealer Chamie🤪🤪🤪</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>This time, I’ll introduce a playstyle focused on maximizing Chamie’s offensive capabilities.<br>
While Chamie is not commonly used in RTA, her skill set is highly versatile and holds great potential when utilized effectively. <br>
A particular highlight is her skill, "Rebirth" This skill removes all debuffs on herself, fully restores her HP, and increases both her attack power and defense by 50%.<br> 
Thanks to this powerful effect, Chamie can work as a durable tank in the early stages of battle while transitioning into a high-damage dealer in the latter stages, offering a flexible strategy.<br>
Chamie’s Skill 1 applies branding and healing block effects on the target, making it highly effective against monsters reliant on healing.<br> 
Furthermore, her Skill 2 not only steals enemy buffs but also applies irresistible debuffs, allowing her to leverage a wide variety of debuffs to turn the tide of battle in your favor.<br>
For this build, I focused on maximizing attack power while maintaining a certain level of durability.<br> 
Additionally, by utilizing artifacts to further enhance attack power and capitalize on bonus damage from skills, I designed Chamie to consistently deal approximately 4,000 damage per attack.<br> 
This setup enables her to inflict significant pressure on enemy monsters.<br>
In actual combat, there were many instances where Chamie became the primary target and faced concentrated attacks.<br> 
However, by properly utilizing "Rebirth," she could fully recover and execute counterattacks effectively.<br> 
Additionally, by employing branding and healing block effects, she was able to neutralize enemy recovery capabilities while dealing sustained damage.<br> 
This strategy is particularly effective against tank-type monsters, allowing her to maintain stable damage output even in prolonged battles.<br>
In conclusion, Chamie’s offense-focused build combines high attack performance with versatile debuff skills, enabling her to deal substantial damage to opponents.<br> 
However, proper adjustment of her durability is equally critical, as balancing offense and defense is the key to success.<br> 
By using this method of utilizing Chamie, you can expand your strategic options and achieve greater versatility in battles.</span>
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
      title: "Chamie(Light Nine-tailed Fox) - Monsters Report【Summoners War】",
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

