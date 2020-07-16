<template>
  <div>
    <div class="login-box">
      <form class="layui-form layui-form-pane" method="get" action>
        <div class="layui-form-item">
          <h3 id="top">小巨人智能设备运营管理平台</h3>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">账号：</label>

          <div class="layui-input-inline">
            <input
              type="text"
              name="account"
              class="layui-input"
              lay-verify="account"
              placeholder="账号"
              autocomplete="on"
              maxlength="20"
              v-model="account"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码：</label>

          <div class="layui-input-inline">
            <input
              type="password"
              name="pwd"
              class="layui-input"
              lay-verify="pwd"
              placeholder="密码"
              maxlength="20"
              v-model="pwd"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码：</label>

          <div class="layui-input-inline" style="height: 39px;">
            <input
              type="text"
              name="code"
              id="authCode"
              class="layui-input"
              lay-verify="code"
              placeholder="验证码"
              maxlength="5"
              v-model="code"
            />
            <img :src="codeImg" title="单击刷新验证码" id="img_rand_code" alt @click="img_rand_code()" />
          </div>
        </div>
        <div class="layui-form-item">
          <button
            type="button"
            style="width: 327px;"
            class="layui-btn btn-submit"
            @click="login()"
          >立即登录</button>
        </div>
      </form>
      <div @click="getData()">获取数据{{ $store.state.loginSuccess }}</div>
    </div>
  </div>
</template>

<style lang='scss'>
</style>
<style lang='scss' scoped>
body {
  background-color: #2f4056;
}

#top {
  color: #fff;
  font-size: 30px;
}

.layui-form-pane .layui-input {
  width: 217px;
}

.layui-form {
  width: 310px;
  text-align: center;
  margin: 0px auto;
  margin-top: 200px;
}

#authCode {
  width: 76px;
}

#img_rand_code {
  position: relative;
  top: -38px;
  height: 38px;
  left: 50px;
}
</style>

<script>
export default {
  data() {
    return {
      account: null,
      pwd: null,
      code: null,
      codeImg: "111"
    };
  },
  created() {
    this.img_rand_code();
  },
  mounted() {
  },
  computed: {},
  methods: {
    img_rand_code() {
      this.axios
        .get("/znmc/api/captcha/gif", {
          params: {
            clear: Math.random(),
            ddd: '33333'
          }
        })
        .then(res => {
          this.codeImg = res.request.responseURL;
        });
    },
    login() {
      let data = {
        account: this.account,
        pwd: this.pwd,
        code: this.code
      };
      this.axios
        .post("/znmc/api/login/account", data)
        .then(res => {
          if(res.data.success) {
            this.$router.push('/')
          }
        });
    }
  }
};
</script>