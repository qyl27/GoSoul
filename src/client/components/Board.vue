<template>
  <div id="board">
  </div>
</template>

<script>
import {SVGBoard} from "wgo";
import {io} from "socket.io-client";

export default {
  name: "Board",
  mounted() {
    let url = '/api/play';
    let socket = io(url, { autoConnect: true });
    socket.connect();


    let board = new SVGBoard(document.getElementById('board'), {
      width: 600,
      size: 19
    });
    board.on("click", event => {
      alert(event.type);
    })
  }
}
</script>

<style scoped>

</style>
