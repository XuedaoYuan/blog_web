<template>
    <div>
        <myarticle v-for="item in list" :item="item" v-if="item.isshow"></myarticle>
    </div>
</template>
<script>
import Myarticle from "../components/myarticle.vue"
export default {

    name: 'Home',
    components: {
        Myarticle
    },
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.queryBlogs();
    },
    methods: {
        queryBlogs() {
            this.$axios({
                url: "/blogs",
                method: "GET"
            }).then(res => {
                this.list = res.data.list;
            })
        },
    }
}
</script>
<style lang="css" scoped>
</style>