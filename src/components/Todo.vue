<template>
<div class="todo">
    <h1 style="color:white;"> My Todo App </h1>

    <input type="text" class="main-input" v-model="entry" @keyup.enter="add">
    <br>{{entry}}<br>

    <div class="display-list">
        <ul class="entry-list">
            <li v-for="(enty, ind) in todoList" :key="ind"><i class="fa fa-thumb-tack" aria-hidden="true"></i> {{enty}} <span class="delete" @click="remove(ind)"><i class="fa fa-times-circle" aria-hidden="true"></i></span></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Todo",
    data: () => ({
        todoList: [],
        entry: null
    }),

    methods: {
        add: function () {
            this.todoList.push(this.entry.toUpperCase());
            this.entry = null;
            // alert("Entered " + this.entry);
        },
        remove: function (i) {
            this.todoList.splice(i, 1);
        }
    },
}
</script>

<style scoped>
* {
    transition: all 1s;
}

input.main-input {
    height: 50px;
    width: 70%;
    border: 1px solid green;
    border-radius: 5px;
    font-size: 30px;
    padding: 0px 10px;
    background: grey;
}

input.main-input:focus,
input.main-input:hover {
    background: white;
}

.entry-list {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}

.display-list {
    background: white;
    border: 1px solid green;
    border-radius: 5px;
    width: 70%;
    min-height: 0px;
    margin: auto;
}

span.delete {
    float: right;
    margin-right: 10px;
}

.entry-list li {
    padding: 10px 5px;
}

.entry-list li:hover {
    background: whitesmoke;
}

.entry-list li>i {
    float: left;
    margin-left: 10px;
}

/*span.delete i {
    width: 50px;
    height: 50px;
}*/
</style>
