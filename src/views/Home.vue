<template>
    <div class="home columns is-desktop">
        
        <div class="desktop-column">
            <flipping-card 
                class="mainArea column is-7-desktop" 
                :frontFacing="showHomePage"
                :setCardHeight = "setCardHeight"
                @card__content:heightTransitionEnd = "handleDevDetailPlacement"
                ref="flippingCard"
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
                    <button @click="loadDetail">Click Me To Load The New Page</button>
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
        <dev-detail
            v-show="showDevDetail"
        ></dev-detail>
        
    </div>
</template>

<script>
import {isMobile,isTablet,isDesktop} from '@/js/breakpoints.js'
import FlippingCard from '@/components/FlippingCard.vue'
import PageImage from '@/components/PageImage.vue';
import DevDetail from '@/components/DevDetail.vue';

export default {
    name: "Home",
    components:{
        FlippingCard,
        PageImage,
        DevDetail
    },
    data(){
        return{
            isDesktop: false,
            isTablet: false,
            isMobile: true,

            setCardHeight: false,
            showHomePage: true,

            currentImageDisplay: require('@/assets/img/home.png'),
            buttonOneText: "Contact Me",
            buttonTwoText: "Dev Showcase",

            showDevDetail: false,
            showDevDetailBlock: false
        }
    },
    watch:{
        isTablet:{
            handler(newValue){
                this.setCardHeight = newValue;
            }
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
        },

        loadDetail(){
            //load the detail page starting here
            this.setCardHeight = true;
            this.showDevDetail = true;
        },
        handleDevDetailPlacement(){
            if(this.showDevDetail === false)
                return;
            
            this.showDevDetailBlock = true;
        }
    },
    mounted(){
        this.checkDevice.bind(this)();
        window.addEventListener("resize",this.checkDevice.bind(this));
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.home{
    // flex: 1 1 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @include for-desktop-up{
        flex-direction: row;

        .flipping-card{
            height: 100%;
        }
    }
}

@include for-desktop-up{
    .desktop-column{
        display: flex;
        flex-direction: column;
    }
}
</style>
