import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
Vue.use(Vuex);
const storeDef: StoreOptions<any> = {};
export const store = new Vuex.Store<any>(storeDef);
