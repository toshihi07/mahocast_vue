<template>
  <div class="main__schedule__slider__wrapper">
    <swiper :options="swiperOption">
      <main-archive-article
        v-for="(value, key) in mainArchive"
        v-bind:key="key"
        v-bind:archive="value"
      />
        <div class="swiper-button-prev" id="partner-swiper-button-prev"></div>
        <div class="swiper-button-next" id="partner-swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";

export default {
  name: "main-archive-list",
  mixins: [mainApiContents],
  props: ["title"],
  data() {
    return {
      mainArchive: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
          //スライドの自動切り替え
          delay: 5000, //スライドの自動切り替えの秒数
          disableOnInteraction: false, //何らかのアクション後の自動切り替えを再開
        },
        navigation: {
          //ナビゲーション設定
          nextEl: "#partner-swiper-button-next",
          prevEl: "#partner-swiper-button-prev",
        },
      },
    };
  },
  async fetch() {
    this.mainArchive = await this.apiGetMainPreviousConcertList();
  },
};
</script>

<style lang="scss" scoped>

.swiper-wrapper {
  padding: 50px;
}
</style>
