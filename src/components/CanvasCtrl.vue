<template>
<div>
    <div>
        <label for=""> No Of Balls: </label>
        <input v-model="config.count" type="text">
    </div>
    <div>
        <label for=""> Add Ball Colours: </label>
        <input v-model="config.ballcolor" type="text">
        <ul class="colors">
            <li :key="index" v-for="(_color, index) in sb.options.obj.color"> {{_color}} <span @click="removeobjcolor(index)"> X </span></li>
        </ul>
    </div>
    <div>
        <label for="rd-1"> Red </label>
        <input type="radio" id="rd-1" value="red" v-model="config.color">
        <label for="rd-1"> Green </label>
        <input type="radio" id="rd-1" value="green" v-model="config.color">
        <label for="rd-1"> Blue </label>
        <input type="radio" id="rd-1" value="blue" v-model="config.color">
        <label for="rd-1"> Black </label>
        <input type="radio" id="rd-1" value="black" v-model="config.color">
    </div>

    <a @click="configsetter('move')"> MOVE </a> | <a @click="configsetter('circulate')"> CIRCULATE </a> | <a @click="configsetter('blizzard')"> BLIZZARD </a>
</div>
</template>

<script>
export default {
    name: "CanvasCtrl",
    data: () => ({
        sb: window.sb,
        config: {
            color: "black",
            count: 10
        }
    }),

    methods: {
        configsetter: function (type) {
            this.sb.options.bg = this.config.color
            this.sb.options.moveType = type
            this.sb.options.obj.speedX += 10;
            this.sb.options.obj.speedY -= 20;
            if (this.config.ballcolor) {
                var colors = this.config.ballcolor.split(";")
                colors.forEach((e) => {
                    if (e !== "") {
                        this.sb.options.obj.color.push(e.trim())
                    }
                })
                this.config.ballcolor = null
            }
            this.sb.options.obj.count = this.config.count
            this.sb.start();
        },

        removeobjcolor: function (x) {
            this.sb.options.obj.color.splice(x, 1)
            //console.log(this.sb.options.obj.color)
        }
    }
}
</script>

<style scoped>
div a {
    color: pink;
    font-weight: bold;
}

.colors {
    width: 75%;
    margin: auto;
    background: whitesmoke;
    padding: 0;
    list-style: none;
}
</style>
