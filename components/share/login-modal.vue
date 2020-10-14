<template>
  <transition name="modal" appear v-if="showing">
    <div class="modal modal-overlay" @click.self="close">
      <!-- Login//s -->
      <div class="ctc-modal inmodal modal" id="ctc-login-modal">
        <div class="ctc-modal-dialog modal-dialog">
          <div class="ctc-modal-content">
            <div class="ctc-modal-header">
              <img class="ctc-login-logo" src="/curtaincall-front/img/sample/logo_sample.png" alt />
            </div>
            <div class="ctc-modal-body">
              <form action="POST" v-on:submit.prevent="onSubmit" ref="loginForm">
                <div class="ctc-titlebar ctc-flex-cn">
                  <h4>LOG IN</h4>
                  <div class="ctc-middle-line"></div>
                </div>
                <div class="ctc-flex-cn" style="flex-direction: column;">
                  <input
                    class="ctc-input"
                    type="text"
                    placeholder="メールアドレスを入力してください。"
                    name="account"
                    v-model="account"
                  />
                  <input
                    class="ctc-input"
                    type="password"
                    placeholder="パスワードを入力してください。"
                    name="pw"
                    v-model="password"
                  />
                  <div class="ctc-checkbox ctc-logino-modal-chkbox ctc-flex-cn">
                    <input class="ctc-loginChk" id="ctc-agree-lg" type="checkbox" />
                    <label class="ctc-loginChk-text" for="ctc-agree-lg">ログイン情報を保存る</label>
                  </div>
                  <button class="ctc-loginBtn ctc-flex-cn" type="submit">ログイン</button>
                </div>
              </form>
              <div class="ctc-TBborder"></div>
            </div>
            <div class>
              <div class="ctc-login-btn ctc-flex-sb">
                <div class="ctc-subText">パスワードを忘れた方は</div>
                <a class="ctc-subBtn ctc-flex-cn" href="javascript:;" v-on:click="goResetPassword">パスワード探し</a>
              </div>
              <div class="ctc-login-btn ctc-flex-sb">
                <div class="ctc-subText">新規アカウント登録は</div>
                <a class="ctc-subBtn ctc-flex-cn" href="javascript:;" v-on:click="goMemberJoin">アカウント登録</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#" rel="modal:close" class="close-modal" v-on:click="close"><i class="xi-close-thin xi-x"></i></a>
      </div>

    </div>
    <!-- Login//e -->
  </transition>
</template>

<script scope>
//__ import __//
import EVT_CONST from "@/util/constant/eventconst";
import memberApiContent from "@/util/network/provider/member";
import memberStorage from "@/util/curtaincall/member";
import formValidator from "@/util/string/formValidator";
import { mapMutations } from 'vuex'

//__ export __//
export default {
  //__ name __//
  name: "login-modal",
  //__ mixin __//
  mixins: [memberApiContent, memberStorage, formValidator],

  //__ data __//
  data() {
    return {
      showing: false,
      account: "",
      password: ""
    };
  },

  //__ lifecycle __//
  created: function() {
    this.$nuxt.$on(EVT_CONST.SHOW_LOGIN_MODAL, isShow => {
      this.showing = isShow;
    });
  },

  //__ custom method __//
  methods: {
    close() {
      this.showing = false;
    },
    goResetPassword() {
      this.close();
      this.$router.push('/member/resetpwd') 
    },
    goMemberJoin() {
      this.close();
      this.$router.push('/member/join') 
    },
    onSubmit() {
      var formData = new FormData(this.$refs.loginForm);

      if (!formData.get("account")) {
        alert("account is null");
        return;
      }

      if (!formData.get("pw")) {
        alert("pw is null");
        return;
      }

      this.executeLogin(formData);
    },
  }
};
</script>


<style  scoped>
#ctc-login-modal .ctc-modal-dialog {
    background: white;
}
.modal.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}
.modal-window {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.modal-content {
  padding: 10px 20px;
}
.modal-footer {
  background: #ccc;
  padding: 10px;
  text-align: right;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

#ctc-login-modal .ctc-input {
    border: 1px solid #C1C1C1;
}

#ctc-login-modal >>> .close-modal {
    position: absolute;
    top: -5px;
    right: 0px;
    display: block;
    width: 36px;
    height: 36px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center center;
}

#ctc-login-modal i {
    font-weight: 900 !important;
    color: white;
    font-size: 1.7em !important;
    line-height: .75em;
    vertical-align: -15%;
}

</style>

