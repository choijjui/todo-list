<template>
    <div class="container">
        <div class="add-area">
            <input type="text" class="add-input" placeholder="Add TODO...">
            <button class="add-button"><i class="fa fa-plus"></i></button>
        </div>
        <div class="todo-area">
            <todo-item></todo-item>
            <todo-item></todo-item>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TodoItemComponent from "./TodoItemComponent.vue";

    @Component({
        components: {
            'todo-item': TodoItemComponent
        }
    })
    export default class TodoMainContainer extends Vue {

    }
</script>

<style scoped>
    .container {
        overflow: auto;
        flex: 1;
        padding: 10px;
        background-color: #fefeff;
    }

    .container > .add-area {
        display: flex;
        padding-bottom: 10px;
    }

    .container > .add-area > .add-input {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
    }

    .container > .add-area > .add-button {
        background-color: #7287c8;
        border: none;
        width: 100px;
        margin-left: 10px;
        color: #f8f8f8;
        border-radius: 3px;
    }

    .container > .add-area > .add-button:hover {
        background-color: #7F94D5;
    }

</style>