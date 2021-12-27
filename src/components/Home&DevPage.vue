<template>
    <div class="card__content">

        <div class="card__front">
            <h1>Card Front</h1>
            <p>Hey I am text at the front of the card</p>
            <button @click="test">Click Me To Turn Back</button>
        </div>

        <div class="card__back">
            <h1>Card Back</h1>
            <p>Hey I am text at the back of the card</p>
            <button @click="test">Click Me To Turn Front</button>
        </div>

    </div>
</template>

<script>
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js'

export default {
    name: "Home&DevPage",
    data(){
        return{
            isDesktop: false,
            isTablet: false,
            isMobile: true
        }
    },
    methods:{
        checkDevice(){
            this.isDesktop = isDesktop();
            this.isTablet = isTablet();
            this.isMobile = isMobile();
        },
        test(){
            if(this.$el.style.transform === "rotateY(180deg)")
            {
                this.$el.style.transform = "";
                console.log('turned front')
            }
            else{
                this.$el.style.transform = "rotateY(180deg)"
                console.log('turned back')
            } 
        }
    },
    mounted(){
        this.checkDevice.bind(this)();
        this.$el.addEventListener("resize",this.checkDevice.bind(this));    
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.card__content{
    transition: transform 3s ease-in-out;
    transform-style: preserve-3d;

    position: relative;
    height: 100vh;
}

.card__front,
.card__back{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.card__front{
    background-color: cornflowerblue;
}

.card__back{
    transform: rotateY(180deg);
    background: coral;
}

</style>

