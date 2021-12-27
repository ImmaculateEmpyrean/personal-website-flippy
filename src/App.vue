<template>
    <div class="app">
        <NavBar />
        <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: "App",
    components:{
        NavBar
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
