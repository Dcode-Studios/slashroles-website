<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-2">
    <b-navbar-brand href="#" class="customnav-brnd">
      <!-- <b-img width="40px" rounded="circle" src="/logo.jpg" alt="Bot Logo"/> -->
      <b-icon-slash-square-fill scale="1" class="ml-2"/> SlashRoles
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="button mx-auto" href="https://discord.gg/HK4Q2Vuk3N">Support Server</b-nav-item>
        <b-nav-item class="button mx-auto" href="https://discord.com/api/oauth2/authorize?client_id=817248082126700565&permissions=268435456&scope=bot%20applications.commands">Invite the Bot</b-nav-item>
        <b-nav-item class="mx-auto" href="https://gist.github.com/TechGeekGamer/03754455b0366066dfa29ea3b1076870">Privacy Policy</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(30, 30, 30);
  height: 100%;
  width: 100vw;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.customnav-brnd {
  font-size: 1.7rem;
}
.navbar {
  padding: .2rem .5rem;
}
</style>
