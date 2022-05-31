import { createStore } from 'vuex'
import { db } from "@/firebaseInit.js";

export default createStore({
  state: {
    products: [],
    loader: false
  },
  getters: {
    getProducts: state => state.products
  },
  actions: {
    async fetchProducts({ commit }, payload) {
      const resultProducts = []

      try {
        await db.collection('products').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            resultProducts.push(doc.data())
          })
          commit('SET_PRODUCTS', resultProducts)
        })
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
  },
})
