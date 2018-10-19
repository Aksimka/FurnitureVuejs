<template lang="pug">
.frequent(:class="{right : right}")
    .frequent-content
        .frequent-content__title {{ itemTitle }}
            hr.frequent-content__line
        .frequent-content__text {{ itemText }}
            hr.frequent-content__preline
        .frequent-content__btn {{ learn }}
            i.ion-ios-arrow-thin-right
            hr.frequent-content__underline
    .frequent__photo(:style='{ backgroundImage: `url(${bgImage})` }')
        .frequent__layout
        .frequent__floatingtext {{ itemTitle }}
</template>

<script>
export default {
    name: "Decoration",
    props: {
        itemId: {
            type: Number
        },
        itemTitle: {
            type: String
        },
        itemText: {
            type: String
        },
        bgImage: {
            type: String
        },
        right: {
            type: Boolean,
            default: false
        },
        learn: {
            type: String
        }
    }
}
</script>

<style lang="sass" scoped>
.frequent
    margin: 110px 0 220px 145px
    display: flex
    justify-content: space-between
    &:last-child
        margin: 110px 0 171px 145px !important

.frequent-content
    width: 313px
    margin: 90px 30px 0 0
    div
        text-align: left

.frequent-content__title
    font-size: 33px
    text-transform: uppercase
    font-weight: bolder
    letter-spacing: 5px
    position: relative

.frequent-content__line
    position: absolute
    top: 50%
    margin: 0
    left: -140px
    width: 120px
    height: 2px
    background: #b9b8c0
    border: 0

.frequent-content__text
    margin-top: 15px
    font-size: 12px
    line-height: 21px
    position: relative

.frequent-content__preline
    position: absolute
    top: 6px
    left: -56px
    width: 35px
    height: 2px
    background: rgba(190, 166, 124, 0.61)
    border: 0

.frequent-content__btn
    margin: 17px 0 0 3px
    letter-spacing: 2px
    text-transform: uppercase
    font-size: 10px
    position: relative
    cursor: pointer
    font-weight: bolder
    i
        font-size: 13px
        margin-left: 10px
    &:hover
        hr
            width: 150px

.frequent-content__underline
    position: absolute
    left: -10px
    right: auto
    width: 31px
    height: 2px
    background: rgba(190, 166, 124, 0.61)
    border: 0
    transition: .7s

.frequent__photo
    position: relative
    width: 500px
    min-height: 310px
    background-position: top
    -webkit-box-shadow: 0 0 29px -4px rgba(0,0,0,0.75)
    -moz-box-shadow: 0 0 29px -4px rgba(0,0,0,0.75)
    box-shadow: 0 0 29px -4px rgba(0,0,0,0.75)

.frequent__layout
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(37, 37, 37, 0.43)

.frequent__floatingtext
    position: absolute
    top: 40%
    font-size: 100px
    opacity: .15
    color: #afafaf
    text-transform: uppercase
    font-weight: bolder
    animation: floating1 30s ease-in-out infinite
    pointer-events: none


    @keyframes floating1
        0%
            transform: translateX(0)
        50%
            transform: translateX(300px)
        100%
            transform: translateX(0)

.frequent.right
    margin: 98px 150px 220px 0
    flex-direction: row-reverse
    &:last-child
        margin: 98px 150px 171px 0 !important

    .frequent-content__line
        top: 50%
        left: auto
        right: -140px

    .frequent-content
        margin: 90px 0 0 30px
        div
            text-align: right

    .frequent-content__preline
        left: auto
        right: -55px

    .frequent-content__btn
        margin-right: 21px
        &:hover
            hr
                width: 150px

    .frequent-content__text
        margin-left: 25px

    .frequent-content__underline
        right: -10px
        left: auto

    .frequent__floatingtext
        animation: floating2 30s ease-in-out infinite

    @keyframes floating2
        0%
            transform: translateX(0)
        50%
            transform: translateX(-300px)
        100%
            transform: translateX(0)


@media screen and (min-width: 1440px)
    .frequent-content
        width: 400px
    .frequent__photo
        width: 600px
        height: 390px

@media screen and (max-width: 992px)
    .frequent
        justify-content: space-around
        margin: 110px 0 220px 10px
        &:last-child
            margin: 98px 10px 171px 0 !important
        &-content
            width: 38%
    .frequent.right
        margin: 98px 10px 220px 0
        &:last-child
            margin: 98px 10px 171px 0 !important

    .frequent-content__line
        display: none
    .frequent-content__preline
        display: none
    .frequent__photo
        width: 60%

@media screen and (max-width: 768px)
    .frequent
        margin: 80px 0 50px 10px
        flex-direction: column
        justify-content: center
        align-items: flex-start
        &:last-child
            margin: 80px 0 50px 10px !important

    .frequent.right
        margin: 80px 10px 50px 0
        flex-direction: column
        justify-content: center
        align-items: flex-end
        &:last-child
            margin: 80px 10px 50px 0 !important
    .frequent-content
        margin-top: 20px
    .frequent__photo
        margin-top: 30px
        min-height: 250px

@media screen and (max-width: 576px)
    .frequent-content
        width: 70%
    .frequent__photo
        width: 90%

</style>