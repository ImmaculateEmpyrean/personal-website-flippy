<template>
    <div class="app">
        <NavBar />
        <router-view/>
        <contact-page></contact-page>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ContactPage from '@/components/ContactPage.vue'; 

export default {
    name: "App",
    components:{
        NavBar,
        ContactPage
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/setting' as *;

.app{
    display: flex;
    flex-direction: column;

    height: 100vh;
}

</style>
