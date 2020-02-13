<template>
  <div id="business">
    <articles>
      <banner />
    </articles>
    <Popup />
  </div>
</template>

<script>
export default {
  name: 'Business',
  components: {
    Articles: () => import('@/components/home/Articles'),
    Banner: () => import('@/components/home/Banner'),
    Popup: () => import('@/components/home/Popup')
  },
  mounted() {
    this.$store.dispatch('fetchPosts', 'business')
  }
}
</script>
