<template>
  <div id="sports">
    <articles>
      <banner />
    </articles>
    <Popup />
  </div>
</template>

<script>
export default {
  name: 'Sports',
  components: {
    Articles: () => import('@/components/home/Articles'),
    Banner: () => import('@/components/home/Banner'),
    Popup: () => import('@/components/home/Popup')
  },
  mounted() {
    this.$store.dispatch('fetchPosts', 'sports')
  }
}
</script>
