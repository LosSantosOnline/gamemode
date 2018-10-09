<template>
  <div class="container-xl flex flex-row	 h-screen max-h-screen flex-grow overflow-hidden">
    <div class="w-24 border-sidebar flex p-2">
      <div class="flex-1 self-end text-center h-24 pt-5">
        <a class="icon-color" href="#"><font-awesome-icon icon="power-off" size="4x"></font-awesome-icon></a>
      </div>
    </div>
    <div class="flex flex-grow flex-col w-full">
      <div style="padding-right: 50px;" class="max-w-lg">
        <navbar></navbar>
      </div>
      <div class="flex flex-row h-full justify-center content-center items-center font-sans">
        <div class="flex flex-row bg-white-trans shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-lg w-auto">
          <div class="lg:w-3/5 md:w-full">
            <form class="w-auto mt-8 text-white">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-white uppercase md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Login:
                  </label>
                </div>
                <div class="md:w-3/5">
                  <input class="bg-grey-darkest opacity-50 appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight outline-none border-none" id="inline-full-name" type="text" value="Jane Doe">
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-white uppercase md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                    Hasło:
                  </label>
                </div>
                <div class="md:w-3/5">
                  <input class="bg-grey-darkest opacity-50 appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight outline-none border-none" id="inline-username" type="password" placeholder="******************">
                </div>
              </div>
              <div class="flex mt-16 flex-row flex-wrap items-start justify-around">
                <label class="block text-grey font-sans font-bold">
                  <input class="mr-2 pt-1 leading-tight" type="checkbox">
                  <span class="text-sm text-white">
                    Zapamiętaj mnie
                  </span>
                </label>
                <button class="bg-white uppercase hover:bg-white-dark text-black font-bold py-1 px-2" type="button">
                  Zaloguj
                </button>
              </div>
            </form>
          </div>
          <div class="flex w-4 mr-8 ml-4 lg:flex md:hidden items-center content-center">
            <div class="h-24 mx-auto vertical-divider"></div>
          </div>
          <div class="w-64 lg:block md:hidden ">
            <div class="login-header text-center">
              <h3 class="text-white">Los Santos Roleplay V</h3>
              <p class="text-xs leading-tigh text-red-lighter">Aktualna wersja: 2.137</p>
            </div>
            <div class="mt-5 text-justify text-grey">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aperiam a veritatis ab, accusantium corrupti eaque eveniet nostrum ipsa magni? Facilis nobis optio vitae. Earum, eius aspernatur. Totam, aliquid quam!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert-box">
        <div class="p-2 bg-red-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex font-sans" role="alert">
          <span class="flex rounded-full bg-red uppercase px-2 py-1 text-xs font-bold mr-3">BŁĄD</span>
          <span class="font-semibold mr-2 text-left flex-auto">Dane logowania są niepoprawne (1/3)</span>
        </div>
    </div>
  </div>
</template>

<script>
import "../../assets/scss/style.scss"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Navbar from "./components/Navbar.vue";

export default {
  name: "loginParent",
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
    Navbar
  }
}
</script>

<style lang="scss">
html, body {
    background: url('../../assets/images/bg-01.jpg') center no-repeat;
    background-size: cover;
}
</style>
