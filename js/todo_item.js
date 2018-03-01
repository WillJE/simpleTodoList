Vue.component( "todo-item" ,{
//props 可以是数组或对象，用于接收来自父组件的数据。
//props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
    props: ["todo","index","filter"],
    template: `<li>
        <input type="checkbox" v-on:change="changeStatus(todo)" v-bind:checked="todo.isCompleted">
        <label v-if="!todo.isEdit"  v-bind:class="[todo.isCompleted ? 'completed' : '']"> {{ todo.text }} </label>
        <input type="text" v-if="todo.isEdit" v-model ="todo.text" v-on:keyup.enter = "EditTodoText($event, todo)">
        <a type="button"  v-on:click="editTodo(todo)" v-if="!todo.isEdit" class="btn">编辑</a>
        <a type="button"  v-on:click="remove_todo(index)" class="btn">删除</a>
        </li>
    `,
    methods: {
        changeStatus: function (todo) {
            todo.isCompleted = !todo.isCompleted;
        },
        editTodo: function(todo) {
            todo.isEdit = !todo.isEdit;
        },
        EditTodoText: function($event,todo){
            if($event.target.value){
                todo.text = $event.target.value;
            }
            todo.isEdit = !todo.isEdit;
        },
        remove_todo: function(index) {
            this.$emit('remove_todo');
        }
    }
})