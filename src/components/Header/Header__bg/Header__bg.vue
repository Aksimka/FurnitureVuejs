<template lang="pug">
.header-bg
    .header-bg__first
        .header-bg__layout
    .header-bg__second
        .header-bg__layout
</template>

<script>
export default {
    name: "Header__bg"
}
</script>

<style lang="sass" scoped>
.header-bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    justify-content: center

.header-bg__first
    position: absolute
    top: 0
    left: 0
    width: 55%
    height: 100%
    background: url("/../images/bg1.jpg") center no-repeat / cover
.header-bg__second
    position: absolute
    bottom: -40px
    right: 0
    width: 45%
    height: 110%
    background: url("/../images/bg2.jpg") center no-repeat / cover

.header-bg__layout
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.8)
</style>