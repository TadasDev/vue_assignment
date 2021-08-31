<template>
<div>
  <Sort />
  <Main :items="items" />
</div>
</template>

<script>

import Sort from "@/components/Sort";
import Main from "@/components/Main";

export default {
  name: "SortGiveAway",
  components:{
    Main,
    Sort
  },
  computed:{
    items(){
      return this.$store.state.sortedData
    }
  },
}
</script>

<style scoped>

</style>