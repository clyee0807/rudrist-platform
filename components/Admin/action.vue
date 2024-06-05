<!-- Admin: Dashboard/TotalAmount & Action -->
<template>
    <div class="h-full px-6 py-4 bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font mb-3 ">Action</p>  
        <div class="w-full flex flex-col gap-4">
            <!-- Buy -->
            <div class="px-1 py-2 border-2 border-fuschi-100 rounded-lg">
                <p class="h3-font ml-1">Buy</p>      
                <div class="flex flex-col pl-10">
                    <div class="flex items-center gap-2">
                        <input type="radio" id="buy-on" name="buy" value="on">
                        <label for="buy-on">ON / OFF</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" id="buy-pnl" name="buy" value="pnl">
                        <label for="buy-pnl">PNL > __________</label>
                    </div>
                </div>
            </div>
            <!-- Sell -->
            <div class="px-1 py-2 border-2 border-fuschi-100 rounded-lg">
                <p class="h3-font ml-1">Sell</p>      
                <div class="flex flex-col pl-10">
                    <div class="flex items-center gap-2">
                        <input type="radio" id="buy-on" name="buy" value="on">
                        <label for="buy-on">ON / OFF</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" id="buy-pnl" name="buy" value="pnl">
                        <label for="buy-pnl">PNL > __________</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>

</script>
    
<style>
input[type="radio"] {
    accent-color: #EF5DA8;
}

</style>