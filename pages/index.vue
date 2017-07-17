<template>
  <section class="container">
    <ul class="abyat">
      <li v-for="(item, index) in abyat" class="beyt">
        <p>{{ item.m1}}</p>
        <p>{{ item.m2}}</p>
        <nuxt-link :to="{ name: 'beyt-id', params: { id: item.id }}">پیوند</nuxt-link>
        <nuxt-link :to="{ name: 'poet-name', params: { name: item.sh }}">{{ item.sh }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/abyat')
    return {
      abyat: data
    }
  },
  head () {
    return {
      title: 'ابیات ناب پارسی'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.abyat
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.beyt
{
  margin: 10px 0;
}
</style>
