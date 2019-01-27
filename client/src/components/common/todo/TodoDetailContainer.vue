<template>
    <div class="todo-detail">
        <div class="form">
            <label>
                <input type="checkbox">
                <div class="label">{{data.getTitle()}}</div>
            </label>
        </div>
        <div class="form">
            <i class="fas fa-calendar-week"></i>
            <input type="text" placeholder="날짜 및 미리 알림 설정">
        </div>
        <div class="form">
            <i class="fas fa-plus"></i>
            <input type="text" placeholder="세부 작업 추가">
        </div>
        <div class="form">
            <i class="fas fa-pencil-alt"></i>
            <textarea placeholder="노트추가"></textarea>
        </div>
        <div class="form">
            <i class="far fa-file"></i>
            <input type="text" placeholder="파일 추가">
        </div>
        <!--<div class="reply-container">
            <input type="text" style="bottom: 0;">
        </div>-->
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import TodoVO from "../../../vo/TodoVO"

    @Component
    export default class TodoDetailContainer extends Vue {
        @Prop()
        data: TodoVO;
    }
</script>

<style scoped>
    .todo-detail {
        width: 250px;
        height: 100%;
        background-color: #ffffff;
        border-left: 1px solid #cdcdcd;
    }

    .todo-detail > .form {
        display: flex;
        height: 50px;
        color: #949494;
        border-bottom: 1px solid #cecece;
        padding: 0 7px;
        align-items: center;
        justify-content: space-between;
    }

    .todo-detail > .form > i {
        font-size: 23px;
    }

    .todo-detail > .form > label {
        display: flex;
        align-items: center;
        flex: 1;
    }

    .todo-detail > .form > label > .label {
        padding: 0 5px;
        font-size: 19px;
        color: #2b2b2b;
    }

    .todo-detail > .form > input[type=text],
    .todo-detail > .form > textarea {
        border: none;
        padding: 0 15px;
        width: 100%;
        resize: none;
        outline: none;
    }

    .todo-detail > .reply-container {
        flex: 1;
    }

</style>