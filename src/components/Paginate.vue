<template>
  <div class="main">
    <div class="paginate">
      <div v-for="(number,index) in $store.state.totalPages" :key="index"
           @click="getIndex(index)"
           :class="[$store.state.currentIndex === index ? 'clicked': '']"
      >
        {{ number }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginate",
  methods: {
    getIndex(index) {
      this.$store.commit('SetIndex', index)
    }
  },
}
</script>

<style scoped>
.clicked {
  border-radius: 5px;
  border: 2px solid black;
}

.paginate {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
}

.paginate div {
  padding: 15px;
}
</style>