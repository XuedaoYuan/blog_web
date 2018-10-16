<template>
    <div class="pagenation">
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

    name: 'Pagenation',
    props: {
        start: {
            required: true,
            type: Number
        },
        pages: {
            required: true,
            type: Number
        }
    },

    data() {
        return {

        }
    },
    methods: {
        handlePrev() {
            if (this.start > 1) {
                let start = this.start;
                start--;
                this.$emit("handleStartChange", start);
            }
        },
        hanldeNext() {
            if (this.start < this.pages) {
                let start = this.start;
                start++;
                this.$emit("handleStartChange", start);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
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