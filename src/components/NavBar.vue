<template>
    <div class="nav-bar">
        this is the nav-bar
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.nav-bar{
    height: 75px;
    @include for-desktop-up{
        height: 100px;
    }
}

</style>