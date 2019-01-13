<template>
    <div class="main-container">
        <!-- 사이드 메뉴 -->
        <side-menu></side-menu>
        <router-link to="/board/write">글쓰기</router-link>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import SideMenu from "./common/SideMenu";

    @Component({
        components: {
            'side-menu': SideMenu
        }
    })
    export default class MainComponent extends Vue {
    }
</script>

<style scoped>
    .main-container {

    }

    .main-container > .side-menu {
        float: left;
    }

</style>