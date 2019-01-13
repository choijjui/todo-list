<template>
    <div class="side-menu">
        <!-- 사용자 정보 -->
        <div class="user-info">
            <div class="profile"><i class="fas fa-user"></i></div>
            <div class="name" v-text="userInfo.user_name"></div>
            <div class="icon"><i class="fa fa-bell"></i></div>
            <div class="icon"><i class="fa fa-comment"></i></div>
            <div class="icon"><i class="fa fa-search"></i></div>
        </div>
        <div class="user-menu">

        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class SideMenu extends Vue {
        userInfo: any;

        created() {
            this.userInfo = {
                user_id: "admin",
                user_name: "관리자",
                email: "choijunah@gmail.com"
            }
        }
    }
</script>

<style scoped>
    .side-menu {
        width: 250px;
    }

    .side-menu > .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #7287c8;
        color: #f8f8f8;
        padding: 3px;
        height: 40px;
    }

    .side-menu > .user-info > .profile {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        text-align: center;
        background-color: #abb7d4;
    }

    .side-menu > .user-info > .name {
        flex: 1;
        padding: 0px 5px;
    }

    .side-menu > .user-info > .icon {
        padding-right: 10px;
        font-size: 16px;
    }

    .side-menu > .user-menu {
        height: 400px;
        background-color: #f1f4fc;
    }

</style>