
<script setup>
// Admin: Account Page
definePageMeta({
    layout: "admin",
    middleware: ["admin-auth"]
});


</script>

<template>
<div class="w-full h-full flex flex-row gap-2">
    <div class="w-1/4"><AdminPortfolios/></div>
    <div class="w-1/2 h-full flex flex-col gap-2">
        <div class="h-1/2"><AdminChart/></div>
        <div class="h-1/2"><AdminPositions/></div>
    </div>
    <div class="w-1/4 h-full flex flex-col gap-2">
        <div class="h-1/2"><AdminTotalAmount/></div>
        <div class="h-1/2"><AdminAction/></div>
    </div>
</div>
</template>

<style scoped>
</style>
