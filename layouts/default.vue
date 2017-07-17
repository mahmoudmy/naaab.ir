<template>
  <div>
    <my-navbar/>
    <section class="section">
      <div class="container">
        <nuxt/>
      </div>
    </section>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyNavbar from '~components/Navbar.vue'

export default {
  components: {
    MyFooter,
    MyNavbar
  }
}
</script>

<style>

</style>
