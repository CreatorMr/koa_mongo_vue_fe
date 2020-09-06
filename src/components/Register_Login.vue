<template>
<div class="login">
  <el-dialog title="登录" :visible="dialogVisible" @close="cancel">
  <!-- <el-form>
    <el-formItem label="邮箱">
      <el-input v-model="params.email" placeholder="邮箱" autocomplete="off">
      </el-input>
    </el-formItem>
    <el-formItem label="密码">
      <el-input type="password" placeholder="密码" v-model="params.password" autocomplete="off"></el-input>
    </el-formItem>
    <el-formItem v-if="handleFlag === 'register'" label="昵称">
      <el-input v-model="params.nick_name" placeholder="用户名或昵称" autocomplete="off"></el-input>
    </el-formItem>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button v-if="handleFlag === 'login'" type="text" @click="forget(0)">还没有账号</el-button>
    <el-button v-if="handleFlag === 'register'" type="text" @click="forget(1)">返回登录</el-button>
    <el-button v-if="handleFlag === 'login'" :loading="btnLoading" type="primary" @click="handleOk('login')">登 录</el-button>
    <el-button v-if="handleFlag === 'register'" :loading="btnLoading" type="primary" @click="handleOk('register')">注 册</el-button>
  </div> -->

  <div class="login-container">
    <div class="left-container">
      <div class="title"><span>登录</span></div>
      <div class="input-container">
        <input type="text" v-model="params.email" name="username" placeholder="邮箱" id="">
        <input type="password" placeholder="密码" v-model="params.password" autocomplete="off" id="">
        <el-input v-if="handleFlag === 'register'" v-model="params.nick_name" placeholder="用户名或昵称" autocomplete="off"></el-input>
      </div>
      <div class="message-container">
        <span>忘记密码</span>
      </div>
    </div>
    <div class="right-container">
      <div class="regiset-container">
        <span class="regist" v-if="handleFlag === 'login'"  @click="forget(0)">注册</span>
        <span class="regist" v-if="handleFlag === 'register'" @click="forget(1)">返回登录</span>
      </div>
      <div class="action-container">
        <span v-if="handleFlag === 'login'" :loading="btnLoading" @click="handleOk('login')">提交</span>
        <span v-if="handleFlag === 'register'" :loading="btnLoading" @click="handleOk('register')">注册</span>
      </div>
    </div>
  </div>
</el-dialog>
</div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Prop,
  Vue
} from "vue-property-decorator";
import {
  Action,
} from 'vuex-class';
import {
  register,
  login
} from "../api/user.js"
import Cookies from 'js-cookie'
@Component({})
export default class Register_Login extends Vue {
  @Prop({
    default: false
  }) visible!: boolean;
  @Prop({
    default: false
  }) handleFlag!: string;
  @Action('userInit') userInit
  // initial data
  private btnLoading = false;
  private loading = false;
  private params = {
    email: "",
    password: "",
    nick_name: "",
  };

  mounted() {}

  get dialogVisible(): boolean {
    return this.visible;
  }
  forget(back): void {
    if (back) {
      this.$emit('update:handleFlag', 'login')
    } else {
      // 0 增加高度
      this.$emit('update:handleFlag', 'register')
    }
  }
  handleOk(s): void {
    this.submit();
  }
  @Emit()
  private cancel(): boolean {
    return false;
  }
  // @Emit("ok")
  async submit() {
    let data: any = "";
    this.btnLoading = true;
    if (this.handleFlag === "register") {
      data = await register(this.params)
      if (!data.ok) {
        this.$message.info(data.message)
        return
      } else {
        this.btnLoading = false;
      }
      // 注册成功 ，返回登录
      this.$emit('update:handleFlag', 'login')
    } else {
      delete this.params.nick_name
      data = await login(this.params)
      if (!data.ok) {
        this.$message.info(data.message)
        return
      }
      const userInfo2 = {
        ...data.user,
        _id: data.user._id,
        nick_name: data.user.nick_name,
        avatar: data.user.avatar,

      };
      Cookies.set('jwtToken-creator', data.token, {
        domain: process.env.NODE_ENV === 'development' ? 'localhost' : '106.52.111.158',
        expires: 7
      })
      Cookies.set('jwtToken-creator', data.token, {
        domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'creatorking.top',
        expires: 7
      })
      this.$store.commit("userInfoInit", userInfo2);
      window.sessionStorage.userInfo = JSON.stringify(userInfo2);
      this.$emit('ok', false)
    }
    this.btnLoading = false;
    this.$message({
      message: "操作成功",
      type: "success"
    });
  }
}
</script>
<style lang="css">
.login>>> .el-dialog__wrapper {
  background: red;
  border-radius: 15px;
}
.el-dialog__header {
  display: none;
  border-radius: 15px;
}
.el-dialog,.el-dialog__body{
  padding: 0;
  width: 600px;
  border-radius: 15px;
}
</style>
<style lang="css" scoped>

.login-container {
  width: 600px;
  min-height: 340px;
  /* height: 380px; */
  /* margin: 0 auto; */
  border-radius: 15px;
  box-shadow: 0 10px 50px 0px rgb(59, 45, 159);
  background-color: rgb(95, 76, 194);
}

.login-container .left-container {
  display: inline-block;
  width: 330px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 60px;
  background-image: linear-gradient(to bottom right, rgb(118, 76, 163), rgb(92, 103, 211));
}

.login-container .left-container .title {
  columns: #FFFFFF;
  font-size: 18px;
  font-weight: 200;
}
.login-container .left-container .title span{
  border-bottom: 3px solid rgb(237, 221,22);
}
.login-container .left-container .input-container{
  padding:  20px 0;
}
.login-container .left-container .input-container input {
  border: 0;
  background: none;
  outline: 0;
  color: #FFFFFF;
  margin: 20px 0;
  display: block;
  width: 100%;
  padding: 5px 0;
  transition: .2s;
  border-bottom: 1px solid rgb(199,191,219);
}

.login-container .left-container .input-container input:hover{
  border-bottom-color: #FFFFFF;
}
::-webkit-input-placeholder{
  color: rgb(199,191,219);

}
.login-container .left-container .message-container{
  font-size: 14px;
  transition: .2s;
  color: rgb(199,191,219);
  cursor: pointer;
}
.login-container .left-container .message-container:hover{
  color: #FFFFFF;
}

.login-container .right-container {
  width: 145px;
  display: inline-block;
  /* height: calc(100% - 120px); */
  height: 200px;
  vertical-align: top;
  padding: 60px 0;
}
.login-container .right-container .regiset-container{
  text-align: center;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 200;
}
.login-container .right-container .regiset-container span{
    border-bottom: 3px solid rgb(237, 221,22);
}
.login-container .right-container .action-container{
  font-size: 10px;
  color: #FFFFFF;
  text-align: center;
  height: 100%;
  position: relative;
}
.login-container .right-container .action-container span{
  border:  1px solid rgb(237, 221,22);
  padding: 10px;
  display: inline-block;
  line-height: 25px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  left: calc(72px - 25px);
  transition: .2s;
  cursor: pointer;
}
.login-container .right-container .action-container span:hover{
  background-color: rgb(237, 221,22);
  color: rgb(95, 76, 194);
}

</style>
