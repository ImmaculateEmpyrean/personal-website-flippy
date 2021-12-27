<template>
    <div 
        class="page-image column is-4-desktop" 
        v-show="isDesktop" 
        style="border: 1px solid blue"
    >
    </div>
</template>

<script>
import {isDesktop} from '@/js/breakpoints.js';

export default {
    name: "PageImage",
    props:{
        imageLink: {
            type: String,
            default: require('@/assets/img/noImage.png')
        }
    },
    data(){
        return{
            isDesktop: false
        }
    },
    methods:{
        checkIfDesktop(){
            this.isDesktop = isDesktop();
        }
    },
    mounted(){
        this.checkIfDesktop();
        window.addEventListener("resize",this.checkIfDesktop.bind(this));

        let el = this.$el;
        el.style.backgroundImage = `url('${this.imageLink}')`;
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.page-image{
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

</style>