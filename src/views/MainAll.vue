<template>
  <div>
    <Main :items="items"/>
    <Paginate/>
  </div>
</template>

<script>
import Main from "@/components/Main";
import Paginate from "@/components/Paginate";

export default {
  name: "MainAll",
  components: {
    Main,
    Paginate
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