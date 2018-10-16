<template>
	<div>
		<my-article :item="article"></my-article>
	</div>
</template>

<script>
import MyArticle from "../components/myarticle.vue"
export default {

  name: 'Article',

  data () {
    return {
    	article: {}
    }
  },
  components: {
  	MyArticle
  },
  created(){
  	const id = this.$route.query.id;
  	let vm = this;
  	vm.$axios({
  		url: "/blogs/id",
  		method: 'GET',
  		params: {
  			id
  		}
  	}).then(res => {
  		vm.article = res.data;
  	})
  }
}
</script>

<style lang="css" scoped>
</style>