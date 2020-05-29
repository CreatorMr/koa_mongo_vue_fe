<template>
<el-dialog title="登录" :visible="dialogVisible" @close="cancel">
  <el-form>
    <el-formItem label="邮箱">
      <el-input v-model="params.email" placeholder="邮箱" autocomplete="off">
      </el-input>
    </el-formItem>
    <el-formItem label="密码">
      <el-input type="password" placeholder="密码" v-model="params.password" autocomplete="off"></el-input>
    </el-formItem>
    <el-formItem v-if="handleFlag === 'register'" label="昵称">
      <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
    </el-formItem>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <!-- todo github 授权登录 -->
    <!-- <el-button type="success" @click="handleOAuth">github 授权登录</el-button> -->
    <el-button v-if="handleFlag === 'login'" type="text" @click="forget(0)">还没有账号</el-button>
    <el-button v-if="handleFlag === 'register'" type="text" @click="forget(1)">返回登录</el-button>
    <el-button v-if="handleFlag === 'login'" :loading="btnLoading" type="primary" @click="handleOk('login')">登 录</el-button>
    <el-button v-if="handleFlag === 'register'" :loading="btnLoading" type="primary" @click="handleOk('register')">注 册</el-button>
  </div>
</el-dialog>
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
    email: "creator@creator.com",
    password: "admin",
    name: "",
  };

  mounted() {
  }

  get dialogVisible(): boolean {
    return this.visible;
  }
  forget(back): void {
    if (back) {
      this.$emit('update:handleFlag', 'login')
    } else {
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
      if(!data.ok) {
        this.$message.info(data.message)
        return
      }
      // 注册成功 ，返回登录
      this.$emit('update:handleFlag', 'login')
    } else {
      delete this.params.name
      data = await login(this.params)
      if(!data.ok){
        this.$message.info(data.message)
        return
      }
      const userInfo2 = {
        _id: data.user._id,
        name: data.user.nick_name,
        avatar: data.user.avatar
      };
      Cookies.set('jwtToken-creator',data.token, {
        // domain: 'localhost',
        domain: '106.53.236.144',
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
