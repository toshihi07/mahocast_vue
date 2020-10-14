<template>
  <footer class="footer">
    <div class="footer__img__area"></div>
    <!-- /.footer__img__area -->
    <div class="footer__lower">
      <div class="footer__lower__logo-and-btn-area">
        <router-link to="" class="footer__lower__logo-and-btn-area__logo"
          ><img src="https://www.mahocast.com//user/img/logo-bottom.png" alt=""
        /></router-link>
        <div class="footer__lower__logo-and-btn-area__btn-area">
          <router-link
            to=":javascript"
            class="footer__lower__logo-and-btn-area__btn-area__contact-btn"
            >問い合わせ</router-link
          >
          <router-link
            to=":javascript"
            class="footer__lower__logo-and-btn-area__btn-area__to-top-btn"
            >PAGETOP</router-link
          >
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
};
</script>

<style lang="css" scoped>
.footer {
  padding: 20px 0;
}

.footer__img__area {
  width: 100%;
  position: relative;
  height: 160px;
  left: 50%;
  overflow: hidden;
  margin-left: -1230px;
  background-size: auto 100%;
  background-position: 50% 0;
  display: flex;
  justify-content: center;
  background: #fff
    url(https://www.mahocast.com//user/img/footer_img/footer_img25602.jpg)
    no-repeat;
  border-bottom: 5px solid #f58b37;
}

.footer__lower {
  background: #111;
  padding: 20px 30px;
}

.footer__lower__logo-and-btn-area {
  display: flex;
  justify-content: space-between;
}

.footer__lower__logo-and-btn-area__btn-area__contact-btn {
  color: #fff;
}

.footer__lower__logo-and-btn-area__btn-area__to-top-btn {
  color: #fff;
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
