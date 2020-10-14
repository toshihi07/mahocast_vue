<template>
  <div class="main__slider__wrapper">
    <swiper :options="swiperOption">
      <main-archive-article
        v-for="(value, key) in mainArchive"
        v-bind:key="key"
        v-bind:archive="value"
      />
    </swiper>
        <div class="swiper-button-prev" id="archive-swiper-button-prev"></div>
        <div class="swiper-button-next" id="archive-swiper-button-next"></div>
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
        navigation: {
          //ナビゲーション設定
          nextEl: "#archive-swiper-button-next",
          prevEl: "#archive-swiper-button-prev",
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
