<template>
  <div>
    <Sort/>
    <Main :items="items"
    />
    <Paginate/>
  </div>
</template>

<script>

import Sort from "@/components/Sort";
import Main from "@/components/Main";
import Paginate from "@/components/Paginate";

export default {
  name: "SortGiveAway",
  components: {
    Paginate,
    Main,
    Sort
  },
  computed: {
    items() {
      return this.$store.state.page
    }
  },
}
</script>

<style scoped>

</style>