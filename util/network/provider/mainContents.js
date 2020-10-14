


export default {
  data() {
    return {
      baseUrl: "http://localhost:8081/ap/api",
    };
  },
  methods: {
    httpGet(url) {
      return this.$http.$get(url);
    },
    // A005 main-presentation-rotater
    async apiGetMainPresentationRotater() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/presentation"))
        .resultData.presentation_list;
    },
    // A008 main-concert-schedule-list
    async apiGetMainConcertScheduleList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/broadcast"))
        .resultData.broadcast_list;
    },
    // A013 main-previous-concert-list
    async apiGetMainPreviousConcertList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/previous"))
        .resultData.previous_list.content;
    },
    // A018 main-live-member-list
    async apiGetMainLiveMemberList() {
      return (
        await this.httpGet(this.baseUrl + "/app/v2/main/previous/personal")
      ).resultData.previous_list.content;
    },
    // A020 main-banner-list
    async apiGetMainBannerList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/banner"))
        .resultData.banner_list;
    },
    // A023 main-hall-list
    async apiGetMainHallList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/hall")).resultData
        .hall_list;
    },
    // A029 main-news-list
    async apiGetMainNewsList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/news")).resultData
        .news_list;
    },
    // A033 main-partner-list
    async apiGetMainPartnerList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/partner"))
        .resultData.partner_list;
    },
    // A040 main-partner-list
    async apiGetMainSupporterList() {
      return (await this.httpGet(this.baseUrl + "/app/v2/main/support"))
        .resultData.support_list;
    },
  },
};
