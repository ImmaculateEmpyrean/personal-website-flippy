<template>
    <div class="nav-bar" id="nav-bar">
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
    flex-shrink: 0;

    @include for-desktop-up{
        height: 75px;
    }
}

</style>