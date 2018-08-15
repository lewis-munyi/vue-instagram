<template>
  <div id="app">
    <img class="image" src="https://www.lifewire.com/thmb/WzEDlNxrnYIKeYF3Q81tFC70O58=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/instagram-logo-57ea81e43df78c690f90439b.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.image {
  width: 200px;
  height: 200px;
}
</style>
