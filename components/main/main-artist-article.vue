<template>
  <swiper-slide>
    <div class="main__archive__card">
      <div class="main__archive__card__item border-radius">
        <figure class="main__schedule__card__item__img__wrapper">
          <img v-bind:src="artist.profile_img_url" alt="" />
        </figure>
        <div class="main__archive__card__item__title">
          {{ artist.artist_name }}
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";
import moment from "moment";

export default {
  name: "main-artist-article",
  props: ["artist"],
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
.main__archive__card {
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
    position: relative;
  }
}

.main__schedule__card__item__img__wrapper {
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
}

.main__archive__card__item__title {
  color: black;
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5em;
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>
