<template>
  <v-row justify="center">
    <v-dialog v-if="openPost" v-model="dialog" persistent max-width="70%">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>

      <v-card max-width="100%" class="mx-auto">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle v-if="openPost.author"
              >Автор: {{ openPost.author }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-img :src="openPost.urlToImage" height="500"></v-img>
        <v-list-item-title class="ml-6 headline">{{
          openPost.title
        }}</v-list-item-title>
        <v-card-text
          class="m-4 subtitle-1"
          v-html="openPost.description"
        ></v-card-text>

        <v-card-actions>
          <a :href="openPost.url">
            <div class="my-2">
              <v-btn large color="primary ml-6">Подробнее...</v-btn>
            </div>
          </a>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" large text @click="closePost"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // dialog: true
    }
  },
  computed: {
    ...mapGetters(['openPost']),
    dialog() {
      return !!this.openPost
    }
  },
  methods: {
    closePost() {
      this.$store.dispatch('closePost')
    }
  }
}
</script>
<style lang="scss" scoped>
.headline {
  white-space: pre-wrap;
}
.v-list-item__title,
.v-list-item__subtitle {
  white-space: pre-wrap;
}
</style>
