<template>
  <section class="container">
    
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'poet-name',
  asyncData ({ params, error }) {
    return axios.get('/api/abyat?poet=' + params.name)
    .then((res) => {
      return { abyat: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'User not found' })
    })
  },
  head () {
    return {
      title: this.abyat[0].sh
    }
  }
}
</script>

<style scoped>

</style>
