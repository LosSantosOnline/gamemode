<template>
  <notification class="notification"></notification>
</template>

<script>
import Notification from "./components/Notification.vue";

export default {
  name: "notificationParent",
  data() {
    return {
      notification: true,
      title: "",
      content: ""
    };
  },
  methods: {
    showNotification(title, content, timeout = 1000) {
      this.title = title;
      this.content = content;
      this.notification = true;
    },
    hideNotification() {
      this.notification = false;
    }
  },
  components: {
    Notification
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/transitions.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");
html,
body {
  overflow: hidden;
}
.notification {
  position: absolute;
  right: 0px;
  width: 30%;
}
</style>
