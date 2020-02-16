<template>
  <div class="container">
    <header class="nav">
      <img src="/img/kava-logo.svg" class="logo" />
    </header>

    <input
      v-model="token"
      type="text"
      class="address-input"
      name="address"
      placeholder="Kava Address"
    />

    <button class="btn-token" @click="fetchForm">Request Tokens</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token: ""
    };
  },
  methods: {
    fetchForm() {
      const token = this.token;
      if (!token) return;
      console.log(token);
    }
  }
};
</script>


<style scoped>
.nav {
  text-align: center;
  margin-top: 60px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.logo {
  margin: 30px;
  height: 40px;
}
.coin-logo {
  width: 1.7em;
  margin-right: 0.6em;
}
.btn-token {
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #ff554f;
  border-radius: 6px;
  border: 0;
  padding: 15px 35px;
  height: auto;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  width: 100%;
}
.address-input {
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 100%;
  padding: 12.5px 15px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #ffffff;
}
</style>