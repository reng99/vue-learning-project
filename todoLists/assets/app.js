// localStorage persistence
var STORAGE_KEY = 'reng-vue2.0'
var todoStorage = {//http://www.cnblogs.com/goatling/p/6293692.html  parse和stringify
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
//visibility filters
var filters = {
    all:function(todos){
        return todos;
    },
    active:function(todos){
        return todos.filter(function(todo){
            return !todo.completed;
        })
    },
    completed:function(todos){
        return todos.filter(function(todo){
            return todo.completed;
        })
    }
}
//vue instance
var app = new Vue({
    data:{
        newTodo: '',
        todos: todoStorage.fetch(),
        editedTodo: null,
        visibility:'all'
    },
    filters:{
        pluralize:function(n){//过滤，n是传过来的remaining
            return n === 1 ? "item" : "items";
        }
    },
    methods:{
        addTodo(){
            var value = this.newTodo.trim()
            if (!value) {
                return
            }
            this.todos.push({
                id: todoStorage.uid++,
                title: value,
                completed: false
            })
            this.newTodo = ''
        },
        editTodo(todo){
            console.log(todo);
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },
        doneEdit(todo) {
            if (!this.editedTodo) {
                return
            }
            this.editedTodo = null
            todo.title = todo.title.trim()
            if (!todo.title) {
                this.removeTodo(todo)
            }
        },
        cancelEdit(todo) {
            this.editedTodo = null
            todo.title = this.beforeEditCache
        },
        removeTodo(todo){//移除事件
            this.todos.splice(this.todos.indexOf(todo),1);
        },
        removeCompleted(){
            this.todos = filters.active(this.todos);
        }
    },
    computed:{
        filterTodos:function(){
            return filters[this.visibility](this.todos);
        },
        remaining:function(){
            return filters.active(this.todos).length;
        },
        allDone:{//标记全部完成
            get:function(){
                return this.remaining === 0;
            },
            set:function(value){
                this.todos.forEach(function(todo){//需要留意的是input的类型为checkbox的时候，value的值是true或者false
                    todo.completed = value;
                })
            }
        }
    },
    watch:{ //这里使用到深度的 watch
        todos:{
            handler:function(todos){
                todoStorage.save(todos);//将相关的数据填写到localstorage中
            },
            deep:true
        }
    },
    // a custom directive to wait for the DOM to be updated
    // before focusing on the input field.
    // https://vuejs.org/guide/custom-directive.html
    directives:{//自定义指令
        "todo-focus":function(el,binding){
            if(binding.value){
                el.focus();
            }
        }
    }
});

//handle routing 通过路径改变"可见"
function onHashChange(){
    var visibility = window.location.hash.replace(/#\/?/,'');
    if(filters[visibility]){
        app.visibility = visibility;
    }else{
        window.location.hash = '';
        app.visibility = 'all';
    }
}

window.addEventListener("hashchange",onHashChange);
onHashChange();

// 挂载
app.$mount(".todoapp");