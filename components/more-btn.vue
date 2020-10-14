<template >
<div class="more-btn">
  MORE
</div>
</template>

<script>
export default {
  name: "more-btn",
  props:[""],
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.more-btn {
  cursor: pointer;
}

.more-btn:hover {
  color: orange;
}
</style>