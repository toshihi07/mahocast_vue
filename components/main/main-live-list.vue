<template>
  <div class="main__slider__wrapper">
    <swiper :options="swiperOption">
      <main-schedule-article
        v-for="(value, key) in mainLives"
        v-bind:key="key"
        v-bind:mainLive="value"
      />
    </swiper>
      <div class="swiper-button-prev" id="live-swiper-button-prev"></div>
      <div class="swiper-button-next" id="live-swiper-button-next"></div>
  </div>
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";

export default {
  name: "main-live-list",
  mixins: [mainApiContents],
  props: ["title"],
  data() {
    return {
      mainLives: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          //ナビゲーション設定
          nextEl: "#live-swiper-button-next",
          prevEl: "#live-swiper-button-prev",
        },
      },
    };
  },
  async fetch() {
    this.mainLives = await this.apiGetMainLiveMemberList();
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
