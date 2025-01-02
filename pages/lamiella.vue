<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="lamiella.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Lamiella(Water Specter Princess)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SET</div>
            <span>VIO & WILL</span><br>
            <span>DESPAIR & WILL</span>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND RUNE SLOT</div>
            <span>2 - HP 4 - HP 6 - HP</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">RECOMMEND ARTIFACT OPTION</div>
            <span>Skill 3 Accuracy +x%</span><br>
            <span>Damage Received from Water -x%</span><br>
            <span>Damage Received from Wind -x%</span><br>
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="6">
                <v-card hover ripple style="height:100%" href="https://youtu.be/YuwGeAnfEfU" target="_blank">
                  <v-img src="lamiella1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">The Power Lamiella, She destroys everything, her skill2 is too dangerous😉😉😉</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>New characters, Specter Princess and Tomb Warden, have been introduced, and this time, I evaluated the performance of Specter Princess with her water attribute.<br> 
My focus was particularly on the mechanics of fixed damage and the Sacrifice system.<br>
Sacrifice accumulates every time an ally or enemy takes damage and deals damage based on a percentage of max HP depending on the accumulated amount.<br> 
However, the accumulation limit and speed are not clearly defined, making it necessary to analyze these aspects in actual usage.<br> 
It was confirmed that Sacrifice can accumulate quickly in situations where wide-range attacks are frequently used.<br>
Skill 3 stands out for its ability to apply provoke and branding up to three times, with a high activation rate.<br> 
This allows subsequent attackers to deal damage more effectively.<br> 
However, the skill’s relatively long cooldown and vulnerability to cooldown extension effects require attention.<br> 
To address these issues, I opted for a “Violent” rune build, enhancing durability while improving skill rotation efficiency.<br>
Additionally, She is believed to have excellent synergy with Belial.<br> 
Each time Belial is defeated, Sacrifice instantly reaches its maximum value, enabling consecutive skill activations.<br> 
Although we couldn’t test this combination during this evaluation, it is a point we aim to verify in future trials.<br>
In practical combat, I prioritized building defensive stats.<br> 
A rune configuration that increased HP ensured stable survivability while leveraging fixed damage.<br> 
This approach successfully eliminated key enemy characters efficiently.<br> 
By using provoke to restrict enemy actions and linking skills for high damage output, the strategy proved effective.<br> 
Since fixed damage is independent of critical hits, it offers high consistency and is particularly potent as it ignores the enemy’s defense and endurance.<br>
Countering control-type enemies and dealing with cooldown extension remain challenges, but apart from these, she demonstrates great versatility across various scenarios.<br> 
Moving forward, I aim to explore more practical strategies, including synergy with Belial.<br> 
This evaluation revealed a glimpse of her potential, and I plan to continue exploring her usage in diverse battle situations.</span>
              </v-col>
            </template>
            <template v-else>
            <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/YuwGeAnfEfU" target="_blank">
                  <v-img src="lamiella1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">The Power Lamiella, She destroys everything, her skill2 is too dangerous😉😉😉</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <span>New characters, Specter Princess and Tomb Warden, have been introduced, and this time, I evaluated the performance of Specter Princess with her water attribute.<br> 
My focus was particularly on the mechanics of fixed damage and the Sacrifice system.<br>
Sacrifice accumulates every time an ally or enemy takes damage and deals damage based on a percentage of max HP depending on the accumulated amount.<br> 
However, the accumulation limit and speed are not clearly defined, making it necessary to analyze these aspects in actual usage.<br> 
It was confirmed that Sacrifice can accumulate quickly in situations where wide-range attacks are frequently used.<br>
Skill 3 stands out for its ability to apply provoke and branding up to three times, with a high activation rate.<br> 
This allows subsequent attackers to deal damage more effectively.<br> 
However, the skill’s relatively long cooldown and vulnerability to cooldown extension effects require attention.<br> 
To address these issues, I opted for a “Violent” rune build, enhancing durability while improving skill rotation efficiency.<br>
Additionally, She is believed to have excellent synergy with Belial.<br> 
Each time Belial is defeated, Sacrifice instantly reaches its maximum value, enabling consecutive skill activations.<br> 
Although we couldn’t test this combination during this evaluation, it is a point we aim to verify in future trials.<br>
In practical combat, I prioritized building defensive stats.<br> 
A rune configuration that increased HP ensured stable survivability while leveraging fixed damage.<br> 
This approach successfully eliminated key enemy characters efficiently.<br> 
By using provoke to restrict enemy actions and linking skills for high damage output, the strategy proved effective.<br> 
Since fixed damage is independent of critical hits, it offers high consistency and is particularly potent as it ignores the enemy’s defense and endurance.<br>
Countering control-type enemies and dealing with cooldown extension remain challenges, but apart from these, she demonstrates great versatility across various scenarios.<br> 
Moving forward, I aim to explore more practical strategies, including synergy with Belial.<br> 
This evaluation revealed a glimpse of her potential, and I plan to continue exploring her usage in diverse battle situations.</span>
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
      title: "Lamiella(Water Specter Princess) - Monsters Report【Summoners War】",
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

