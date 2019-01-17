<template>
    <div class="main-container">
        <!-- 사이드 메뉴 -->
        <side-menu></side-menu>
        <todo-main></todo-main>
        <!--<router-link to="/board/write"></router-link>-->
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import SideMenu from "./common/SideMenu";
    import TodoMainContainer from "./common/todo/TodoMainContainer.vue";

    @Component({
        components: {
            'side-menu': SideMenu,
            'todo-main': TodoMainContainer
        }
    })
    export default class MainComponent extends Vue {
    }
</script>

<style scoped>
    .main-container {
        height: 100%;
        display: flex;
    }
</style>