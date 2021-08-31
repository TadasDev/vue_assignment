<template>
  <div class="sort-bar">
    <div class="sort">
       By type
      <select name="Type"
              v-model="$store.state.selected['type']">
        <option
            v-for="(type,index) in types" :key="index"
            :value="type">{{ type }}
        </option>
      </select>
      By platform
      <select name="Platform"
              v-model="$store.state.selected['platform']"
      >
        <option
            v-for="(platform,index) in platforms " :key="index"
            :value="platform">{{ platform }}
        </option>
      </select>
      By category
      <select name="SortBy"
              v-model="$store.state.selected['category']"
      >
        <option
            v-for="(category,index) in categories" :key="index"
            :value="category">{{ category }}
        </option>
      </select>
      <button @click="get()"> SORT </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Sort",
  computed: {
    platforms() {
      return this.$store.state.sortBy.platforms
    },
    types() {
      return this.$store.state.sortBy.types
    },
    categories() {
      return this.$store.state.sortBy.categories
    }
  },
  methods: {
    get() {
      this.$store.dispatch('getSortedData')
    }
  }
}
</script>

<style scoped>
.sort-bar {
  width: 100%;
  height: 75px;
}
.sort select{
  background-color: #8be1b9;
  margin: 5px;
  padding:5px;
  width: 200px;
  border-radius: 10px;
}
.sort button{
  background-color: #8be1b9;
  margin: 5px;
  padding:5px;
  width: 120px;
  border-radius: 10px;
}
</style>