<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-text-field v-model="search" @keyup.enter="searchInfo"></v-text-field>
      <v-btn small color="ml-4 primary" @click="searchInfo">Искать</v-btn>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'бизнес',
          to: '/business'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'развлечения',
          to: '/entertainment'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'общее',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'здоровье',
          to: '/health'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'наука',
          to: '/science'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'спорт',
          to: '/sports'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'технологии',
          to: '/technology'
        }
      ],
      search: '',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Новости'
    }
  },
  methods: {
    searchInfo() {
      this.$store.dispatch('fetchSearch', this.search)
    }
  }
}
</script>
