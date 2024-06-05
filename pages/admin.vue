<script setup>
// Admin: Dashboard Page
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
<div class="w-full h-full flex flex-row gap-2">
    <AdminBalance class="w-2/3 h-full"/>
    <div class="w-1/3 flex flex-col gap-2 h-full">
        <AdminTotalAmount class="h-3/5"/>
        <AdminAddPortfolio class="h-2/5"/>
    </div>
</div>
</template>

<style scoped></style>
