<template>
  <div class="main__slider__wrapper">
    <swiper :options="swiperOption">
      <main-schedule-article
        v-for="(value, key) in mainSchedule"
        v-bind:key="key"
        v-bind:schedule="value"
      />
    </swiper>
      <div class="swiper-button-prev" id="schedule-swiper-button-prev"></div>
      <div class="swiper-button-next" id="schedule-swiper-button-next"></div>
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
        navigation: {
          //ナビゲーション設定
          nextEl: "#schedule-swiper-button-next",
          prevEl: "#schedule-swiper-button-prev",
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
