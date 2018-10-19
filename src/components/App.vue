<template lang="pug">
#app
    .header-additional
        Header__top(:mainMenu="header_data.menu" :menu="header_data.header_menu" :nav="header_data.header_nav_items")
        hr.header-additional__line
    Header
    .container
        FrequentItem(v-for="item in data.decorItems" :learn="data.learn" :key="item.id" :id="item.id" :right="item.item_right"
                                                    :itemTitle="item.item_title" :itemText="item.item_text" :bgImage="item.item_img")
    .container
        Quality
    Video
    .container
        FrequentItem(v-for="item in data.aboutItem" :learn="data.learn" :key="item.id" :id="item.id" :right="item.item_right"
        :itemTitle="item.item_title" :itemText="item.item_text" :bgImage="item.item_img")
    Footer
</template>

<script>
import Header from "./Header/Header";
import FrequentItem from "./FrequentItem/FrequentItem";
import Quality from "./Quality/Quality";
import Video from "./Video/Video";
import About from "./About/About";
import Footer from "./Footer/Footer";
import {mapState} from 'vuex';
import Header__top from "./Header/Header__top/Header__top";
import Menu from "./Menu/Menu";


export default {
	name: 'app',
	components: {Menu, Header__top, Footer, About, Video, Quality, FrequentItem, Header},
	data () {
		return {
			data: {},
			header_data: {}
		}
	},
    computed: {
        ...mapState([
            'results'
        ])
    },
    created(){
	    this.data = this.$store.getters.getContent;
	    this.header_data = this.$store.getters.getHeaderContent;           ////////Записываю данные шапки сайта в переменную

        document.addEventListener('scroll', ()=>{                           ////////Изменение header при прокручиваниии
            let header = document.querySelector('.header-additional');          ////
            let line = document.querySelector('.header-additional__line');      ////
            if(window.scrollY !== 0 ){                                          ////
                line.style.width = '100%';                                      ////
                if(window.scrollY > 165){                                       ////
                    header.style.background = 'rgba(0, 0, 0, 0.7)'              ////
                }else{                                                          ////
                    header.style.background = 'rgba(0, 0, 0, 0)'                ////
                }                                                               ////
            }                                                                   ////
            else{                                                               ////
                line.style.width = 0;                                           ////
            }                                                                   ////
        })                                                                          ////
    }
}
</script>

<style lang="sass">


#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    overflow: hidden
//$littleFont-color: #BDBDBD
 //$main-color: rgba(190, 166, 124, 0.61)

.container
    width: 932px

.header-additional
    position: fixed
    top: 0
    height: auto
    width: 100%
    z-index: 999
    padding-top: 14px
    transition: .3s

.header-additional__line
    width: 0
    background: rgba(190, 166, 124, 0.61)
    height: 1px
    border: 0
    margin-top: 14px
    margin-bottom: 0
    position: relative
    transition: .2s linear width


@media screen and (min-width: 1920px)
    .container
        width: 1280px

@media screen and (min-width: 1440px) and (max-width: 1919px)
    .container
        width: 1080px

@media screen and (max-width: 1200px)
    .container
        width: 990px

@media screen and (max-width: 992px)
    .container
        width: 100%


</style>
