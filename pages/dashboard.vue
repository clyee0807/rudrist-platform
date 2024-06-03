<script setup>
definePageMeta({
    layout: "trader-test",
});
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

onMounted(() => {
	portfolioStore.fetchPortfolios();
})

</script>

<template>
    <BlockPortfolios class="w-full h-full" style="grid-column: 1 / 2; grid-row: 1 / 3;" />
    <BlockTradingView class="w-full h-full" style="grid-column: 2 / 3; grid-row: 1 / 2;" />
    <BlockSendLedger class="w-full h-full" style="grid-column: 3 / 4; grid-row: 1 / 2;" />
    <BlockPositionOrder class="w-full h-full" style="grid-column: 2 / 3; grid-row: 2 / 3;" />
    <BlockPlaceOrder class="w-full h-full" style="grid-column: 3 / 4; grid-row: 2 / 3;" />
</template>

<style scoped></style>
