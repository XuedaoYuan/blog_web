<template>
    <div class="index">
        <div class="sign">
            <div v-if="user.name">
                <span>用户名：<span style="color: green;">{{user.name}}</span></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span @click="handleLogout">退出登录</span>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                <span v-if="user.role=='admin'" @click="releaseBlog">发布博客</span>
            </div>
            <div v-else>
                <span @click="handleLogin" class="login">登录</span>
                <span @click="handleRegister" class="register">注册</span>
            </div>
        </div>
        <div class="title">
            <span class="pxmn">贫下码农</span>
        </div>
        <div class="subtitle">从前端到后端</div>
        <div class="nav">
            <span @click="go('home')" class="home">Home</span>
            <span @click="go('archives')" class="archives">Archives</span>
        </div>
        <router-view></router-view>
        <div class="copyright">&copy; 2018 Xuedao Yuan</div>
    </div>
</template>
<script>
export default {
    name: 'index',
    components: {

    },
    data() {
        return {
            user: {}
        }
    },
    created() {
        this.$axios({
            url: "/whoami",
            method: "GET"
        }).then(res => {
            console.log(res);
            if (res.success && res.data) {
                //显示用户信息
                this.user = res.data;
            } else {
                //跳转到重新登录

            }
        })
    },
    methods: {

        go(path) {
            this.$router.push('/' + path);
        },
        handleRegister() {
            this.$router.push("/register");
        },
        handleLogin() {
             this.$router.push("/login");
        },
        handleLogout(){
            let vm = this;
            vm.$axios({
                url: "/logout",
                method: "GET"
            }).then(res => {
                console.log(res);
                if(res.success){
                    this.user = {};
                }else {
                    alert(res.message);
                }
            }).catch(e => {
                console.log(e);
                alert(e.message);
            })
        },
        releaseBlog(){
            this.$router.push("/add");
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
    padding: 0 200px 20px;
    height: 100%;
}

.title {
    text-align: center;
    padding-top: 50px;

    >.pxmn {
        background-color: #f03838;
        color: #fff;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        display: inline-block;
        padding: 0 20px;
        transition: all .5s;

        &:hover {
            padding: 0 30px;
        }
    }
}

.subtitle {
    color: #9e9e9e;
    font-size: 14px;
    margin: 10px 0 0;
    text-align: center;
}

.nav {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 80px;

    span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: #f03838;
        cursor: pointer;
    }

    .archives {
        margin-left: 50px;
    }
}

.copyright {
    text-align: center;
    color: #9e9e9e;
}

.sign {
   
    span {
        cursor: pointer;
    }

    .register {
        margin-left: 10px;
    }
}
</style>