<template>
    <div>
        <Navbar />
        <div class="flex flex-col justify-center items-center py-16 bg-[#a2d2ff]">
            <div class="md:w-[50%] flex flex-col justify-center items-center">
                <p class="text-4xl font-semibold text-center">A Perfect Price for all your needs</p>
                <p class=" text-pretty text-lg px-4">From catering for your personal, business, event, social
                    needs, you
                    can be
                    rest
                    assured we have you
                    in mind in our pricing </p>
            </div>
            <PriceCard />
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import PriceCard from '../components/PriceCard.vue'
</script>

<style scoped></style>