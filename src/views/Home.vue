<template>
  <div class="container">
    <header class="nav">
      <img src="/img/logo.jpeg" class="logo"/>
    </header>
    <h2>Cosmos-based Blockchain Testnet Faucet</h2>
    <input
      v-model="address"
      type="text"
      class="address-input"
      name="address"
      placeholder="Cosmos Wallet Address"
    />

    <button class="btn-token" @click="fetchForm">Request Tokens</button>
  </div>
</template>

<script>
import axios from "axios";
import blockchain from 'irisnet-crypto';

const config = {
  mnemonic: "vacuum bulb infant decade shy plunge snow sorry champion book soldier fuel orient loan drill stairs island tape gain speed elder field together bitter",
  language: 'english',
  account_number: '1',
  account: null,
};

export default {
  data() {
    return {
      address: ""
      
    };
  },
  mounted: function() {
    this.initAccount();
  },
  methods: {
    initAccount(){
      let crypto = blockchain.getCrypto('cosmos');
      config.account = crypto.recover(config.mnemonic, config.language );
      console.log(config);
    },
    fetchForm() {

      const address = this.address;
      if (!address) {
        alert("Please input address.");
        return;
      }
      
      console.log(address);
      axios.request({
        method: "POST",
        baseURL: "/api",
        url: "/", // 在这配置接口路径
        params: { // 地址栏参数
          address
        },
        data: {
          address
        },
        headers: {
          server: "http://13.125.71.131:26657" // 配置代理的主域
        }
      });
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
  text-align: center;
}
.logo {
  width: 250px;
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