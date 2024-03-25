<template>
    <header class="bg-[#fcbf49] flex items-center">
        <nav class="flex justify-between items-center md:w-[90%] w-screen mx-auto py-2 px-6">
            <div class="">
                <RouterLink to="/" class="text-3xl text-[#003049] font-semibold">Ajebo</RouterLink>
            </div>
            <span @click="toggleMenu()" class="md:hidden">
                <img src="../assets/hamburger.svg" onclick="" :class="[open ? 'hidden' : 'inline-block']" alt="">
                <img src="../assets/close.svg" onclick="" :class="[open ? 'inline-block' : 'hidden']" alt="">
            </span>

            <ul class=" md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-700 ease-in bg-[#fcbf49] md:bg-none my-6 mr-6"
                :class="[open ? 'left-0' : 'left-[-100%]']">
                <li class="md:mx-4 md:my-0 my-6 hover:opacity-80">
                    <RouterLink to="/dashboard">My URLs</RouterLink>
                </li>
                <!-- <li class="md:mx-4 md:my-0 my-6 hover:text-[#b4adea]">
                    <RouterLink to="/">Features</RouterLink>
                </li> -->
                <li class="md:mx-4 md:my-0 my-6 hover:opacity-80">
                    <RouterLink to="/pricing">Pricing</RouterLink>
                </li>
                <!-- <li class="md:mx-4 md:my-0 my-6">Analytics</li> -->
                <li class="md:mx-4 md:my-0 my-6 hover:opacity-80">
                    <RouterLink to="/faqs">FAQs</RouterLink>
                </li>
                <div class=" flex gap-4 justify-center items-center">
                    <button @click="handleLogin" class="hover:opacity-80 hover:cursor-pointer">Log in</button>
                    <button class="bg-[#eae2b7] hover:scale-105 text-xl font-semibold px-4 py-2 rounded-2xl"
                        @click="handleSignup">Try for
                        free
                    </button>
                </div>
            </ul>
            <!-- <div class="">
            </div> -->
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';
import { ref } from 'vue'

// const isLoggedIn = ref(false)
const router = useRouter();

let open = ref(false)
const toggleMenu = () => {
    open.value = !open.value
}

const handleSignup = () => {
    router.push('/signup')
};
const handleLogin = () => {
    router.push('/login')
};

router.beforeEach((to, from, next) => {
    to
    from
    open.value = false;
    next();
})

</script>