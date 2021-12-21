<template>
  <div class="home">
    <b-container>
    <b-alert variant="info" :show="true">
     <span>This project has been merged into <a href="https://github.com/Dcode-Studios">Dcode Studios</a>! This means more time will be directed to this project and adding new features. Stay tuned! </span>
    </b-alert>
      <b-row align-h="center">
        <b-col md="auto">
          <b-jumbotron style="background-color: rgb(44, 188, 156);" lead="SlashRoles is a slash command bot that lets you setup options in the Slash Command menu to assign roles.">
            <template #header>
              <b-icon-slash-square-fill scale="1" class="ml-2"/> SlashRoles
            </template>
            <b-carousel
            class="mb-4"
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            controls
            indicators
            fade
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
            img-width="100"
            >
            <b-carousel-slide img-src="/gallery/1_create_command.png"></b-carousel-slide>
            <b-carousel-slide img-src="/gallery/2_create_command_options.png"></b-carousel-slide>
            <b-carousel-slide img-src="/gallery/3_create_command_created.png"></b-carousel-slide>
            <b-carousel-slide img-src="/gallery/4_role_created_command_selected.png"></b-carousel-slide>
            <b-carousel-slide img-src="/gallery/5_role_created_command_ran.png"></b-carousel-slide>
            <b-carousel-slide img-src="/gallery/6_role_created_command_ran.png_removed.png"></b-carousel-slide>
            </b-carousel>
          </b-jumbotron>
        </b-col>
      </b-row>
      <b-row>

        <b-col cols="8">
          <b-row>
            <b-cols>
              <b-row>
                <b-col cols="12">
                  <b-card no-body class="palette-2 text-center mb-4 pt-2 text-white"><h3><b>Features</b></h3></b-card>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6" md="6" class="mb-4" v-for="feature in features" v-bind:key="feature">
                    <b-card bg-variant="light" text-variant="dark" :header="feature.title" class="text-center">
                      <b-card-text>{{feature.text}}</b-card-text>
                    </b-card>
                </b-col>
              </b-row>
            </b-cols>
          </b-row>
        </b-col>

        <b-col cols="4">

          <!-- <b-row>
            <b-col cols="12">
              <b-card no-body class="palette-2 text-center mb-4 pt-2 text-white"><h3><b>The Team</b></h3></b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3" v-for="member in crew" v-bind:key="member.name" class="mb-4">
              <custommember :img="member.imgUrl" :crewname="member.name" :red="member.redirect" />
            </b-col>
          </b-row> -->
          <b-row>
            <b-col>
              <b-card no-body class="palette-2 text-center mb-4 pt-2 text-white"><h3><b>As seen on</b></h3></b-card>
            </b-col>
          </b-row>
          <b-row  align-h="center" style="text-align:center;">
            <b-col cols="auto"/>
            <b-col md="2" lg="auto" class="m-2">
              <a href="https://top.gg/bot/817248082126700565">
                <b-img thumbnail src="https://top.gg/api/widget/817248082126700565.svg"></b-img>
              </a>
            </b-col>
            <b-col md="2" lg="auto" class="m-2">
              <a href="https://discords.com/bots/bot/817248082126700565">
                <b-img thumbnail src="https://botsfordiscord.com/api/bot/817248082126700565/widget"></b-img>
              </a>
            </b-col>
            <b-col cols="auto"/>
          </b-row>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import custommember from '../components/Member.vue'
export default {
  name: 'Home',
  components: {
    // custommember
  },
  data(){
    return {
      crew: [
        {
          "imgUrl": "/avatars/techgeekgamer.png",
          "name": "Daniel💻#7205",
          "redirect": "https://github.com/TechGeekGamer"
        }
      ],
      features: [
        {
          "title": "Easy Configuration",
          "text": "Run /create to select a role to assign, and the title and description to show in the Slash Command menu. (Optional message to be shown on adding/removing the role). When someone runs that command, they'll be granted the role you selected. An option can be removed by using /delete, and the data related to it will be deleted."
        },
        {
          "title": "/ Slash Commands",
          "text": "Interacting with SlashRoles is done all through Slash Commands. More ways to interact is coming soon though!"
        }
      ]
    }
  }
}
</script>

<style scoped>
.palette-2 {
  background-color: rgb(58, 153, 218);
}

.home {
  margin: 5px;
}
</style>