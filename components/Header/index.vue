<script setup></script>

<template>
    <header class="flex items-center w-full h-24">
        <h2 class="title text-black-100 dark:text-white-100 text-4xl font-normal">Dashboard</h2>
        <div class="flex items-center justify-end flex-1 h-full gap-4 px-8">
            <div class="text-center text-2xl font-normal text-black-100 dark:text-white-100">
                <DropDown :width="'10rem'" :height="'3rem'"/>
            </div>
            <div class="w-12 h-12">
                <PromptButton icon="/_nuxt/assets/img/application/Profile.png" :active="false"/>
            </div>
            <div class="w-12 h-12">
                <PromptButton icon="/_nuxt/assets/img/application/Notification.png" :active="true"/>
            </div>
            <ThemeSwitch />
        </div>
    </header>
</template>

<style scoped></style>
