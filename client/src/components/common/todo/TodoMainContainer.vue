<template>
    <div class="container">
        <div class="add-area">
            <input type="text" class="add-input" placeholder="Add TODO..."
                   v-model="value" @keydown.enter="addTodoItem">
            <button class="add-button" @click="addTodoItem"><i class="fa fa-plus"></i></button>
        </div>
        <div class="todo-area">
            <todo-item v-for="item in todoList"
                       :data="item"
                       :key="item.getId()"
                       @click.native="activeTodo(item)">
            </todo-item>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TodoItemComponent from "./TodoItemComponent.vue";
    import TodoVO from "../../../vo/TodoVO";
    import util from "../../common/util/Utils"

    @Component({
        components: {
            'todo-item': TodoItemComponent
        }
    })
    export default class TodoMainContainer extends Vue {
        todoList: Array<TodoVO> = [];
        value: string = "";

        addTodoItem() {
            if (this.value.length > 0) {
                let todoItem = new TodoVO();
                todoItem.setId(util.uuid());
                todoItem.setTitle(this.value);

                this.todoList.push(todoItem);
                this.value = "";
            }
        }

        activeTodo(item) {
            this.$emit("selectItem", item);
        }
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