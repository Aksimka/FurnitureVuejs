<template lang="pug">
.header-content
    .header-content__left
        .header-content__undertitle wooder
    .header-content__center
        .header-content__title wooder
        .header-content__btn {{ learn }}
            i.ion-ios-arrow-thin-right
    .header-content__right
        .header-content__floating-text furniture & decor
</template>

<script>
export default {
    name: "Header__content",
    props: {
        learn: {
            type: String
        }
    }
}
</script>

<style lang="sass" scoped>
.header-content
    margin-top: 240px
    display: flex
    justify-content: center

.header-content__left
    width: 30%
    position: relative

.header-content__undertitle
    position: absolute
    top: -300px
    left: -500px
    text-transform: uppercase
    font-size: 300px
    letter-spacing: 10px
    color: rgba(190, 166, 124, 0.61)
    font-weight: bolder
    text-align: center
    transform: rotate(270deg)
    opacity: .1
    animation: undertitle 30s ease-in-out infinite
    cursor: default
    pointer-events: none

@keyframes undertitle
    0%
        transform: rotate(270deg) translateY(0)
    50%
        transform: rotate(270deg) translateX(-900px)
    100%
        transform: rotate(270deg) translateY(0)

.header-content__center
    width: 40%
    display: flex
    flex-direction: column
    align-items: flex-start
    position: relative

.header-content__title
    text-transform: uppercase
    font-size: 69px
    letter-spacing: 20px
    color: rgba(190, 166, 124, 0.61)
    font-weight: bolder
    text-align: center
    margin: 16px 0 0 0

.header-content__btn
    width: 200px
    border: 1px solid #ffffff
    color: #ffffff
    display: flex
    align-items: center
    justify-content: center
    text-transform: uppercase
    padding: 9px 20px
    font-size: 12px
    margin: 65px 0 0 40px
    letter-spacing: 1px
    cursor: pointer
    position: relative
    i
        margin-left: 10px
        font-size: 25px
        transition: .5s
    &:hover
        i
            opacity: 0
            transform: translateX(100%)


.header-content__right
    width: 30%
    position: relative

.header-content__floating-text
    position: absolute
    top: 0
    right: 0
    transform: rotate(90deg)
    text-transform: uppercase
    font-size: 50px
    letter-spacing: 10px
    color: rgba(190, 166, 124, 0.61)
    font-weight: bolder
    text-align: center
    opacity: .3
    margin: 100px -100px 0 0
    transition: 1s
    cursor: default
    pointer-events: none
    line-height: 70px

@media screen and (min-width: 1440px)
    .header-content__left
        width: 35%
    .header-content
        margin-top: 250px
        &__btn
            margin-left: 0
            margin-right: 20px
    .header-content__center
        width: 30%
        align-items: center
    .header-content__right
        width: 35%

@media screen and (max-width: 992px)
    .header-content__left
        width: 25%
    .header-content
        margin-top: 185px
    .header-content__center
        width: 50%
        align-items: flex-start
        justify-content: center
    .header-content__right
        width: 25%

    .header-content__floating-text
        top: -50px

@media screen and (max-width: 768px)
    .header-content__left
        display: none
    .header-content__center
        width: 100%
        align-items: center
        justify-content: center
    .header-content__btn
        margin: 65px 0 0 0
    .header-content__right
        display: none

</style>