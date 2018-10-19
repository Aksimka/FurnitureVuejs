<template lang="pug">
.quality
    .quality__title {{ content.title }}
    hr.quality__line
    .quality__text {{ content.text }}
    .quality__items-layout
        Quality__items(:vids="content.vids")
</template>

<script>

import Quality__items from "./Quality__item/Quality__items";
export default {
    name: "Quality",
    components: {Quality__items},
    data: function(){
        return {
            content: {}
        }
    },
    created(){
        this.content = this.$store.getters.getQualityContent;
    }
}
</script>

<style lang="sass" scoped>
.quality
    display: flex
    flex-direction: column
    align-items: center

.quality__title
    font-size: 36px
    text-transform: uppercase
    font-weight: bolder
    letter-spacing: 2px
    text-align: center

.quality__line
    margin-top: 21px
    width: 35px
    height: 2px
    background: rgba(190, 166, 124, 0.61)
    border: 0

.quality__text
    width: 50%
    margin-top: 5px
    text-align: center
    font-size: 12px
    color: #a5a5a5
    line-height: 20px

.quality__items-layout
    width: 100%
    display: flex
    justify-content: center
    align-items: center

</style>