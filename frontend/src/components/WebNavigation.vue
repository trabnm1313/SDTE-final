<template>
  <header>
    <nav class="nav-main">
      <p class="logo">Discord Bot for Study</p>
      <ul class="nav-links">
        <li v-if="page == 'watchPage'"><router-link class="btn btn-outline-primary" to="/upload">Upload Video</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "WebNavigation",
  props: {
    page: String
  }
};
</script>

<style>
.logo {
  font-size: 25px;
  padding: 0% 1%;
}
.nav-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.nav-links {
  list-style: none;
  margin: 0.5%;
}
.nav-links li{
  display: inline;
  padding: 0 5px;
}
.nav-links li a{
  padding: 4px 8px;
}
.nav-links li a:focus{
  display: none;
}
@media only screen and (max-width: 600px) {
  .logo {
    display: none;
  }
  .nav-main {
    justify-content: center;
  }
  .nav-links {
    padding: 0;
  }
}
</style>
