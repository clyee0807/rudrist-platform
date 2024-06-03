import { defineStore } from 'pinia';
// import { useNuxtApp } from '#app';
// const nuxtApp = useNuxtApp();

export const usePortfolioStore = defineStore('portfolio', {
    id: 'portfolio',
    state: () => ({
    portfolios: [],
    currentPortfolioId: '',
    currentPortfolioName: '',
    orders: [],
    positions: []
  }),
  actions: {
    async fetchPortfolios() {
      setTimeout(async () => {
        try {
          const response = await useNuxtApp().$api.portfolio.getPortfolio(
              {}, {
                  headers: useRequestHeaders(["cookie"])
              }
          );
          this.portfolios = response.data;
        } catch (error) {
          console.error('Error fetching portfolios:', error);
          this.status = 'error';
        }
      }, 0.0000001)
    },

    // This also implements fetchOrders
    async getCurrentPortfolio(id, name) {
      this.currentPortfolioId = id;
      this.currentPortfolioName = name;
      try {
        const response = await useNuxtApp().$api.order.getOrder(
            {
              id: this.currentPortfolioId,
            }, {
                headers: useRequestHeaders(["cookie"])
            }
        );
        this.orders = response.data;
        const target = this.portfolios.find(x => x.id === this.currentPortfolioId)
        // console.log('This is fetchOrders', this.portfolios, this.orders, index)
        this.positions = target.positions
      } catch (error) {
        console.error('Error fetching orders:', error);
      }

    }
    // Additional actions can be added here if needed
  },
});
