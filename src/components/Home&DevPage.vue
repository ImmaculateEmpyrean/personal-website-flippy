<template>
    <div class="home-dev-page">
        <flipping-card :frontFacing="showHomePage">
            
            <template #card-front>
                <h1>Card Front</h1>
                <p>Hey I am text at the front of the card</p>
                <button @click="test">Click Me To Turn Back</button>
            </template>

            <template #card-back>
                <h1>Card Back</h1>
                <p>Hey I am text at the back of the card</p>
                <button @click="test">Click Me To Turn Front</button>
            </template>

        </flipping-card>
    </div>
</template>

<script>
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js'
import FlippingCard from '@/components/FlippingCard.vue'

export default {
    name: "Home&DevPage",
    components:{
        FlippingCard
    },
    data(){
        return{
            isDesktop: false,
            isTablet: false,
            isMobile: true,

            showHomePage: true,
        }
    },
    methods:{
        checkDevice(){
            this.isDesktop = isDesktop();
            this.isTablet = isTablet();
            this.isMobile = isMobile();
        },
        test(){
           this.showHomePage = !this.showHomePage;
        }
    },
    mounted(){
        this.checkDevice.bind(this)();
        document.addEventListener("resize",this.checkDevice.bind(this));
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.flipping-card{
    height: 100vh;
}

</style>

