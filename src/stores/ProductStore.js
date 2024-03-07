import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
    state:()=>({
        product:{}
    }),getters: {
        getProduct(){return this.product}
    }
})