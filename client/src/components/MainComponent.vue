<template>
    <div class="main-container">
        <!-- 사이드 메뉴 -->
        <side-menu></side-menu>
        <!-- 메인 영역 -->
        <todo-main v-on:selectItem="onActive"></todo-main>
        <!-- detail 영역 -->
        <todo-detail v-if="activeItem.getId() != null"
                     :data="activeItem"></todo-detail>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import SideMenu from "./common/SideMenu";
    import TodoMainContainer from "./common/todo/TodoMainContainer.vue";
    import TodoDetailContainer from "./common/todo/TodoDetailContainer";
    import TodoVO from "../vo/TodoVO";

    @Component({
        components: {
            'side-menu': SideMenu,
            'todo-main': TodoMainContainer,
            'todo-detail': TodoDetailContainer
        }
    })
    export default class MainComponent extends Vue {
        activeItem: TodoVO = new TodoVO();

        onActive(item: TodoVO) {
            this.activeItem = item;
        }
    }
</script>

<style scoped>
    .main-container {
        height: 100%;
        display: flex;
    }
</style>