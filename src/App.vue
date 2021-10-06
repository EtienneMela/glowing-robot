<template>
  <div id="app">
    <div
      class="
        d-flex
        justify-content-between
        align-items-center
        border-bottom
        pt-3
        pb-3
      "
    >
      <div>
         <Canvas />
        <router-link to="/tasks" exact class="item link-dark p-3">
          Catalogue
        </router-link>
        <router-link to="/tasks/new" class="item link-dark p-3">
          New product
        </router-link>
      </div>
      <img style="width: 35px" src="./assets/shoes.png" />
      <div class="login"><Nav /></div>
    </div>
    <Socket />
    <div class="container"><router-view /></div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Socket from "./components/Socket.vue";
import Canvas from "./components/Canvas.vue"

export default {
  name: "app",
  components: {
    Nav,
    Socket,
    Canvas
  },
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}

.login {
  margin-right: 10px;
}

.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>