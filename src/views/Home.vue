<template>
    <div class="home columns is-desktop">
        
        <flipping-card 
            class="mainArea column is-7-desktop" 
            :frontFacing="showHomePage"
            :setCardHeight = "true"
        >
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

        <page-image
            class="column is-5-desktop"
            :isMobile="isMobile" :isTablet="isTablet" :isDesktop="isDesktop" 
            :imageLink="currentImageDisplay"
            :buttonOneText="buttonOneText" :buttonTwoText="buttonTwoText"
        >
        </page-image>

    </div>
</template>

<script>
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js'
import FlippingCard from '@/components/FlippingCard.vue'
import PageImage from '@/components/PageImage.vue';

export default {
    name: "Home",
    components:{
        FlippingCard,
        PageImage
    },
    data(){
        return{
            isDesktop: false,
            isTablet: false,
            isMobile: true,

            showHomePage: true,

            currentImageDisplay: require('@/assets/img/home.png'),
            buttonOneText: "Contact Me",
            buttonTwoText: "Dev Showcase"
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

.home{
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;

    @include for-desktop-up{
        flex-direction: row;
    }
}
</style>
