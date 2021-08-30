<template>
  <div id="app">
    <div id="nav">
      <router-link to="/main">Main</router-link> |
      <router-link to="/single-giveaway">Single Give Away</router-link> |
      <router-link to="/sort">Sort By</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  background-color: #d6eee6;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202121;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b94297;
}
</style>
