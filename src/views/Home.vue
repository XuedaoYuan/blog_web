<template>
    <div>
        <myarticle v-for="item in list" :item="item" v-if="item.isshow"></myarticle>
    
        <pagenation :start="start" :pages="pages" @handleStartChange="handleStartChange">
            
        </pagenation>
    </div>
</template>
<script>
import Myarticle from "../components/myarticle.vue"
import Pagenation from "../components/Pagenation.vue"
export default {

    name: 'Home',
    components: {
        Myarticle,
        Pagenation
    },
    data() {
        return {
            list: [],
            start: 1,
            pages: 1
        }
    },
    created() {
        this.queryBlogs();
    },
    methods: {
        queryBlogs() {
            this.$axios({
                url: "/blogs",
                method: "GET",
                params: {
                    start: this.start
                }
            }).then(res => {
                this.list = res.data.list;
                this.pages = res.data.pages;
            })
        },
        handleStartChange(val){
            this.start = val;
            this.queryBlogs();
        },
        
    }
}
</script>
<style lang="css" scoped>
</style>