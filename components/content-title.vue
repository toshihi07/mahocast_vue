<template >
<div class="content_title">
  <h1 class="content_title__theme">{{ theme }}</h1>
</div>
</template>

<script>
export default {
  name: "content-title ",
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