<template>
    <div class="flipping-card">
        <div class="card__content">
            <div class="card__front">
                <slot name="card-front"></slot>
            </div>

            <div class="card__back">
                <slot name="card-back"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FlippingCard",
    props:{
        frontFacing: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        checkFlipCard(){
            let cardContent = this.$el.querySelector('.card__content');
            if(this.frontFacing === true)
                cardContent.style.transform = "";
            else cardContent.style.transform = "rotateY(180deg)"
        }
    },
    watch:{
        frontFacing(){
            this.checkFlipCard();
        }
    },
    mounted(){
        this.checkFlipCard();
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.card__content{
    transition: transform 3s ease-in-out;
    transform-style: preserve-3d;

    position: relative;
    height: 100%;
    width: 100%;
}

.card__front,
.card__back{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.card__front{
    background-color: cornflowerblue;
}

.card__back{
    transform: rotateY(180deg);
    background: coral;
}

</style>