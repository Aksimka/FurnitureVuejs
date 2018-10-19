<template lang="pug">
.footer
    .footer__layout
    .container
        .footer__content
            .footer__copyrights (c)2018 WOODER
            logo__medium
            .footer__author Designed by
                a(href="https://vk.com/id16830545") Safonov Maksim
</template>

<script>
import logo__medium from "../Global/logo__medium";
export default {
    name: "Footer",
    components: {logo__medium}
}
</script>

<style lang="sass" scoped>
.footer
    background: url("/dist/images/video-bg.jpg") center no-repeat / cover
    position: relative
    padding: 20px 0
    .container
        position: relative
        width: 60%

.footer__layout
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.8)

.footer__content
    display: flex
    justify-content: space-between
    align-items: center

.footer__copyrights
    color: #656565
    font-weight: bolder
    font-size: 12px

.footer__author
    color: #656565
    font-size: 12px
    a
        color: #929292
        text-decoration: none

@media screen and (max-width: 992px)
    .footer
        .container
            width: 90%
</style>