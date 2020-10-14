export default {
  methods: {
      httpGet(url, options = null) {
          return this.$http.$get(url, options);
      },
      httpPost(url, body = null, options = null) {
          return this.$http.$post(url, body, options);
      },
      httpPut(url, body = null, options = null) {
          return this.$http.$put(url, body, options);
      },
      httpDelete(url, body = null, options = null) {
          return this.$http.$delete(url, body, options);
      }
  }
}