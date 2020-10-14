<template>
    <div class="content__title">
        <h3 class="content_title__theme">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: "content-title",
    props: ["title"],
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.content__title {
    h3 {
        font-size: 20px;
        font-weight: bold;
    }
}
</style>