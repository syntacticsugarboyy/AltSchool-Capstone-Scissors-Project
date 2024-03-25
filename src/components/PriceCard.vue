<template>
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 py-8 w-[90%] md:w-[80%]">
        <section class="flex flex-col gap-6 justify-center  rounded w-[90%] md:w-[40%] py-10 pl-16 md:pl-4">
            <p class=" text-xl font-semibold">Basic</p>
            <p class=" text-5xl font-semibold">Free</p>
            <p class=" text-lg">Free plan for all users</p>

            <ul class="flex flex-col gap-6">
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Unlimited URL Shortening</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Basic Link Ananlysis</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Customizable Short Links</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Standard Support</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Ad-supported</li>
            </ul>
        </section>


        <section
            class="bg-[#50514f] text-white flex flex-col gap-6 justify-center border border-black rounded w-[90%] md:w-[50%] py-20 pl-10 md:pl-4">
            <p class=" text-xl font-semibold">Professional</p>
            <p class=" text-5xl font-semibold">$15/month</p>
            <p class=" text-lg">Ideal for business creators</p>

            <ul class="flex flex-col gap-6">
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Enhanced Link Analytics</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Custom Branded Domains</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Advanced Link Customization</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Priority Support</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Ad-free Experience</li>
            </ul>
        </section>


        <section class="flex flex-col gap-6 justify-center items-end rounded w-[90%] md:w-[40%] py-10 pl-16 md:pl-4">
            <p class=" text-xl font-semibold">Teams</p>
            <p class=" text-5xl font-semibold">$25/month</p>
            <p class=" text-lg">Share with up to 10 users</p>

            <ul class="flex flex-col gap-6">
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Team Collaboration</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>User Roles and Permissions</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Enhanced Security</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>API Access</li>
                <li class="flex items-center gap-3"><span>
                        <Checkcircle />
                    </span>Dedicated Account Manager</li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import Checkcircle from '../components/svg-components/Checkcircle.vue'
// const basic = ['Unlimited URL Shortening', 'Basic Link Ananlysis', 'Customizable Short Links', 'Standard Support', 'Ad-supported']
</script>

<style scoped></style>