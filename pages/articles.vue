<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <div class="headline my-6" style="font-family: Anton!important;"><h1 class="h1-font-size">Articles</h1></div>
      <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-row justify="center" class="main-banner-area rounded-xl pa-4">
        <v-col cols="4">
          <v-card hover ripple style="height:100%" href="#1">
            <v-img src="article1.png" style="position:relative"></v-img>
            <v-card-subtitle class="font-weight-bold">Make turn2 work well, Introduction of methods</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card hover ripple style="height:100%" href="#2">
            <v-img src="article2.png" style="position:relative"></v-img>
            <v-card-subtitle class="font-weight-bold">What's important in RTA</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card hover ripple style="height:100%" href="#3">
            <v-img src="article3.png" style="position:relative"></v-img>
            <v-card-subtitle class="font-weight-bold">Recommendations for rta beginners</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <div id="1" class="headline font-weight-bold my-6" style="font-family: Anton!important;">Make turn2 work well, Introduction of methods</div>
      <v-row justify="center" class="main-banner-area rounded-xl subtitle-1 white--text pa-4 mb-4">
        <p>There are several important points to make turn2 work well<br><br>
About the monster<br>
There are several monsters that are important for turn2<br>
The essential monsters are leo, karnal, riley, belial, gapsoo<br>

Other important monsters are<br>
giou, minato, xing zhe, aaliyah, bolverk, feng yan, juno, mei hou wang, haegang, nana, woosa, veromos, lutia, mo long. josephine, abellio, verde<br>

The more important monsters you have, the easier it'll be for the turn2 team to work well<br><br>

About the runes<br>
Of course you need runes that are fast, but you don't have to use them for every monster.<br>
You need to use a lot of vio and desp runes, so farming with dragons and giants is necessary.<br>
To achieve higher ranks, you need to farm grind and gem with r5.<br><br>

About artifact<br>
Artifacts are important, but the quality of runes is more important.<br>
My artifact isn't that strong, but I'm still able to compete in the higher ranks.<br>
Each monster has its own options, but the priority is low.<br><br>

About speed<br>
The speed of the support monster needs to be fast.<br>
Other monsters' speed can be low, but their hp, def, res, etc. need to be high.<br>
For example, riley, aaliyah and other support monsters should be fast.<br>
Until around season 10, it was possible to win even if all monsters were slow, but in recent seasons, it's not possible to win.<br>
If the enemy team is the same turn2, it's possible to win, but if they are turn1 or CC team, speed is necessary.<br>
If you don't get your leo banned, it's not a problem, but basically turn1 and CC team players tend to ban more leo.<br>
So, to win in such a situation, you need a monster with high speed.</p>
      </v-row>
      <div id="2" class="headline font-weight-bold my-6" style="font-family: Anton!important;">What's important in RTA</div>
      <v-row justify="center" class="main-banner-area rounded-xl subtitle-1 white--text pa-4 mb-4">
      Here are three important things to remember about rta<br><br>
First<br>
Strengthen your mentality<br>
rune and monster are important, but the most important thing is mentality<br>
Being able to pick and bang calmly will raise your rank<br>
It's not easy to strengthen your mentality, but my recommendation is streaming<br>
Streaming and talking with your audience is much less stressful than playing alone<br><br>

Second<br>
Analyze your losses<br>
Analyze what went wrong so that the next time you play against a similar opponent, you'll lose in a different way than the last time, and you'll be fine<br>
It's important to try different things to find out what the answer is<br>
There are many similar enemies, so if you don't analyze, you'll end up losing the same way<br><br>

