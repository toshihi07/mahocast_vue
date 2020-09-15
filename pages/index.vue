<template>
  <div class="home">
    <section class="main_slider">
      <div>
        <swiper :options="swiperOption">
          <swiper-slide
            ><img
              src="http://nekokaji.com/wp-content/uploads/2019/05/B660589B-D620-4577-9307-A5F0D2CC9B94-e1559156982254.jpeg"
          /></swiper-slide>
          <swiper-slide>
            <img
              src="http://nekokaji.com/wp-content/uploads/2018/12/boshu-top-3.png"
          /></swiper-slide>
          <div class="swiper-button-prev pc-prev" slot="button-prev"></div>
          <div class="swiper-button-next pc-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>

    <section class="schedule_area">
      <div class="container">
        <p class="schedule_area_text">
          新宿・歌舞伎町にあるポーカー初心者専門のアミューズメントカジノです。<br />
          ポーカーの他にもブラックジャックやバカラも楽しむことができます。
        </p>
        <div class="schedule_img_area">
          <img
            src="http://nekokaji.com/wp-content/uploads/2019/05/nekokajitnm.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="content_area">
      <div class="container">
        <div class="content_items">
          <div class="content_item">
            <p class="item_title">お店の紹介</p>
            <div class="item_img_area">
              <img
                class="item_img"
                slot=""
                src="http://nekokaji.com/wp-content/uploads/2018/12/nekokaji-about.png"
                alt=""
              />
            </div>
            <p class="item_explanation">
              ネコカジってどんなお店？ネコカジで遊べるゲームも紹介します。
            </p>
            <div class="detail_btn">詳しくはこちら</div>
          </div>
          <div class="content_item">
            <p class="item_title">料金システム</p>
            <div class="item_img_area">
              <img
                class="item_img"
                slot=""
                src="http://nekokaji.com/wp-content/uploads/2018/12/nekokaji-system-1.png"
                alt=""
              />
            </div>
            <p class="item_explanation">
              ネコカジってどんなお店？ネコカジで遊べるゲームも紹介します。
            </p>
            <div class="detail_btn">詳しくはこちら</div>
          </div>
          <div class="content_item">
            <p class="item_title">アクセス</p>
            <div class="item_img_area">
              <img
                class="item_img"
                slot=""
                src="http://nekokaji.com/wp-content/uploads/2018/12/map-logo.png"
                alt=""
              />
            </div>
            <p class="item_explanation">
              ネコカジってどんなお店？ネコカジで遊べるゲームも紹介します。
            </p>
            <div class="detail_btn">詳しくはこちら</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  layout: "ore",
  data() {
    return {
      swiperOption: {
        loop: true, //無限ループ
        autoplay: {
          //スライドの自動切り替え
          delay: 5000, //スライドの自動切り替えの秒数
          disableOnInteraction: false //何らかのアクション後の自動切り替えを再開
        },
        pagination: {
          //ページネーション設定
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          //ナビゲーション設定
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style scoped>
.main_slider .swiper-wrapper {
  max-height: 380px;
}

.main_slider img {
  max-width: 100%;
  height: auto;
}

.schedule_area {
  padding: 3rem 0 3rem;
}

.schedule_area .schedule_area_text {
  text-align: center;
  margin-bottom: 30px;
}

.schedule_img_area {
  margin-bottom: 20px;
}

.schedule_img_area {
  text-align: center;
}

.content_area {
  padding-bottom: 50px;
  border-bottom: 3px solid #337ab7;
}

.content_area .content_items {
  display: flex;
  justify-content: flex-start;
}

.content_area .content_item {
  flex:1; 
  padding: 0 15px;
}

.content_area .item_title {
  border-bottom: 1px solid #337ab7;
  padding: 10px;
  margin-bottom: 20px;
}

.content_area .item_img_area {
  border: 1px solid #e5e5e5;
}

.content_area img {
  max-width: 100%;
}

.content_area .item_explanation {
  padding: 10px 0;
}

.content_area .detail_btn {
  border: 1px solid#919ac2;
  color: #919ac2;
  padding: 5px;
  width: 50%;
  text-align: center;
}
</style>
