<template>
    <div >
        <!-- <h1>{{ portfolioStore.portfolios[0].name }}</h1> -->
        <h1>{{ portfolioStore.currentPortfolioId }}</h1>
        <h1>{{ portfolioStore.currentPortfolioName }}</h1>
        <h1>{{ portfolioStore.orders }}</h1>
    </div>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();


</script>

<style lang="scss" scoped>

</style>