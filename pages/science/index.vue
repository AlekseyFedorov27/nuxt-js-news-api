<template>
  <div id="science">
    <articles>
      <banner />
    </articles>
    <Popup />
  </div>
</template>

<script>
export default {
  name: 'Science',
  components: {
    Articles: () => import('@/components/home/Articles'),
    Banner: () => import('@/components/home/Banner'),
    Popup: () => import('@/components/home/Popup')
  },
  mounted() {
    this.$store.dispatch('fetchPosts', 'science')
  }
}
</script>
