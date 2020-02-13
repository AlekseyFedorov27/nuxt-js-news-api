export const state = () => ({
  articles: [],
  drawer: false,
  openPost: null
})

export const mutations = {
  setPosts(state, payload) {
    state.articles = payload
  },
  setOpenPost(state, post) {
    state.openPost = post
  },
  setClosePost(state) {
    state.openPost = null
  },
  setSearch(state, payload) {
    state.articles = payload
  }
}

export const actions = {
  async fetchPosts({ commit }, category = '') {
    const posts = await this.$axios.$get(
      `https://newsapi.org/v2/top-headlines?country=ru&category=${category}&apiKey=${process.env.apiKey}`
    )
    // console.log(posts)
    commit('setPosts', posts.articles)
  },
  async fetchSearch({ commit }, seach = '') {
    const posts = await this.$axios.$get(
      `https://newsapi.org/v2/everything?q=${seach}&from=&sortBy=popularity&apiKey=${process.env.apiKey}`
    )
    // console.log(posts)
    commit('setSearch', posts.articles)
  },
  openPost({ commit }, post) {
    commit('setOpenPost', post)
  },
  closePost({ commit }) {
    commit('setClosePost')
  }
}

export const getters = {
  links: (state) => {
    return state.articles
  },
  openPost: (state) => {
    return state.openPost
  }
}
