<template>
  <transition name="fade">
    <div class="notificationBox" v-show="notification">
      <div class="image">
          <font-awesome-icon icon="info-circle" size="4x"></font-awesome-icon>
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="content" v-html="content">
          Otwórz swój ekwipunek za pomocą przycisku
          <b>I</b>, aby go użyć.
      </div>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "notificationParent",
  data() {
    return {
      notification: false,
      title: "",
      content: "",
    }
  },
  methods: {
    showNotification(title, content, timeout = 1000) {
      this.title = title;
      this.content = content;
      this.notification = true;
    },
    hideNotification() {
      this.notification = false;
    },
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/transitions.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");

.notificationBox {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  float: right;
  width: 700px;
  margin-top: 100px;
  padding: 10px;
  border-radius: 3px;
  .image {
    float: left;
    padding: 10px 10px 10px 10px;
    color: rgba(255, 255, 255, 0.6);
  }
  .title {
    float: left;
    margin-top: 10px;
    width: 80%;
    font-weight: 600;
  }
  .content {
    float: left;
    width: 80%;
    padding-bottom: 10px;
  }
}
</style>
