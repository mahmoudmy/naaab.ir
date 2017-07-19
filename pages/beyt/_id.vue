<template>
  <div class="columns is-multiline abyat">
    <div class="column is-3"></div>
    <div class="column is-6 beyt">
      <div class="card is-fullwidth">
        <div class="card-content">
          <div class="mesra">{{ beyt.m1 }}</div>
          <div class="mesra">{{ beyt.m2 }}</div>
        </div>
        <div class="card-footer">
          <nuxt-link class="card-footer-item" :to="{ name: 'poet-name', params: { name: beyt.sh }}">{{ beyt.sh }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
        title: this.beyt.sh + ' -  ابیات ناب پارسی',
        meta: [
          { hid: 'description', name: 'description', content: this.beyt.m1 + ' / ' + this.beyt.m2 },
          { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
          { hid: 'og:title', name: 'og:title', content: this.beyt.sh + ' - ابیات ناب پارسی' },
          { hid: 'og:type', name: 'og:type', content: 'article' },
          { hid: 'og:url', name: 'og:url', content: 'http://naaab.ir' },
          { hid: 'og:description', name: 'og:description', content: this.beyt.m1 + ' / ' + this.beyt.m2 }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
