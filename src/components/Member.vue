<template>
  <div class="custommember text-center">
    <a :href="red">
      <b-img thumbnail :src="img" class="thumb"></b-img>
    </a>

    <!-- 
    <b-card no-body class="shadow">
          <b-card-text class="mt-3 mb-0">
            <div class="text-center">
              <b-img thumbnail :src="img" width="100" height="100"></b-img>
            </div>
            <div class="text-center"><b>{{crewname}}</b></div>
          </b-card-text>
      </b-card>
      -->
  </div>
</template>

<script>
export default {
  name: 'custommember',
  props: {
    img: String,
    crewname: String,
    red: String
  }
}
</script>

<style scoped>
.thumb {
  width: 100%;
  height: auto;
}
</style>