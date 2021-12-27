<template>
    <div class="page-image">

    </div>
</template>

<script>
export default {
    name: "PageImage",
    props:["isMobile","isTablet","isDesktop"]
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';
</style>