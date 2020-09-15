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
          <li class="header__inner__link">
            <router-link to="/">ABOUT</router-link>
          </li>
          <li class="header__inner__link">
            <router-link to="/schedule">SCHEDULE</router-link>
          </li>
          <li class="header__inner__link">
            <router-link to="/cash-game">ARCHIVE</router-link>
          </li>
          <li class="header__inner__link">
            <router-link to="/payment-system">MUSIC</router-link>
          </li>
          <li class="header__inner__link">
            <router-link to="/access">ARITIST</router-link>
          </li>
        </ul>
        <ul class="header__inner__login-area">
            <li class="header__inner__link"><router-link to="/">ログイン</router-link></li>
            <li class="header__inner__link"><router-link to="/">登録</router-link></li>
        </ul>
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
  height: 60px;
  padding: 10px 0;
  background: #111;
}

.header a{
  color:white;
}

.header__inner {
  max-width: 1260px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 0 auto;
  display: flex;
  color: white;
}

.header__inner__pc-nav {
  display: flex;
  width: 100%;
}

.header .header__innner__nav_area {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-left: 10px;
}

.header__inner__login-area {
  display: flex;
  margin-left: auto;
}

.header .header__inner__link {
  padding: 10px;
  font-style: 15px;
  text-decoration: none;
}

.header__innner__nav_area .header__inner__link:hover {
color:#f58b37;
transition: 0.25s;
}
</style>
