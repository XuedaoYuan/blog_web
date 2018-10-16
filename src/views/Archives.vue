<template>
    <div>
        <h1 class="head-title">Archives</h1>
        <div v-for="item in list" class="archive-item">
            <p class="time"><span>#{{item.createtime | parseDate('YYYY-MM-DD')}}</span></p>
            <h1 class="title"><span @click="readArticleById(item.id)">{{item.title}}</span></h1>
        </div>
        <div class="page-info">
            <span class="prev" @click="handlePrev">PREV</span>
            <span class="next" @click="hanldeNext">NEXT</span>
        </div>
    </div>
</template>
<script>
export default {

    name: 'Archives',

    data() {
        return {
            list: [],

            start: 1,

        }
    },
    created() {
        this.queryTitles();
    },
    methods: {
        queryTitles() {
            let vm = this;
            vm.$axios({
                url: "/blogs/title",
                method: "GET",
                params: {

                }
            }).then(res => {
                console.log(res);
                this.list = res.data.list;
            })
        },
        readArticleById(id) {
            console.log(id);
            this.$router.push({
                path: "/article",
                query: {
                    id
                }
            })
        },
        handlePrev() {},
        hanldeNext() {}

    }
}
</script>
<style lang="scss" scoped>
.head-title {
    text-align: center;
}

.archive-item {
    margin-bottom: 30px;

    .time {
        color: #9e9e9e;
        font-style: italic;
        font-size: 18px;

        span {
            cursor: pointer;

            &:hover {
                color: #F03838;
            }
        }
    }

    .title {
        margin: 5px 0;

        span {
            cursor: pointer;

            &:hover {
                border-bottom: 2px solid #F03838;
            }
        }
    }
}

.page-info {
    text-align: center;
    margin-bottom: 30px;

    span {
        display: inline-block;
        height: 40px;
        border: 1px solid red;
        line-height: 40px;
        padding: 0 20px;
        border-radius: 20px;
        cursor: pointer;
    }

    span.next {
        margin-left: 20px;
    }
}
</style>