<template>
    <div class="item">
        <input type="checkbox">
        <div class="label">{{dataVO.getTitle()}}</div>
        <div class="button-map">
            <i class="fas fa-thumbtack"></i>
            <i class="fas fa-comments"></i>
            <i class="fas fa-redo-alt"></i>
        </div>
        <div class="due-date">{{dataVO.getDate()}}</div>
        <div class="favorite"><i class="far fa-star"></i></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import TodoVO from "../../../vo/TodoVO"

    @Component
    export default class TodoItemComponent extends Vue {
        dataVO: TodoVO;

        created() {
            this.dataVO = new TodoVO();
            this.dataVO.setId("1");
            this.dataVO.setTitle("TEST TODO");
            this.dataVO.setDate('2019-02-10')
        }
    }

</script>

<style scoped>
    .item {
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #f1f4fc;
        padding: 0 10px;
        margin-bottom: 3px;
    }

    .item > .label {
        flex: 1;
        padding: 0 5px;
    }

    .item > .button-map {
        padding: 0 3px;
        font-size: 16px;
    }

    .item > .due-date {
        padding: 0 5px;
    }

    .item > .favorite {
        font-size: 16px;
    }

</style>