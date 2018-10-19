<template lang="pug">
.video
    .video__layout
    .video-content
        hr.video-content__rightline
        span.video-content__play.big
            i.ion-play.big
        .video-content__title
            hr.video-content__titleline
            span we do the design of any complexity
        .video-content__description
            hr.video-content__textline
            span Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus facilis molestias nobisquaerat! Alias                             aspernatur, aut blanditiis culpa dicta doloremque fugiat iusto maiores officiis quos, repellendus rerum vero vitae.
        a.video-content__button(href="https://www.youtube.com/watch?v=TauJLzZuVQY")
            span.video-content__play
                i.ion-play
            span watch video
</template>

<script>
export default {
    name: "Video"
}
</script>

<style lang="sass" scoped>
.video
    background: url("/dist/images/video-bg.jpg") center no-repeat / cover
    margin-top: 117px
    padding: 70px 142px
    position: relative

.video__layout
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.85)

.video-content
    border: 1px solid rgba(190, 166, 124, 0.61)
    padding: 162px 0 141px 300px
    position: relative

.video-content__rightline
    position: absolute
    width: 116px
    height: 2px
    background: #CDCDCD
    top: 47%
    right: 29px
    border: 0
    transform: rotate(90deg)

.video-content__title
    color: rgba(190, 166, 124, 0.61)
    text-transform: uppercase
    font-size: 37px
    font-weight: bolder
    width: 44%
    line-height: 45px
    position: relative
    text-align: left

.video-content__titleline
    position: absolute
    width: 115px
    height: 2px
    left: -136px
    background: #CDCDCD
    border: 0
    //border: 1px solid #CDCDCD

.video-content__description
    color: #ffffff
    font-size: 12px
    width: 55%
    margin-top: 29px
    line-height: 19px
    font-weight: 300
    text-align: left
    position: relative
.video-content__textline
    position: absolute
    width: 36px
    height: 2px
    left: -55px
    background: rgba(190, 166, 124, 0.61)
    border: 0

.video-content__button
    color: #ffffff
    margin-top: 48px
    padding: 12px 15px
    width: 207px
    text-transform: uppercase
    font-size: 12px
    display: flex
    justify-content: center
    align-items: center
    border: 2px solid #ffffff
    cursor: pointer
    text-decoration: none
    &:hover
        .video__play
            transform: scale(1.1)

.video-content__play
    width: 15px
    height: 15px
    border-radius: 50%
    border: 2px solid #ffffff
    display: flex
    justify-content: center
    align-items: center
    margin-right: 10px
    transition: .3s

.video-content__play.big
    position: absolute
    top: -5%
    right: -4%
    border-radius: 50%
    border: 40px solid rgba(190, 166, 124, 0.61)
    opacity: .15
    width: 560px
    height: 560px
    font-size: 285px
    color: rgba(190, 166, 124, 0.61)


@media screen and (max-width: 992px)
    .video
        padding: 70px 80px

    .video-content
        padding: 120px 0 100px 200px

@media screen and (max-width: 768px)
    .video
        padding: 20px 20px
    .video-content
        padding: 80px 0 80px 150px
    .video-content__play.big
        width: 400px
        height: 400px
    .video-content__title
        width: 70%
    .video-content__description
        width: 70%

@media screen and (max-width: 576px)
    .video
        padding: 0
    .video-content__titleline
        display: none
    .video-content__textline
        display: none
    .video-content__rightline
        display: none
    .video-content__play.big
        width: 300px
        height: 300px
    .video-content
        padding: 40px
    .video-content__title
        width: 90%
    .video-content__description
        width: 90%

</style>