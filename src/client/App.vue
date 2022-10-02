<template>
  <div>
    <h1>GoSoul</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Board from "./components/Board.vue";
export default {
  name: "App",
  components: {Board}
}
</script>

<style scoped>

</style>
