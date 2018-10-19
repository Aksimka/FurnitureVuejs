<template lang="pug">
.header-top
    .header-top__left
        .header-top-menu(tabindex=0)
            .header-top-menu__icon
                i.ion-navicon
            .header-top-menu__text {{ menu.menu }}
            .header-menu__layout
                Menu(:mainMenu = "mainMenu")
    .header-top__center
        .header-top__logo-layout
            logo__medium
        .header-top__nav
            .header-top__nav-item(v-for="item in nav") {{ item }}
    .header-top__right
        i.ion-ios-information-outline.header-info
        Change__language



</template>

<script>
    import logo__medium from '../../Global/logo__medium'
    import Change__language from "../../Global/Change__language";
    import Menu from "../../Menu/Menu";
    export default {
        name: "Header__top",
        components: {Menu, Change__language, logo__medium},
        props: {
            menu: {
                type: Object
            },
            nav: {
                type: Array
            },
            mainMenu: {
                type: Object
            }
        },
        methods: {

        }
    }
</script>

<style lang="sass" scoped>
    .header-top
        display: flex
        align-items: center
        justify-content: space-between
        font-weight: bolder
        color: #BDBDBD
        text-transform: uppercase

    .header-top__left
        width: 15%
        display: flex

    .header-top-menu
        display: flex
        align-items: center
        justify-content: flex-start
        margin-left: 20px
        &:focus
            outline: none
            .header-menu__layout
                left: 0
                opacity: 1

    .header-menu__layout
        position: fixed
        top: 0
        left: -100%
        opacity: 0
        height: 100%
        width: 250px
        background: #1F1F1F
        z-index: 1000
        transition: .5s left,.8s opacity

    .header-top-menu__icon
        font-size: 35px
        cursor: pointer

    .header-top-menu__text
        font-weight: lighter
        font-size: 10px
        margin-left: 8px
        cursor: pointer

    .header-top__center
        display: flex
        align-items: center
        width: 55%
        justify-content: flex-end

    .header-top__logo-layout
        margin-right: 94px

    .header-top__nav
        display: flex
        font-size: 10px

    .header-top__nav-item
        margin-right: 80px
        cursor: pointer
        &:last-child
            margin-right: 0

    .header-top__right
        display: flex
        align-items: center
        width: 15%
        justify-content: flex-end

    .header-info
        margin-right: 40px
        font-size: 19px
        cursor: pointer

    @media screen and (min-width: 1920px)
        .header-top__center
            justify-content: center

    @media screen and (max-width: 992px)
        .header-top__center
            justify-content: center
        .header-top__logo-layout
            margin: 0
        .header-top__nav
            display: none
        .header-menu__layout
            width: 200px

</style>