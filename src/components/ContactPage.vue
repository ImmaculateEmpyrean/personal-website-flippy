<template>
    <div class="contact-page">
        <div class="contact-container">
            <ul>
                <li>test-1</li>
                <li>test-2</li>
                <li>test-3</li>
                <li>test-4</li>
            </ul>
        </div>
        <div class="image" v-show="!isMobile"></div>
    </div>
</template>

<script>
import {isMobile,isDesktop,isTablet} from '@/js/breakpoints.js';

export default {
    name: "Contact Page",
    data(){
        return{
            isMobile: true,
            isTablet: false,
            isDesktop: false
        }
    },
    methods:{
        checkDevice(){
            this.isMobile = isMobile();
            this.isTablet = isTablet();
            this.isDesktop = isDesktop();
        }
    },
    mounted(){
        //update the device check on resize event
        this.checkDevice();
        document.addEventListener("resize",this.checkDevice.bind(this))

        //get the contact-page properly positioned on the website mount
        let contactPage = this.$el;
        let NavBar = document.getElementById('nav-bar');
        let NavBarHeight = NavBar.offsetHeight;

        contactPage.style.top = `${NavBarHeight}px`;
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.contact-page{
    position: absolute;
    z-index: -1000;

    left: 0;
    right: 0;
    bottom: 0;

    @include for-tablet-portrait-up{
        display: flex;
        flex-direction: column;

        .contact-container{
            order: 2;
            flex-shrink: 0;
        }

        .image{
            flex: 1 1 100%;
            order: 1;

            background-image: url('../assets/img/contact-me.png');
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    @include for-desktop-up{
        flex-direction: row;

        .contact-container{
            flex: 1 1 58.33333337%;
            order: 1;
        }

        .image{
            flex: 1 1 41.6%;
            order: 2;

            background-position: center center;
            background-size: contain;
        }
    }
}
</style>

