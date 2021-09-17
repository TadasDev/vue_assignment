<template>
  <div class="single">
    <div class="box">
      <div class="image-container">
        <img :src="item.thumbnail">
      </div>
      <div class="box-text">
        <div>
          <h3> Title: </h3>{{ item.title }}
        </div>
        <div>
          <h3> Description: </h3>
          {{ item.description }}
        </div>
        <div>
          <h3> Instructions: </h3>
          {{ item.instructions }}
        </div>
        <div>
          <h3> Type: </h3>
          {{ item.type }}
        </div>
        <div class="small">
          <div >
            <h4> Platforms:</h4>

            {{ item.platforms }}
          </div >
          <div >
            <h4> Ends on :</h4>

            {{ item.end_date }}
          </div>

        </div>
        <div>
          <h3> Price: </h3>
          {{ item.worth === 'N/A' ? item.worth = 'Free' : item.worth }}
        </div>
        <button @click="goToWebsite(item.open_giveaway_url)"> Get Your Game at this website</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Single",
  methods: {
    goToWebsite: function (url) {
      window.location.href = url;
    }
  },
  computed: {
    item() {
      return this.$store.state.item
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('getItem', id)
  }
}
</script>

<style scoped>
.box {
  margin: 0 auto;
  height: 800px;
  width: 1000px;
  display: flex;
 background-color: antiquewhite;
}

.image-container {
  width: 40%;
  display: flex;
}

.image-container img {
  object-fit: cover;
}

.box-text {
  height: 97%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}

.box button {
  padding: 5px;
}

.small {
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.small div{
  width: 50%;
}
</style>