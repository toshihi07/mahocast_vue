<template>
  <swiper :options="swiperOption" class="swiper-presenter">
    <swiper-slide class="main-presenter" v-for="(mainPresenter,index) in mainPresenters" :key="index">
      <img v-bind:src="mainPresenter.image_url"
    /></swiper-slide>
    <div class="swiper-button-prev pc-prev" slot="button-prev" id="presenter-concert-swiper-button-prev"></div>
    <div class="swiper-button-next pc-next" slot="button-next" id="presenter-concert-swiper-button-next"></div>
  </swiper>
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";

export default {
  name: "main-presenter",
  mixins: [mainApiContents],
  props: ["title"],
  data() {
    return {
      mainPresenters: [],
      swiperOption: {
        slidesPerView: 1,
        navigation: {
          //ナビゲーション設定
          nextEl: "#presenter-concert-swiper-button-next",
          prevEl: "#presenter-concert-swiper-button-prev",
        },
      },
    };
  },
  async fetch() {
    this.mainPresenters = await this.apiGetMainPresentationRotater();
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

.main-presenter img {
  height: 300px;
}
</style>
