<template lang="pug">
.header
    Header__bg
    Header__content(:learn="content.learn")
</template>

<script>
    import Header__bg from "./Header__bg/Header__bg";
    import Header__top from "./Header__top/Header__top";
    import Header__content from "./Header__content/Header__content";
    import {mapState} from "vuex"

    export default {
        name: "Header",
        components: {Header__content, Header__top, Header__bg},
        data: function(){
            return {
                content: {}
            }
        },
        created(){
            this.content = this.$store.getters.getHeaderContent;
        }
    }
</script>

<style lang="sass" scoped>
    .header
        min-height: 745px
        position: relative
        background: rgba(0,0,0,0.8)
        padding: 14px 20px
        -webkit-box-shadow: 0 6px 43px -10px rgba(0,0,0,0.75)
        -moz-box-shadow: 0 6px 43px -10px rgba(0,0,0,0.75)
        box-shadow: 0 6px 43px -10px rgba(0,0,0,0.75)
        z-index: 3


    @media screen and (max-width: 992px)
        .header
            padding: 14px 0
            min-height: 600px
</style>