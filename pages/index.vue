<template>
  <div id="home">
    <section class="main__slider__wrapper">
      <main-presenter />
    </section>
    <router-link to="#" class="main__notice">
      <p class="main__notice__text">
        【お知らせ】ｍahocast.com 受信許可設定のお願い
      </p>
    </router-link>
    <section class="main__schedule container">
      <div class="flex-sb content-title-area">
        <router-link to="#">
          <content-title v-bind:title="title_schedule" />
        </router-link>
        <more-btn />
      </div>
      <main-schedule-list />
    </section>
    <section class="main__archive container">
      <div class="flex-sb content-title-area">
        <router-link to="#">
          <content-title v-bind:title="title_channel" />
        </router-link>
        <more-btn />
      </div>
      <main-live-list />
    </section>
    <section class="main__archive container">
      <div class="flex-sb content-title-area">
        <router-link to="#">
          <content-title v-bind:title="title_archive" />
        </router-link>
        <more-btn />
      </div>
      <main-archive-list />
    </section>
    <section class="main__archive container">
      <div class="flex-sb content-title-area">
        <router-link to="#">
          <content-title v-bind:title="title_artist" />
        </router-link>
        <more-btn />
      </div>
      <main-artist-list />
    </section>
  </div>
  <!-- /.home -->
</template>

<script>
import mainApiContents from "@/util/network/provider/mainContents.js";
export default {
  layout: "ore",
  data() {
    return {
      title_schedule: "BROADCAST SCHEDULE",
      title_channel: "MAHOTV CHANNEL",
      title_archive: "ARCHIVE",
      title_artist: "PICKUP ARTIST",
    };
  },
};
</script>

<style scoped>
#home {
  padding: 60px 0;
}
.main__slider__wrapper .swiper-wrapper {
  max-height: 380px;
}

.main__slider__wrapper img {
  max-width: 100%;
  height: auto;
}

.main__notice {
  text-decoration: none;
  margin: 0 auto;
}

.main__notice__text {
  text-align: center;
  padding: 20px;
}
</style>
