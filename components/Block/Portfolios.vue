<template>
    <Block :row="row" :col="col" class="flex flex-col gap-y-5">
        <div class="flex items-center">
            <h3 class="flex-1 text-2xl font-medium text-black-100 dark:text-white-100">Portfolios</h3>
        </div>
		<div 
			class="portfolio rounded-lg" 
			v-for="portfolio in portfolioStore.portfolios" :key="portfolio.id"
			@click="handleClick(portfolio.id)"
			@mouseover="handleMouseOver($event)"
			@mouseleave="handleMouseLeave($event)"
		>
			<div class="portfolio-id h3-font pl-[5%]">{{ portfolio.name }}</div>
			<div class="flex flex-row px-[10%] justify-between">
				<div class="portfolio-value text-font pl-[35%]">$</div>
				<div class="flex flex-row justify-end items-center">
					<!-- TODO: real amount instead of position-->
					<div class="portfolio-value text-font">{{ portfolio.positions[0].balance }}&nbsp&nbsp</div>
					<div class="portfolio-currency tag-font">{{ portfolio.positions[0].symbol }}</div>
				</div>
			</div>
		</div>
		<!-- TODO: DEBUG purpose-->
		<div>
			<button @click="test">TEST</button>
		</div>
	</Block>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore';

const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;
const portfolioStore = usePortfolioStore();

onMounted(async () => {
	portfolioStore.fetchPortfolios();
})

const test = () => {
	console.log(portfolioStore.portfolios)
}
// const portfolios = 
// [
// 	{ id: 'Portfolio B', amount: 322041, currency: 'BTC' },
// 	{ id: 'Portfolio A', amount: 147724, currency: 'USDT' },
// 	{ id: 'Portfolio C', amount: 2679, currency: 'TWD' }
// ];

const handleClick = (id) => {
  console.log('Portfolio clicked:', id);
}

const handleMouseOver = (event) => {
  event.currentTarget.classList.add('hover');
}

const handleMouseLeave = (event) => {
  event.currentTarget.classList.remove('hover');
}

const addPortfolio = async () => {
  try {
    const result = await api.portfolio.addPortfolio(
      {
        name: "portfolio4",
        position: [
          "BTC/USDT"
        ]
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('add Portfolio id:', result.id)
  } catch(e) {
    console.error(e)
  }
}

const getPortfolio = async () => {
  try {
    const result = await api.portfolio.getPortfolio(
      {
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('get Portfolios', result.data[0].id)
	return result
  } catch(e) {
    console.error(e)
  }
}

const modifyPortfolio = async () => {
  try {
    const result = await api.portfolio.modifyPortfolio(
      {
        name: "portfolio3",
        amount: 5100,
        symbol: "BTC"
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('modify Portfolios', result)
  } catch(e) {
    console.error(e)
  }
}

const removePortfolio = async () => {
  try {
    const result = await api.portfolio.removePortfolio(
      {
        name: "portfolio1"
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('remove Portfolios', result)
  } catch(e) {
    console.error(e)
  }
}

</script>

<style scoped>

.portfolio {
  cursor: pointer; 
	background-image: linear-gradient(to right, rgba(1, 89, 191, 0.2) 0%, rgba(1, 89, 191, 0.2) 100%);
	background-size: 0% 100%;
	background-repeat: no-repeat;
  transition: background-color 0.3s; 
}

.portfolio:hover, .portfolio.hover {
  animation: backgroundSlide 0.5s forwards; 
}

@keyframes backgroundSlide {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
</style>