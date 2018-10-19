<template lang="pug">
.header-top__logo w<span><hr>oo</span>der


</template>

<script>
export default {
    name: "Logo_medium"
}
</script>

<style lang="sass" scoped>

.header-top__logo
    font-size: 25px
    margin-left: 50px
    color: #ffffff
    letter-spacing: 9px
    display: flex
    text-transform: uppercase
    span
        position: relative
        hr
            position: absolute
            top: -2px
            left: 0
            width: 43px
            height: 2px
            background: rgba(190, 166, 124, 0.61)
            border: 0

@media screen and (max-width: 992px)
    .header-top__logo
        margin: 0
</style>