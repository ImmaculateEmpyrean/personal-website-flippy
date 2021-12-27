<template>
    <HomePage />
</template>

<script>
import HomePage from '@/components/Home&DevPage.vue';

export default {
    name: "Home",
    components: {
        HomePage
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

</style>
