<template>
    <div class="flipping-card">
        <div class="card__content">
            <div class="card__front">
                <div class="card__contentWrapper">
                    <slot name="card-front"></slot>    
                </div>
            </div>

            <div class="card__back">
                <div class="card__contentWrapper">
                    <slot name="card-back"></slot>
                </div>
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
        },
        setCardHeight:{
            type: Boolean,
            default: false 
        }
    },
    methods: {
        checkFlipCard(){
            let cardContent = this.$el.querySelector('.card__content');
            if(this.frontFacing === true)
                cardContent.style.transform = "";
            else cardContent.style.transform = "rotateY(180deg)"
        },

        resetCardHeight(){
            //this element is the card wrapper which stays stationary
            let flippingCard = this.$el;
            let cardContent = this.$el.querySelector('.card__content');

            //do not set the height of the card in normal circumstances
            if(this.setCardHeight === false){
                flippingCard.style.minHeight = "";
                cardContent.style.height = "";
                return;
            }
                

            //get both sides of the card
            let contentWrappers = this.$el.querySelectorAll('.card__contentWrapper');
            contentWrappers = [...contentWrappers];

            //get the height of the larger card
            let heightOfCard = contentWrappers.reduce(function(value,element){
                console.log(`height of the card__content block is : ${element.clientHeight}`);
                if(element.clientHeight > value)
                    value = element.clientHeight;
                return value;
            },-99)

            //set the card__content to be the height of the card
            cardContent.style.height = `${heightOfCard}px`;

            //set the minimum height of the card wrapper in question
            flippingCard.style.minHeight = `${heightOfCard}px`;
        }
    },
    watch:{
        frontFacing(){
            this.checkFlipCard();
        },
        setCardHeight(){
            this.resetCardHeight();
        }
    },
    mounted(){
        this.checkFlipCard();
        this.resetCardHeight();
    },
    updated(){
        this.resetCardHeight();
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/setting' as *;
@import '@/assets/scss/columns.scss';

.flipping-card{
    overflow: hidden;
}

.card__content{
    transition: transform 3s ease-in-out,
                height 3s ease-in-out;

    transform-style: preserve-3d;
    position: relative;

    height: 100%;
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