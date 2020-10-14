<template>
    <div class="main__slider__wrapper">
        <swiper :options="swiperOption">
            <main-artist-article v-for="(value, key) in mainArtist" v-bind:key="key" v-bind:artist="value" />
        </swiper>
        <div class="swiper-button-prev" id="artist-swiper-button-prev"></div>
        <div class="swiper-button-next" id="artist-swiper-button-next"></div>
    </div>
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";

export default {
    name: "main-schedule-list",
    mixins: [mainApiContents],
    props: ["title"],
    data() {
        return {
            mainArtist: [],
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 20,
                navigation: {
                    //ナビゲーション設定
                    nextEl: "#artist-swiper-button-next",
                    prevEl: "#artist-swiper-button-prev",
                },
            },
        };
    },
    async fetch() {
        this.mainArtist = await this.apiGetMainPartnerList();
    },
};
</script>

<style lang="scss" scoped>
.content__title {
    h3 {
        font-size: 20px;
        font-weight: bold;
        margin: 50px 40px 10px 40px;
    }
}

.swiper-wrapper {
    padding: 50px;
}
</style>
