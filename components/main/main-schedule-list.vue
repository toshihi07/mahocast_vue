<template>
  <div class="main__schedule__slider__wrapper">
    <swiper :options="swiperOption">
      <main-schedule-article
        v-for="(value, key) in mainSchedule"
        v-bind:key="key"
        v-bind:schedule="value"
      />
    </swiper>
      <div class="swiper-button-prev" id="partner-swiper-button-prev"></div>
      <div class="swiper-button-next" id="partner-swiper-button-next"></div>
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
      mainSchedule: [],
      swiperOption: {
        slidesPerView: 3,
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
    this.mainSchedule = await this.apiGetMainConcertScheduleList();
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
