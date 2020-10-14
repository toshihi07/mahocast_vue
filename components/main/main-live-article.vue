<template>
  <swiper-slide>
    <div class="main__schedule__card">
      <div class="main__schedule__card__header flex-sb">
        <div class="main__schedule__card__header__date">
          {{ mainLive.created | dateFilter }}
        </div>
        <router-link to="#" class="main__schedule__card__header__ticket">ネットチケット</router-link>
      </div>
      <div class="main__schedule__card__item">
        <figure class="main__schedule__card__item__img__wrapper">
          <img v-bind:src="mainLive.profile_img" alt="" />
        </figure>
        <div class="main__schedule__card__item__title">
          {{ mainLive.title }}
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";
import moment from "moment";

export default {
  name: "main-schedule-article",
  props: ["mainLive"],
  data() {
    return {
    };
  },
  filters: {
    dateFilter: function (date) {
      return moment(date).format("YYYY.MM.DD");
    },
  },
};
</script>

<style lang="scss" scoped>
.main__schedule__card {
  &__header {
    margin-bottom: 5px;
    &__date {
      font-size: 14px;
      color: #9a9a9a;
      margin: auto 0;
    }
    &__ticket {
      font-size: 12px;
      border: 1px solid orange;
      padding: 5px 3px;
      text-align: center;
      color: orange;
      border-radius: 3px;
      margin-left: 3px;
      text-decoration: none;
    }
  }
  &__item {
    border: 1px solid #ddd;
  }
}

.main__schedule__card__item__img__wrapper {
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
}

.main__schedule__card__item__title {
  padding: 10px;
  display: -webkit-box;
  color: black;
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  border-top: 1px solid #ddd;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5em;
  height: 4em;
}
</style>
