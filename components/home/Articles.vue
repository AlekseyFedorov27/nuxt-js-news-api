<template>
  <section id="feed">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
export default {
  components: {
    Feed: () => import('./Feed')
  }
}
</script>
