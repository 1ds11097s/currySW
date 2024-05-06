<template>
  <v-row justify="center" class="main-area rounded-xl py-10">
    <v-col cols="11" class="rounded-xl">
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;"><h1 class="h1-font-size">Introduction Video</h1></div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
          <v-card height=400 class="black darken-4">
            <iframe
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/g6-XS_a_bGM?si=ZsW6WuHOroicI9s5"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" class="rounded-xl">
      <div class="headline font-weight-bold my-6" style="font-family: Anton!important;"><h1 class="h1-font-size">MemberShip Detail</h1><v-btn text color="blue" class="font-weight-bold" href="https://discord.gg/daAeAZnwcH" target="_blank"> More Detail → Discord</v-btn></div>
      <v-row justify="center" class="main-banner-area rounded-xl pa-4 mb-4">
        <v-col cols="12" style="color:white">
        <table class="table01">
    <thead>
      <tr>
        <th>RANK</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Normal Curry</th>
        <td label="Description">
          <p>I'll post one or two exclusive video per week.<br>
The type of videos I post can vary
Currently I'm posting the following videos<br>
・Pick & Ban strategy<br>
・Monster build recommendations that I often use<br>
・Replay videos of my favorite monsters</p>
        </td>
        <td label="Price"><p>3.99 USD / month</p></td>
      </tr>
      <tr>
        <th>Spicy Curry</th>
        <td label="Description"><p>Account Review<br>
You can change what you review on a monthly basis<br>
The first month I'll check your monsters and runes and share your improvements<br>
The next month I'll either review your RTA or share your improvements as I did the first month.<br>
You can choose either one<br>
In some cases I may rerune some monsters or I may play rta</p></td>
        <td label="Price"><p>5.99 USD / month</p></td>
      </tr>
      <tr>
        <th>Super Spicy Curry</th>
        <td label="Description"><p>About 10wing I use.<br>
you know what kind of monster teams you should use<br>
You'll learn how to pick&ban</p></td>
        <td label="Price"><p>14.99 USD / month</p></td>
      </tr>
    </tbody>
    <tr></tr>
  </table>
        </v-col>
      </v-row>
      <template>
        <adsbygoogle ad-slot="9249275840" />
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: "MemberShip Detail - CurrySW RTA Room【Summoners War】",
    }
  },
}
</script>
