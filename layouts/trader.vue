<script setup></script>

<template>
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <SideTrader />
        <main class="flex flex-col flex-1 h-full">
            <Header />
            <section class="w-full flex-1 rounded-tl-3xl bg-white-200 dark:bg-black-100">
                <slot></slot>
            </section>
        </main>
    </div>
</template>

<style scoped></style>
