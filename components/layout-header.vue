<template>
  <header class="header">
    <div class="header__inner">
      <nav class="header__inner__pc-nav">
        <figure class="header__innner__logo">
          <router-link to="/"
            ><img
              src="https://www.mahocast.com//user/img/logo.png"
              alt=""
          /></router-link>
        </figure>
        <ul class="header__innner__nav_area">
          <li class="header__innenr__link">
            <router-link to="/">ABOUT</router-link>
          </li>
          <li class="header__innenr__link">
            <router-link to="/schedule">SCHEDULE</router-link>
          </li>
          <li class="header__innenr__link">
            <router-link to="/cash-game">ARCHIVE</router-link>
          </li>
          <li class="header__innenr__link">
            <router-link to="/payment-system">MUSIC</router-link>
          </li>
          <li class="header__innenr__link">
            <router-link to="/access">ARITIST</router-link>
          </li>
        </ul>
        <div class="header__inner__login-area">
          <button class="header_link">
            <router-link to="/">ログイン</router-link>
          </button>
          <button class="header_link">
            <router-link to="/schedule">登録</router-link>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "layout-header",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="css" scoped>
.header {
  padding: 10px 0;
  background: #111;
}

.header__inner {
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  color: white;
}

.header__inner__pc-nav {
  display: flex;
}

.header .header__innner__nav_area {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.header_login_area {
  display: flex;
}

.header .header_link {
  padding: 20px 10px;
  text-decoration: none;
}
</style>
