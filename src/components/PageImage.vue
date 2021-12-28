<template>
    <div class="page-image" v-show="!isMobile">
        <a href="#" v-show="isTablet">{{buttonOneText}}</a>
        <a href="#" v-show="isTablet">{{buttonTwoText}}</a>
    </div>
</template>

<script>
export default {
    name: "PageImage",
    props:{
        isMobile:{
            type: Boolean,
            default: true
        },
        isTablet:{
            type: Boolean,
            default: false
        },
        isDesktop:{
            type: Boolean,
            default: false
        },
        imageLink:{
            type: String,
            default: require('@/assets/img/noImage.png')
        },

        buttonOneText:{
            type:String,
            default: "buttonOneText"
        },
        buttonTwoText:{
            type:String,
            default: "buttonTwoText"
        }
    },
    mounted(){
        this.$el.style.backgroundImage = `url('${this.imageLink}')`
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.page-image{
    flex: 1 1 100%;

    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;

    @include for-tablet-portrait-up{
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 1;

        &.column{
            flex-basis: 100%;
        }
    }

    @include for-desktop-up{
        background-position: center center;

        &.column{
            flex-basis: 0;
        }
    }
}
</style>