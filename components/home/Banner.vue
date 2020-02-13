<template>
  <v-card dark>
    <v-img
      class="grey lighten-2"
      height="160"
      width="100%"
      gradient="rgba(0, 0, 0, .52), rgba(0, 0, 0, .52)"
      :src="require('@/assets/news-3.jpg')"
    >
      <v-layout fill-height align-center pa-3>
        <v-flex xs12 md7 offset-md5>
          <h1 class="display-3 font-weight-light">Vue js api NEWS</h1>
          <div class="subheading pl-2 mb-4">
            https://github.com/AlekseyFedorov27
          </div>
          <v-btn color="primary" depressed>Subscribe</v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>
