<template>
    <div>
        <h1 class="head-title">Archives</h1>
        <div v-for="item in list" class="archive-item">
            <p class="time"><span>#{{item.createtime | parseDate('YYYY-MM-DD')}}</span></p>
            <h1 class="title"><span @click="readArticleById(item.id)">{{item.title}}</span></h1>
        </div>
        <div class="page-info">
            <transition name="fade">
                <span class="prev" v-show="start > 1" @click="handlePrev">PREV</span>
            </transition>
            <transition name="fade">
                <span class="next" v-show="start < pages" @click="hanldeNext">NEXT</span>
            </transition>
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
            pages: 0,
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
                    start: vm.start
                }
            }).then(res => {
                console.log(res);
                this.list = res.data.list;
                this.pages = res.data.pages;
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
        handlePrev() {
            if (this.start > 1) {
                this.start--;
                this.queryTitles();
            }
        },
        hanldeNext() {
            if (this.start < this.pages) {
                this.start++;
                this.queryTitles();
            }
        }

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
        height: 34px;
        color: #f03838;
        border: 1px solid #e0e0e0;
        line-height: 34px;
        padding: 0 25px;
        border-radius: 20px;
        cursor: pointer;

        &:hover {
            color: #fff;
            background-color: #f03838;
        }
    }

    span.next {
        margin-left: 20px;
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>