<template>
    <div id="add">
        <p class="label">标题：</p>
        <div class="title">
            <input class="bs-input" v-model="form.title" type="" name="">
        </div>
        <p class="label">正文：</p>
        <p class="content">
            <textarea v-model="form.content" cols="100%" rows="10">

            </textarea>
        </p>
        <p class="label">标签：</p>
        <div class="title">
            <input class="bs-input" placeholder="逗号分隔" v-model="form.tags" type="">
        </div>
        <p class="label">
            <label>是否显示： <input v-model="form.isshow" type="checkbox"></label></p>
        <div @click="submit" class="submit">提交</div>
    </div>
</template>
<script>
import showdown from "showdown"
export default {

    name: 'Add',

    data() {
        return {
            form: {
                title: "",
                content: "",
                tags: "",
                isshow: true
            }
        }
    },
    methods: {
        submit() {

            let vm = this;
            for(let key in vm.form){
                if(!vm.form[key]){
                    
                    return;
                }
            }


            let converter = new showdown.Converter();
            let html = converter.makeHtml(this.form.content);

            this.$axios({
                url: "/blogs",
                method: "POST",
                data: {
                    title: this.form.title,
                    content: html.toString(),
                    tags: this.form.tags,
                    isshow: this.form.isshow
                }
            }).then(res => {
                console.log(res);
            })

        }
    }
}
</script>
<style lang="scss" scoped>
#add {
    padding: 20px 15px 0;
}

.bs-input {
    border-bottom: 1px solid #ccc;
    display: inline-block;
    width: 50%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.content {
    // padding: 0 15px;

    textarea {
        display: block;
        width: 100%;
        // height: 34px;
        // padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
}

.title {
    // padding: 0 15px;
}
.submit {
    width: 200px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin: 0 auto;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 15px;


}
.label {
    margin: 20px 0 5px;
}
.label:first-child {
    margin-top: 0px;
}
</style>