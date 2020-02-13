<template>
  <v-flex xs12 :class="classes">
    <v-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      href="#!"
      @click="openPost(value)"
    >
      <v-img
        v-if="value.urlToImage"
        :src="value.urlToImage"
        height="100%"
        gradient="rgba(0, 0, 0, .52), rgba(0, 0, 0, .12)"
      >
        <v-layout v-if="!value.prominent" fill-height wrap text-xs-right ma-0>
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop
              >{{ value.source.name }}</v-chip
            >
            <h3 class="title mb-2">{{ value.title }}</h3>
            <div v-if="value.author" class="caption">
              Автор: {{ value.author }}
              <br />
              Date {{ value.publishedAt }}
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop
              >Read More</v-chip
            >
          </v-flex>
        </v-layout>
      </v-img>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    classes() {
      return {
        md6: this.size === 2,
        md4: this.size === 3
      }
    }
  },
  methods: {
    openPost(post) {
      // console.log(post)
      this.$store.dispatch('openPost', post)
    }
  }
}
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
