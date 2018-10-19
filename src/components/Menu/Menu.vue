<template lang="pug">
.menu
    .menu-top
        .menu-top__layout
        .menu-top__title Меню
        .menu-top__exit(tabindex=0)
            i.ion-close-round
    .menu-content
        .menu-content-adaptive
            .menu-content-adaptive__item(v-for="item in mainMenu.menu__adaptive") {{ item }}
        .menu-content-items
            .menu-content-items__item(v-for="item in mainMenu.menu__items")
                .menu-content-items__icon
                    i(:class="item.icon")
                .menu-content-items__text {{ item.text }}
</template>

<script>
export default {
    name: "Menu",
    props: {
        mainMenu: {
            type: Object
        }
    }
}
</script>

<style lang="sass" scoped>
.menu
    color: #f5fdfd

.menu-top__layout
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.64)

.menu-top
    display: flex
    justify-content: space-around
    align-items: center
    padding: 60px 0
    border-bottom: 1px solid rgba(190, 166, 124, 1)
    background: url('/dist/images/bg2.jpg') center no-repeat / cover
    position: relative

.menu-top__title
    font-size: 21px
    position: relative
.menu-top__exit
    position: absolute
    top: 10px
    right: 10px
    font-size: 22px
    cursor: pointer
    transition: .2s
    &:focus
        outline: none
    &:hover
        color: rgba(190, 166, 124, 0.61)

.menu-content-adaptive
    margin-top: 30px

.menu-content-adaptive__item
    padding: 25px 0
    transition: .1s
    cursor: pointer
    &:hover
        background: rgba(190, 166, 124, 0.61)

.menu-content-items
    margin-top: 25px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

.menu-content-items__item
    display: flex
    justify-content: flex-start
    align-items: center
    padding: 15px 0
    width: 100%
    cursor: pointer
    transition: .1s
    .menu-content-items__icon
        font-size: 25px
        margin-left: 10%
    .menu-content-items__text
        margin-left: 20%
        font-weight: normal
        font-size: 16px
    &:hover
        background: rgba(190, 166, 124, 0.61)

@media screen and (min-width: 992px)
    .menu-content-adaptive
        display: none

@media screen and (max-width: 993px)
    .menu-top
        padding: 30px 0

    .menu-content-adaptive
        margin-top: 15px
        &__item
            padding: 20px 0

    .menu-content-items
        margin-top: 15px
        &__item
            padding: 10px 0



</style>