<template>
    <!-- 单个文章组件 -->
    <div class="article">
        <h2 class="title">{{item.title}}</h2>
        <p class="createtime">{{item.createtime | parseDate('YYYY-MM-DD')}}</p>
        <div v-html="item.content" class="content">
        </div>
        <div class="divide"></div>
    </div>
</template>
<script>
export default {

    name: 'myarticle',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.article {
    .title {
        text-align: center;
    }

    .createtime {
        text-align: center;
        font-style: italic;
        color: #9e9e9e;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .divide {
        width: 150px;
        // height: 1px;
        border-bottom: 1px solid #e0e0e0;
        margin: 50px auto;
    }

    .content {
        line-height: 25px;

        h1 {
            margin-bottom: 10px;
        }

    }

   
}
</style>