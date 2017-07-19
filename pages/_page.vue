<template>
  <div class="columns is-multiline abyat">
    <div class="column is-6 beyt" v-for="item in abyat">
      <div class="card is-fullwidth">
        <div class="card-content">
          <div class="mesra">{{ item.m1 }}</div>
          <div class="mesra">{{ item.m2 }}</div>
        </div>
        <div class="card-footer">
          <nuxt-link class="card-footer-item" :to="{ name: 'poet-name', params: { name: item.sh }}">{{ item.sh }}</nuxt-link>
          <nuxt-link class="card-footer-item" :to="{ name: 'beyt-id', params: { id: item.id }}">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15" />
            </svg>
           </nuxt-link>
        </div>
      </div>
    </div>
		
		<div class="column is-12 has-text-centered">
    	<nuxt-link class="button" :to="{ name: 'page', params: { page: page + 1 }}">بیشتر</nuxt-link>
  	</div>
  </div>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'page',
  asyncData ({ params, error }) {
    return axios.get('/api/abyat/page/' + parseInt(params.page))
    .then((res) => {
      return {
        abyat: res.data, page: parseInt(params.page)
      }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'User not found' })
    })
  }
}
</script>

<style>
/* .abyat {
		min-height: calc(100vh - 100px);
		-webkit-align-items: center;
   align-items: center;
   -webkit-justify-content: center;
   justify-content: center;
	} */
	
</style>
