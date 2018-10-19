import Vue from 'vue'
import App from './components/App.vue'
import store from './Store/index'

	new Vue({
    el: '#app',
    render: h => h(App),
    store               ///////////// Глобальная переменная хранилища
	});




