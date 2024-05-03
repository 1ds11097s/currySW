<template>
<v-card
    color="grey lighten-4"
    flat
    tile
    class="header-fixed"
  >
    <template v-if="$vuetify.breakpoint.mdAndUp">
    <v-toolbar dense>
      <v-toolbar-title class="font-weight-bold">CurrySW RTA Room【Summoners War】</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="blue" class="text-center mx-4" href="/">
        <h3>TOP</h3>
      </v-btn>
      <v-btn text color="blue" class="text-center mx-4" href="/rtanonrta">
        <h3>RTA & Non-RTA Service Detail</h3>
      </v-btn>
      <v-btn text color="blue" class="text-center mx-4" href="/membership">
        <h3>MemberShip Detail</h3>
      </v-btn>
      <v-btn text color="blue" class="text-center mx-4" href="/monsters">
        <h3>Monsters</h3>
      </v-btn>
      <v-btn text color="blue" class="text-center mx-4" href="/articles">
        <h3>Articles</h3>
      </v-btn>
    </v-toolbar>
    </template>
    <template v-else>
    <v-toolbar dense>
      <v-toolbar-title class="font-weight-bold">CurrySW RTA Room【Summoners War】</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    </template>
</v-card>
</template>


 