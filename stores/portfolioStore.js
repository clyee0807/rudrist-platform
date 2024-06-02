import { defineStore } from 'pinia';
// import { useNuxtApp } from '#app';
// const nuxtApp = useNuxtApp();

export const usePortfolioStore = defineStore('portfolio', {
    id: 'portfolio',
    state: () => ({
    portfolios: [],
  }),
  actions: {
    async fetchPortfolios() {
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
    },
    // Additional actions can be added here if needed
  },
});
