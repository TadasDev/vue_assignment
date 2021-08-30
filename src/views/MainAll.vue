<template>
<div>
    <Main :items="items" />
</div>
</template>

<script>
import Main from "@/components/Main";

export default {
  name: "MainAll",
  components:{
    Main
  },
  computed:{
    items(){
      return this.$store.state.data
    }
  },
}
</script>

<style scoped>

</style>