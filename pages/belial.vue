<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <v-img src="belial.png" style="position:relative" width="100" height="100"></v-img>
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">Belial(Water Demon)</div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
        <div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">About the runes.</div>
I recommend vio, will.
atk,atk, crdmg is fine
Using nem could be interesting.
His cri rate needs to be maxed out, so if you build with viowill, you can use blade if that is difficult

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about artifacts</div>
I recommend to use CD+ as more enemy HP, ATK+prop lost HP, or any other option that increases damage.
The options on the right should be options that enhance crdmg as well.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about priority status</div>
Prioritize statuses in order of atk, crdmg, cri rate, speed, res, hp, def, acc

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about atk</div>
Aim for +2k in the end
Anyway, the higher the atk, the better

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about crdmg</div>
Same as atk, the higher the better
Aim for 200%.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about cri rate</div>
Third priority, but always set it to 100%.
If you make a mistake at a critical moment, you are more likely to lose.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">about speed</div>
Actually, speed is also very important.
I have seen many players' speed in belial, and many of them are slow in his speed.
If you can give a def break to the enemy before he moves, you can easily defeat him with his skill2.
But if his speed is too slow, the enemy monster is likely to move first, so the def break will be removed.
For example, I adjust the speed difference between feng yan, mo long and belial so that there is not much difference between them.

<div class="headline font-weight-bold my-6 text-uppercase" style="font-family: Anton!important;">Usage</div>
I think he can be used anywhere except cc team
If the enemy is a cc team, you need to use other monsters.
You need to counter and stop the enemy, which he can't do
It's effective against top tier monsters like vanessa, camilla, miles, etc.
To use him, you need to have other monsters with high durability.
If no other monsters are killed, he can revive and use his skill2 as many times as he wants.
Otherwise, it's not recommended to use him for your team
          <div class="headline font-weight-bold my-6" style="font-family: Anton!important;">VIDEOS</div>
          <v-row justify="center" class="main-banner-area rounded-xl pa-4">
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/qRZ0sOqywBo" target="_blank">
                  <v-img src="belial1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Belial, king of power CRI DMG 217%!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/_VAjEZbXGQI" target="_blank">
                  <v-img src="belial2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The power ULTIMATE Belial,  with him, I can defeat any enemy!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card hover ripple style="height:100%" href="https://youtu.be/qGLrnd_jz-U" target="_blank">
                  <v-img src="belial3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】God Counter Nemesis Belial, he is dangerous, but Nemesis one is more...</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/qRZ0sOqywBo" target="_blank">
                  <v-img src="belial1.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The Power Belial, king of power CRI DMG 217%!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/_VAjEZbXGQI" target="_blank">
                  <v-img src="belial2.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】The power ULTIMATE Belial,  with him, I can defeat any enemy!!</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card hover ripple style="height:100%" href="https://youtu.be/qGLrnd_jz-U" target="_blank">
                  <v-img src="belial3.png" style="position:relative"></v-img>
                  <v-card-subtitle class="font-weight-bold">【Summoners War | Curry's RTA】God Counter Nemesis Belial, he is dangerous, but Nemesis one is more...</v-card-subtitle>
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
      title: "Belial(Water Demon) - Monsters Report【Summoners War】",
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

