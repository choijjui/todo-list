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
            <ul>
                <li v-for="item in menuList">
                    <i class="fa fa-bars"></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class SideMenu extends Vue {
        userInfo: any;
        menuList:Array<any>;

        created() {
            this.userInfo = {
                user_id: "admin",
                user_name: "관리자",
                email: "choijunah@gmail.com"
            }

            this.menuList = [
                {id: 'menu_001', name: '메뉴 1', seq: 0 },
                {id: 'menu_002', name: '메뉴 2', seq: 1 },
                {id: 'menu_003', name: '메뉴 3', seq: 2 }
            ]
        }
    }
</script>

<style scoped>
    .side-menu {
        width: 250px;
        height: 100%;
        background-color: #f1f4fc;
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
        cursor: pointer;
    }

    .side-menu > .user-menu {
    }

    .side-menu > .user-menu > ul > li {
        height: 40px;
        line-height: 40px;
        padding: 0px 10px;
    }

    .side-menu > .user-menu > ul > li:hover {
        background-color: #E9ECF4;
    }
    .side-menu > .user-menu > ul > li.active {
        background-color: #dce0ec;
    }

</style>