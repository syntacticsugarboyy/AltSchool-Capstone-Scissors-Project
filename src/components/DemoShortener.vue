<template>
    <div class="w-[90%] md:w-[55%] h-60 flex flex-col items-center text-black">
        <form action="" class="h-full flex flex-col justify-evenly border border-white rounded-md px-4">
            <input class=" placeholder:to-black p-3 rounded-lg" type="text" placeholder="Paste your long url"
                v-model="urlData.longUrl">
            <small v-if="error" class="text-red-500">{{ error }}</small>
            <div class="flex gap-2">
                <input class="p-3 rounded-lg" type="text" placeholder="name not required">
                <input class="p-3 rounded-lg" type="text" placeholder="alias" v-model="urlData.alias">
            </div>
            <p class="text-black flex justify-between" v-if="urlData.shortenedLink">Slimmed url: {{
                    urlData.shortenedLink }} <span @click="copyToClipboard"
                    class="p-1 bg-black text-white hover:cursor-pointer">Copy link</span>
            </p>
            <button @click.prevent="shorten" class="bg-[#50514f] py-2 rounded-lg text-white">Trim Url</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  reactive } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import { token } from '../utils/tinyurl';

// let shortUrl = ref("")
let urlData = reactive({
    longUrl: "",
    alias: "",
    shortenedLink: "",
})

let error = ref('')
const shorten = async () => {
    error.value = ''
    if (!urlData.longUrl) {
        error.value = 'Please enter a long URL to shorten.'
        return
    }

    if (!/^(http|https):\/\/[^ "]+$/.test(urlData.longUrl)) {
        error.value = 'Please enter a valid URL.'
        return
    }

    try {
        // const url = `https://api.tinyurl.com/create`

        const reqBody = {
            url: urlData.longUrl,
            domain: "tinyurl.com",
            alias: urlData.alias,
            description: "string"
        };
        const response = await axios({
            method: 'post',
            url: `https://api.tinyurl.com/create`,
            data: reqBody,
            headers: {
                accept: `application/json`,
                authorization: `Bearer ${token}`,
                'content-type': `application/json`,
            },
        });
        urlData.shortenedLink = response.data.data.tiny_url
        if (response) {
            toast.success("slimmed link created")
        }


    } catch (err) {
        toast.error("something went wrong, choose another alias")
    }
}


const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(urlData.shortenedLink)
        toast.success('Copied to clipboard!')
    } catch (error) {
        toast.error('Failed to copy!')
        console.error('Copy to clipboard failed:', error)
    }
}



</script>

<style scoped></style>