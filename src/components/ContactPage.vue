<template>
    <div class="contact-page">
        this is the contact page
    </div>
</template>

<script>
export default {
    name: "Contact Page",
    mounted(){
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

    @include for-desktop-up{
        background-image: url('../assets/img/contact-me.png');
        background-position: center right;
        background-repeat: no-repeat;
        background-size: contain;
    }
}
</style>

