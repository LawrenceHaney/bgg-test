import Vue from 'vue'
import Vuex from 'vuex'
import { api, sand } from "../services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: [],
    focused: {},
    sand: []
  },
  mutations: {
    setSpells(state, spells){
      state.result = spells
    },
    setactive(state, spelldata){
      state.focused = spelldata
      console.log(state.focused)
    },
    setsand(state, sand){
      state.sand = sand
    }
  },
  actions: {
    async getspells({commit}){
      let res = await api.get()
      commit("setSpells", res.data)
    },
    async setactivespell({commit}, spelldata){
      let res = await api.get(`/${spelldata.id}`)
      commit("setactive", res.data)
    },
    async getsand({commit}){
      let res = await sand.get()
      console.log(res)
      commit("setsand", res.data)},
    async addsand({commit}){
      await sand.put("", this.state.focused)
      commit("setsand")
    }
  },
  modules: {
  }
})
