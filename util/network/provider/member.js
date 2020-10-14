import api from "@/util/network/provider/api";
import API_CONST from "@/util/constant/apiconst";

export default {
    mixins: [api],
    methods: {
        // U001 member_login
        async apiPostMemberLogin(formData, headers) {
            return (await this.httpPost(API_CONST.MEMBER_LOGIN, formData, headers));
        }, 
        // U002 member_join
        async apiPostMemberJoin(formData, headers) {
            return (await this.httpPost(API_CONST.MEMBER_JOIN, formData, headers));
        }, 
        // U002 Email Approve
        async apiPostMemberApprove(formData) {
            return (await this.httpPost(API_CONST.MEMBER_APPROVE_EMAIL, formData));
        }, 
    }
}