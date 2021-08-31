<template>
  <div class="Main" v-if="$store.state.error === false">
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
      <div class="card-bottom"
      >
        Price:
        <div
            :class="[item.worth.substring(1) < 10 || item.worth === 'Free' ? 'price-in-green' : 'price-in-yellow']">
          {{ item.worth === 'N/A' ? item.worth = 'Free' : item.worth }}
        </div>
      </div>

    </div>

  </div>
  <div v-else
  class="error-message"
  >
   <h3> {{$store.state.errorMessage}} </h3>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: ['items'],
  methods: {
    getItem(id) {
      this.$router.push('/single-giveaway/' + id)

    },
  },
  created() {
    this.$store.dispatch('getData')
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
  background-color: #8be1b9;
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

.price-in-yellow {
  color: yellow;
}

.price-in-green {
  color: green;
}
.error-message{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>