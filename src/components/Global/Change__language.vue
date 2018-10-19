<template lang="pug">
.header-top-language(tabindex="0") {{ data.currentLanguage }}
    i.ion-android-arrow-dropdown
    .header-top-language__choiceBox
        .header-top-language__item(v-for="item in data.languageVarious" :target="item" @click="changeLanguage(item)") {{ item }}
</template>

<script>
export default {
    name: "Change__language",
    data: function(){
        return {
            data: {}
        }
    },
    created(){
        this.data = this.$store.getters.getLanguages
    },
    methods: {
        changeLanguage(target){
            this.$store.dispatch('mainContent', target);
            console.log(this.$store.state.results);
            // console.log(this.$store.dispatch('mainContent', target))
        }
    }
}
</script>

<style lang="sass" scoped>
.header-top-language
    font-size: 10px
    margin-right: 20px
    cursor: pointer
    position: relative
    &:focus
        outline: none
        .header-top-language__choiceBox
            height: auto
        i
            &:before
                transform: rotate(180deg)
    i
        margin-left: 3px
        &:before
            transition: .3s


    .header-top-language__choiceBox
        position: absolute
        top: 120%
        right: 0
        width: 30px
        height: 0
        background: rgba(0, 0, 0, 0.45)
        transition: .5s all
        overflow: hidden

    .header-top-language__item
        margin: 15px 0
        cursor: pointer
        transition: .3s
        &:hover
            color: rgba(114, 114, 114, 0.85)
</style>