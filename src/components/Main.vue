<template>
  <div class="Main">
    <div class="card"
         v-for="(item,index) in items "
         :key="index"
          @click="getItem(item.id)"
    >
      <div class="card-image">
        <img :src=" item.image">
      </div>
      <div class="card-header">
        <h4>
          {{ item.title }}
        </h4>
      </div>
      <div class="card-bottom">
        Price:
        <div class="price-field"> {{ item.worth === 'N/A' ? item.worth = 'Free' : item.worth }}</div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Main",
  props: ['items'],
  methods: {
    getItem(id){
      this.$router.push('/single-giveaway/'+ id)

    }
  },
  created() {
    fetch(`http://167.99.138.67:4545/giveaways/all`)
        .then(response => response.json())
        .then(data => this.$store.commit('setAll', data))
  }
}
</script>

<style scoped>
.Main {
  width: 1550px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.card {
  margin: 5px;
  width: 300px;
  height: 400px;
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  width: 100%;
}

.card-image {
  height: 65%;
}

.card-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.card-bottom {
  padding: 10px;
  width: 100%;

}

.price-field {
  color: #f60505;
}
</style>