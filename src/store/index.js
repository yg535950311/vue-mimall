import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
/**
 * 存储---传输---读取
 */
const state = {
  username: '', // 登录用户名
  cartCount: 0 // 购物车商品数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
