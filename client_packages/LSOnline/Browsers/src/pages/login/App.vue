<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="login100-more">
        <div class="container"  style="float:left;margin-top: 50px;font-size: 20px;padding:80px;min-width:100%;background-color: rgba(0,0,0,0.5)">
          <h1>Witaj na serwerze <b>Los Santos Online</b>!</h1>
          <br/>
          Skorzystaj z panelu do logowania po prawej stronie aby się zalogować na konto, które utworzyłeś na naszym
          forum. Jeśli nie posiadasz konta na naszym forum to wejdź na nie korzystając z adresu <i>lsonline.pl</i>
          a następnie zarejestruj się oraz jako nowy użytkownik dodaj swoją pierwszą postać.
        </div>
      </div>
      <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
        <form class="login100-form validate-form" @submit="submitForm">
          <span class="login100-form-title p-b-59">
          Zaloguj się
          </span>
          <div class="wrap-input100 validate-input" v-bind:class="{ 'alert-validate': errors['username'] }" data-validate="Username is required" @input="errors['username'] = false">
            <span class="label-input100">Username</span>
            <input class="input100" type="text" name="username" placeholder="Username..." v-model.trim="username">
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input" v-bind:class="{ 'alert-validate': errors['password'] }" data-validate = "Password is required" @input="errors['password'] = false">
            <span class="label-input100">Password</span>
            <input class="input100" type="password" id="pass" name="pass" placeholder="*************" v-model.trim="password">
            <span class="focus-input100"></span>
          </div>
          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <button class="login100-form-btn" @click="signIn">
                Zaloguj się
              </button>
            </div>
            <a href="#" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
              Wyjdź z gry
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "notificationParent",
  data() {
    return {
      errors: { username: false, password: false },
      username: "",
      password: ""
    }
  },
  methods: {
    signIn() {
      mp.trigger('loginButtonClicked', this.password);
    },
    submitForm(e) {
      if(!this.username) this.errors.username = true;
      if(!this.password) this.errors.password = true;
      
      e.preventDefault();
    },
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.login100-more {
  background-image: url("../../assets/images/bg-01.jpg");
}
</style>
