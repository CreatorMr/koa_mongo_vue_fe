<template>
<div class="login-container">
  <div class="left-container">
    <div class="title"><span>登录</span></div>
    <div class="input-container">
      <input type="text" name="username" placeholder="用户名" id="">
      <input type="text" name="password" placeholder="密码" id="">
    </div>
    <div class="message-container">
      <span>忘记密码</span>
    </div>
  </div>
  <div class="right-container">
    <div class="regiset-container">
      <span class="regist">注册</span>
    </div>
    <div class="action-container">
      <span>提交</span>
    </div>
  </div>
</div>
</template>

<style lang="css" scoped>
* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

/**
rgb(114,135,254)  rgb(130,88,186)
rgb(59, 45, 159)
rgb(95,76,194)
rgb(118,76,163) rgb(92,103,211)
rgb(199,191,219)
rgb(237, 221,22)
 */

body {
  background-image: linear-gradient(to bottom right, rgb(114, 135, 254), rgb(130, 88, 186));
}

.login-container {
  width: 600px;
  height: 340px;
  margin: 0 auto;
  margin-top: 20%;
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
  height: calc(100% - 120px);
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
