<template>
  <section class="container">
    <p>{{ beyt.m1 }}</p>
    <p>{{ beyt.m2 }}</p>
    <nuxt-link class="button" :to="{ name: 'poet-name', params: { name: beyt.sh }}">
      {{beyt.sh}}
    </nuxt-link>
  </section>
</template>

<script>
  import axios from '~plugins/axios'

  export default {
    name: 'beyt-id',
    asyncData ({ params, error }) {
      return axios.get('/api/abyat/' + params.id)
        .then((res) => {
          return {
            beyt: res.data
          }
        })
        .catch((e) => {
          error({
            statusCode: 404,
            message: 'صفحه مورد نظر وجود ندارد!'
          })
        })
    },
    head () {
      return {
        title: this.beyt.sh
      }
    }
  }
</script>

<style scoped>

</style>
