<template>
    <div class="item">
        <label>
            <input type="checkbox">
            <div class="label">{{data.getTitle()}}</div>
        </label>
        <div class="button-map">
            <i class="fas fa-thumbtack"></i>
            <i class="fas fa-comments"></i>
            <i class="fas fa-redo-alt"></i>
        </div>
        <div class="due-date">{{data.getDate()}}</div>
        <div class="favorite"><i class="far fa-star"></i></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import TodoVO from "../../../vo/TodoVO"

    @Component
    export default class TodoItemComponent extends Vue {
        @Prop()
        data: TodoVO;
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

    .item:hover {
        background-color: #E9ECF4;
    }

    .item > label > .label {
        padding: 0 5px;
    }

    .item > label {
        display: flex;
        align-items: center;
        flex: 1;
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