Third<br>
Find players who have the same picks as you and add them to your favorites<br>
You can learn a lot from other players about their picks, bans and drafts that you might not have thought of on your own<br>
It would be nice to be able to ask that player questions if possible<br>
Even if you are making similar picks, a slight difference in the order of your picks can change the outcome<br>
Even if you use the monster from the second pick in the last pick, the enemy's picks will change, and you can reach a higher rank by learning such a strategy<br>
      </v-row>
      <div id="3" class="headline font-weight-bold my-6" style="font-family: Anton!important;">Recommendations for rta beginners</div>
      <v-row justify="center" class="main-banner-area rounded-xl subtitle-1 white--text pa-4 mb-4">
      </v-row>
      </template>
      <template v-else>
        <v-row justify="center" class="main-banner-area rounded-xl pa-4 mt-4">
        <v-col cols="12">
          <v-card hover ripple style="height:100%" href="#1">
            <v-img src="article1.png" style="position:relative"></v-img>
            <v-card-subtitle class="font-weight-bold">Make turn2 work well, Introduction of methods</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card hover ripple style="height:100%" href="#2">
            <v-img src="article2.png" style="position:relative"></v-img>
            <v-card-subtitle class="font-weight-bold">What's important in RTA</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card hover ripple style="height:100%" href="#3">
            <v-img src="article3.png" style="position:relative"></v-img>
            <v-card-subtitle class="font-weight-bold">Recommendations for rta beginners</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <div id="1" class="headline font-weight-bold my-6" style="font-family: Anton!important;">Make turn2 work well, Introduction of methods</div>
      <v-row justify="center" class="main-banner-area rounded-xl subtitle-1 white--text pa-4 mb-4">
        <p>There are several important points to make turn2 work well<br><br>
About the monster<br>
There are several monsters that are important for turn2<br>
The essential monsters are leo, karnal, riley, belial, gapsoo<br>

Other important monsters are<br>
giou, minato, xing zhe, aaliyah, bolverk, feng yan, juno, mei hou wang, haegang, nana, woosa, veromos, lutia, mo long. josephine, abellio, verde<br>

The more important monsters you have, the easier it'll be for the turn2 team to work well<br><br>

About the runes<br>
Of course you need runes that are fast, but you don't have to use them for every monster.<br>
You need to use a lot of vio and desp runes, so farming with dragons and giants is necessary.<br>
To achieve higher ranks, you need to farm grind and gem with r5.<br><br>

About artifact<br>
Artifacts are important, but the quality of runes is more important.<br>
My artifact isn't that strong, but I'm still able to compete in the higher ranks.<br>
Each monster has its own options, but the priority is low.<br><br>

About speed<br>
The speed of the support monster needs to be fast.<br>
Other monsters' speed can be low, but their hp, def, res, etc. need to be high.<br>
For example, riley, aaliyah and other support monsters should be fast.<br>
Until around season 10, it was possible to win even if all monsters were slow, but in recent seasons, it's not possible to win.<br>
If the enemy team is the same turn2, it's possible to win, but if they are turn1 or CC team, speed is necessary.<br>
If you don't get your leo banned, it's not a problem, but basically turn1 and CC team players tend to ban more leo.<br>
So, to win in such a situation, you need a monster with high speed.</p>
      </v-row>
      <div id="2" class="headline font-weight-bold my-6" style="font-family: Anton!important;">What's important in RTA</div>
      <v-row justify="center" class="main-banner-area rounded-xl subtitle-1 white--text pa-4 mb-4">
      Here are three important things to remember about rta<br><br>
First<br>
Strengthen your mentality<br>
rune and monster are important, but the most important thing is mentality<br>
Being able to pick and bang calmly will raise your rank<br>
It's not easy to strengthen your mentality, but my recommendation is streaming<br>
Streaming and talking with your audience is much less stressful than playing alone<br><br>

Second<br>
Analyze your losses<br>
Analyze what went wrong so that the next time you play against a similar opponent, you'll lose in a different way than the last time, and you'll be fine<br>
It's important to try different things to find out what the answer is<br>
There are many similar enemies, so if you don't analyze, you'll end up losing the same way<br><br>

Third<br>
Find players who have the same picks as you and add them to your favorites<br>
You can learn a lot from other players about their picks, bans and drafts that you might not have thought of on your own<br>
It would be nice to be able to ask that player questions if possible<br>
Even if you are making similar picks, a slight difference in the order of your picks can change the outcome<br>
Even if you use the monster from the second pick in the last pick, the enemy's picks will change, and you can reach a higher rank by learning such a strategy<br>
      </v-row>
      <div id="3" class="headline font-weight-bold my-6" style="font-family: Anton!important;">Recommendations for rta beginners</div>
      <v-row justify="center" class="main-banner-area rounded-xl subtitle-1 white--text pa-4 mb-4">
      </v-row>
      </template>
      <template>
        <adsbygoogle ad-slot="9249275840" />
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
      title: "Articles - CurrySW RTA Room【Summoners War】",
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
