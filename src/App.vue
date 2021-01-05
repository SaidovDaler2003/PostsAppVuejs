<template>
  <div id="wrapper">
    <ul id="links">
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/create">
          Create
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
    <hr>
  </div>
  <img src="./assets/logo.png" id="logo">
</template>

<script>
  export default {
    components: {
      
    }
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    padding: 20px;
  }

  a, a:link, a:active, a:visited {
    color: initial;
    text-decoration: none;
  }

  a:hover {
    color: blue;
  }

  #wrapper {
    border: 1px solid black;
    padding: 20px;
  }

  #links {
    margin-bottom: 15px;
  }

  #links li {
    display: inline;
  }

  #logo {
    position: fixed;
    width: 100px;
    height: 100px;
    right: 10px;
    bottom: 10px;
  }
</style>
