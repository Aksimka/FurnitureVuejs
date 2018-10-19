<template lang="pug">
.about
    .about__floatingtext about us
    .about__letter a
    img.about__img(src="/dist/images/aboutus.png")
    .about__content
        .about__title about us
            hr.about__line
        .about__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum ipsa nesciunt nisi recusandae rem sint temporibus.                            Dolore, fugiat magnam?
            hr.about__preline
        .about__btn learn more
            i.ion-ios-arrow-thin-right
            hr.about__underline
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="sass" scoped>
.about
    margin-top: 90px
    display: flex
    justify-content: center
    position: relative

.about__letter
    font-size: 220px
    text-transform: uppercase
    position: absolute
    top: -50%
    right: 10%
    font-weight: bolder
    color: rgba(175, 175, 175, 0.1)
    pointer-events: none

.about__floatingtext
    position: absolute
    top: 40%
    left: 0
    font-size: 150px
    opacity: .15
    color: #afafaf
    text-transform: uppercase
    font-weight: bolder
    animation: floating2 30s ease-in-out infinite
    animation-delay: 5s
    z-index: 1


.about__img
    position: relative
    width: 450px
    max-height: 300px
    -webkit-box-shadow: 0 0 29px -4px rgba(0,0,0,0.75)
    -moz-box-shadow: 0 0 29px -4px rgba(0,0,0,0.75)
    box-shadow: 0 0 29px -4px rgba(0,0,0,0.75)
    background-size: cover
    margin-right: 40px

.about__content
    width: 30%
    margin-left: 40px
    margin-top: 70px
    div
        text-align: right

.about__title
    font-size: 30px
    text-transform: uppercase
    font-weight: bolder
    word-spacing: 10px
    position: relative
.about__line
    position: absolute
    top: 0
    left: -40%
    width: 35%
    height: 5%
    background: #908d9e
    border: 1px

.about__text
    margin-top: 10px
    font-size: 12px
    line-height: 20px
    position: relative
.about__preline
    position: absolute
    top: 0
    left: -20%
    width: 15%
    height: 5%
    background: rgba(190, 166, 124, 0.61)
    border: 0

.about__btn
    margin-top: 10px
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
            width: 30%

.about__underline
    position: absolute
    right: -10px
    left: auto
    width: 31px
    height: 2px
    background: rgba(190, 166, 124, 0.61)
    border: 0
    transition: .7s
</style>