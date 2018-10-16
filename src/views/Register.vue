<template>
    <div class="register">
        <div>
            <div class="username">
                <p>用户名</p>
                <input @blur="handleBlur" v-model="name" type="text" placeholder="请输入用户名">
            </div>
            <div class="password">
                <p>密码</p>
                <input v-model="password" type="password" placeholder="请输入密码">
            </div>
            <div class="password">
                <p>确认密码</p>
                <input v-model="passwordAgain" type="password" placeholder="请再次输入密码">
            </div>
            <span class="tip">{{msg}}&nbsp;</span>
            <div class="submit">
                <span @click="submit">注册</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'Register',

    data() {
        return {
            name: "",
            password: "",
            passwordAgain: "",

            msg: "",

            checkName: true,
        }
    },
    methods: {
        submit() {
            if (!this.name || !this.password) {
                this.msg = "请输入用户名和密码";
                return;
            }
            if (!this.passwordAgain) {
                this.msg = "请再次输入密码";
                return;
            }
            if (this.password != this.passwordAgain) {
                this.msg = "两次密码输入不一致";
                return;
            }
            if(!this.checkName){
            	return;
            }

            this.msg = "";

            this.$axios({
                url: "/register",
                method: "POST",
                data: {
                    name: this.name,
                    password: this.password
                }
            }).then(res => {
                if (res.success) {
                    this.$router.push("/home");
                } else {
                    this.msg = res.message;
                }
            })
        },
        handleBlur() {
            console.log(this.name);
            this.$axios({
                url: "/check/name",
                method: "GET",
                params: {
                    name: this.name
                }
            }).then(res => {
            	if(!res.success){
            		this.checkName = false;
            		this.msg = res.message;
            	}else {
            		this.checkName = true;
            		this.msg = "用户名可用";
            	}
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.register {
    padding-top: 20%;

    input {
        display: inline-block;
        width: 100%;
        // height: 34px;
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

    >div {
        width: 250px;
        margin: 0px auto 0;
    }

    p {
        font-weight: 600;
        margin-bottom: 5px;
    }

    .password {
        margin-top: 10px;
    }

    .submit {
        text-align: center;
        margin-top: 20px;

        span {
            display: inline-block;
            padding: 5px 25px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-weight: 400;
            cursor: pointer;
        }
    }

    .tip {
        color: red;
        font-size: 12px;
    }
}
</style>