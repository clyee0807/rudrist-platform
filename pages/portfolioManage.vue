<script setup>
// Admin: Portfolio Manage 
definePageMeta({
    layout: "admin",
    middleware: ["admin-auth"]
});
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

onMounted(() => {
	portfolioStore.fetchPortfolios();
})

</script>

<template>

</template>

<style scoped></style>
