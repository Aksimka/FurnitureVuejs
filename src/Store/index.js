import Vue from 'vue';
import Vuex from 'vuex';
import defaultData from './initialJSON.js'/////////////////////// Язык по умлочанию, который я определяю в state.results
import eng from './engJSON.js'
// import defaultState from './DefaultState.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
		results: defaultData
	},
	getters: {
		getContent: state => state.results,/////////////////////////// Использую для получения контента в различных компонентах
        getQualityContent: state => state.results.qualityContent,/////
        getHeaderContent: state => state.results.header_data,//////////
        getLanguages: state => state.results.languages
	},
	actions: {
		mainContent({commit}, lang){             ////////////// Асинхронная функция смены языка
			//let target = `dist/javascripts/Languages/${lang}.json`;// Определяю путь запроса для Axios
			//const response = await axios.get(target);//////////////// Ожидаю ответа от Axios и записываю его в переменную
            switch (lang) {
                case 'en': commit("setLanguage", eng); break;///////////////////////// Вызываю мутацию setLanguage
            }

		}
	},
	mutations: {
		setLanguage(state, data){
            state.results = data;//////////////////////////////////// Записываю полученные данные от action и перезаписываю переменную состояния
            //console.log(state.results);
        }
	}
});

export default store;