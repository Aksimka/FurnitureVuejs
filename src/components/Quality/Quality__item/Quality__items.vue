<template lang="pug">
.quality__items
    .quality-item(v-for="vid in vids")
        .quality__img-wrapper
            .quality-item__img(:style="{ background: `url(${vid.image}) bottom no-repeat` }")
                a(:href="vid.video" class="quality-item__href")
                    span.quality-item__play
                        i.ion-play
        hr.quality-item__line
        .quality-item__description {{ vid.desc }}
</template>

<script>
export default {
    name: "Quality__item",
    props: {
      vids:{
          type: Array
      }
    },
    data: function(){
        return {
            greeting: "hi"
        }
    }

}
</script>

<style lang="sass" scoped>
    .quality__items
        margin-top: 58px
        width: 90%
        display: flex
        justify-content: space-around

    .quality-item
        transition: .5s
        width: 30%
        display: flex
        flex-direction: column
        align-items: center
        &:hover
            transform: translateY(-10%) scale(1.2)
            .quality-item__line
                width: 100%


    .quality__img-wrapper
        width: 210px
        height: 210px
        border: 1px solid #EFEFEF
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center

    .quality-item__img
        width: 90%
        height: 90%
        border-radius: 50%
        cursor: pointer


    .quality-item__img
        margin: 5px auto
        display: flex
        justify-content: center
        align-items: center
        position: relative

    .quality-item__href
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        overflow: hidden
        display: flex
        justify-content: center
        align-items: center

    .quality-item__play
        border-radius: 50%
        background: rgba(190, 166, 124, 0.61)
        font-size: 25px
        color: #ffffff
        padding: 10px 15px
        transition: .3s
        &:hover
            background: rgba(134, 121, 89, 0.75)

    .quality-item__line
        margin-top: 10px
        width: 20px
        border: 1px solid rgba(190, 166, 124, 0.61)
        transition: .5s

    .quality-item__description
        text-align: center
        margin-top: 16px
        font-size: 12px

    @media screen and (max-width: 768px)
        .quality__items
            flex-direction: column
            justify-content: center
            align-items: center
        .quality-item
            margin-bottom: 30px



</style>