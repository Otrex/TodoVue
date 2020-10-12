<template>
<div class="col-half">
    <CanvasCtrl />
</div>
<div class="col-half">
    <Todo />
</div>
</template>

<script>
import Todo from './components/Todo.vue'
import CanvasCtrl from './components/CanvasCtrl.vue'

export default {
    name: 'App',
    components: {
        Todo,
        CanvasCtrl
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.col-half {
    width: 50%;
    float: left;
}

@media only screen and (max-width: 500px) {
    .col-half {
        width: 100%;
    }
}
</style>
