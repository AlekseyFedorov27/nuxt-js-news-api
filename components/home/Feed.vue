<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>
      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <button
          v-if="page !== 1"
          class="ml-0"
          title="Previous page"
          square
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </button>
      </v-flex>

      <v-flex xs6 text-xs-center subheading
        >PAGE {{ page }} OF {{ pages }}</v-flex
      >

      <v-flex xs3 text-xs-right>
        <button
          v-if="pages > 1 && page < pages"
          class="mr-0"
          title="Next page"
          square
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Utilities
import { mapState } from 'vuex'
export default {
  name: 'Feed',
  components: {
    FeedCard: () => import('./FeedCard')
  },
  data: () => ({
    layout: [2, 2, 1, 2, 2, 3, 3, 3, 2, 2],
    page: 1
  }),
  computed: {
    ...mapState(['articles']),
    pages() {
      return Math.ceil(this.articles.length / 10)
    },
    paginatedArticles() {
      const start = (this.page - 1) * 10
      const stop = this.page * 10
      return this.articles.slice(start, stop)
    }
  },
  watch: {
    page() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
