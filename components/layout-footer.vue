<template>
  <footer class="footer">
    <div class="footer__img__area">
      <div class="footer__img__area__left">
        <figure class="footer__img__area__left__img-area">
          <img
            src="https://www.mahocast.com/user/img/footer_img/tamaticket.png"
            alt=""
          />
        </figure>
        <div class="footer__img__area__left__text-area">
          <p class="text-upper">ストーンを使ってライブを楽しもう！</p>
          <p class="text-lower">
            <span class="text-yellow">ネットチケット</span>と<span
              class="text-yellow"
              >投げ銭</span
            >
          </p>
          <button class="footer__img__area__button">ストーン利用ガイド</button>
        </div>
      </div>
      <div class="footer__img__area__right">
        <div class="footer__img__area__left__text-area">
          <p class="text-upper">好きなアーティストの</p>
          <p class="text-lower"><span class="text-yellow">ファン</span>になってください！</p>
          <button class="footer__img__area__button">FANページを楽しむ方法</button>
        </div>
        <figure class="footer__img__area__left__img-area">
          <img
            src="https://www.mahocast.com/user/img/footer_img/mahotama_cha.png"
            alt=""
          />
        </figure>
      </div>
    </div>
    <!-- /.footer__img__area -->
    <div class="footer__lower">
      <div class="footer__lower__logo-and-btn-area">
        <router-link to="" class="footer__lower__logo-and-btn-area__logo"
          ><img src="https://www.mahocast.com//user/img/logo-bottom.png" alt=""
        /></router-link>
        <div class="footer__lower__logo-and-btn-area__btn-area">
          <router-link
            to="/contact"
            class="footer__lower__logo-and-btn-area__btn-area__contact-btn"
          >
            <span>問い合わせ</span>
          </router-link>
          <button
            class="footer__lower__logo-and-btn-area__btn-area__to-top-btn"
            @click="scrollTop"
          >
            <font-awesome-icon icon="arrow-up" style="font-size: 15px" />
            <p>PAGE</p>
            <p>TOP</p>
          </button>
        </div>
      </div>
      <!-- /.footer__lower__logo-and-btn-area__btn-area -->
      <div class="footer__lower__nav">
        <ul class="footer__lower__nav__list">
          <li class="footer__lower__nav__list__item>">Announce</li>
          <li class="footer__lower__nav__list__item>">|</li>
          <li class="footer__lower__nav__list__item>">mahocastとは</li>
          <li class="footer__lower__nav__list__item>">|</li>
          <li class="footer__lower__nav__list__item>">利用規約</li>
          <li class="footer__lower__nav__list__item>">|</li>
          <li class="footer__lower__nav__list__item>">プライバシーポリシー</li>
          <li class="footer__lower__nav__list__item>">|</li>
          <li class="footer__lower__nav__list__item>">特定商取引</li>
          <li class="footer__lower__nav__list__item>">|</li>
          <li>
            <select
              class="footer__lower__nav__list__item__lang-select"
              name=""
              id=""
            >
              <option value="">English</option>
              <option value="">Korean</option>
              <option value="" selected="selected">Japanese</option>
            </select>
          </li>
        </ul>
      </div>
      <p class="footer__copyright">
        Copyright© 2018 STONE.B inc., All Rights Reserved.
      </p>
    </div>
    <!-- /.footer__lower -->
  </footer>
</template>

<script>
export default {
  name: "layout-footer",
  methods: {
    scrollTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="css" scoped>
.footer {
  padding: 20px 0;
}

.footer__img__area {
  position: relative;
  height: 160px;
  display: flex;
  justify-content: space-around;
  background: #fff
    url("https://www.mahocast.com//user/img/footer_img/footer_img25602.jpg")
    no-repeat;
  background-size: 100% 100%;
  border-bottom: 5px solid #f58b37;
}

.footer__img__area .text-upper{
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.footer__img__area .text-lower{
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.text-lower span {
  color: #fff799;
}

.footer__img__area__button {
    color: #fff799;
    padding: 5px 10px;
    background: transparent;
    border: 2px solid #fff799;
    font-size: 18px;
    border-radius: 15px;
    cursor: pointer;
}
 

.footer__img__area__right,
.footer__img__area__left {
  display: flex;
  align-items: center;
}

.footer__lower {
  background: #111;
  padding: 20px 30px;
  font-size: 1rem;
}

.footer__lower__nav ul li {
  margin: 0 7px;
}

.footer__lower__logo-and-btn-area {
  display: flex;
  justify-content: space-between;
}

.footer__lower__logo-and-btn-area__btn-area {
  display: flex;
}

.footer__lower__logo-and-btn-area__btn-area__contact-btn {
  width: 130px;
  color: #fff;
  height: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
  border-radius: 15px;
  margin-right: 15px;
  background: linear-gradient(to right, #f1b157 0%, #e1633a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__lower__logo-and-btn-area__btn-area__contact-btn span {
  width: 124px;
  height: 44px;
  border-radius: 13px;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  color: orange;
}

.footer__lower__logo-and-btn-area__btn-area__to-top-btn {
  color: #fff;
  background: #000;
  border: 0.5px solid #fff;
  font-size: 12px;
  cursor: pointer;
}

.footer__lower__nav__list {
  display: flex;
  color: #fff;
  padding: 15px 0 0 0;
}

.footer__copyright {
  color: #fff;
  font-size: 12px;
}
</style>
