<template >
<div class="main__notice">
  <h3 clasS="main__notice__text">{{ theme }}</h3>
</div>
</template>

<script>
export default {
  name: "main_notice",
  data(){
    return{
    theme:"Scedule"
    }
  }
}
</script>

<style lang="scss" scoped>
.content_title {
  margin:  auto;
  padding: 20px 0;
  background: #919ac2;
  h1 {
    color:white;
    text-align: center;
}
}
</style>