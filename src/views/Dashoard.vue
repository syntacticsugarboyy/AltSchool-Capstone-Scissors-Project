<template>
    <div class="h-screen bg-[#a2d2ff]">
        <DashNav />
        <div class="">
            <section class="h-[40%] flex justify-center items-center py-4 bg-[#a2d2ff]">
                <Shortener />
            </section>

            <section v-if="userLinks" class="flex flex-col justify-center items-center gap-4 py-6 bg-[#a2d2ff]">
                <div class="w-[90%] md:w-[75%] border border-white rounded-md p-4 flex flex-col md:flex-row justify-between items-center"
                    v-for="link in userLinks" :key="link.userId">
                    <div class="flex flex-col items-start justify-center gap-4">

                        <p class="text-2xl text-[#003049]" v-if="link.name">{{ link.name }}</p>
                        <p class="text-2xl text-[#003049]" v-else>No title</p>
                        <a class="flex gap-3 justify-between hover:opacity-90" :href="link.shortenedLink"
                            target="_blank">{{
                link.shortenedLink }} <span @click="copyToClipboard(link.shortenedLink)"
                                class="p-1 bg-black text-white hover:cursor-pointer rounded">Copy link</span></a>
                    </div>
                    <div class=" flex justify-items-end">
                        <QRCodeVue3 :width="150" :height="150" :value="link.shortenedLink"
                            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                            :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }" :dotsOptions="{
                type: 'square',
                color: '#ffffff',
                gradient: {
                    type: 'linear',
                    rotation: 0,
                    colorStops: [
                        { offset: 0, color: '#ffffff' },
                        { offset: 1, color: '#ffffff' }
                    ]
                }
            }" :backgroundOptions="{ color: '#000000' }" :cornersSquareOptions="{ type: 'square', color: '#ffffff' }"
                            :cornersDotOptions="{ type: undefined, color: '#ffffff' }" fileExt="png" :download="true"
                            myclass="my-qur" imgclass="img-qr" downloadButton="my-button"
                            :downloadOptions="{ name: 'vqr', extension: 'svg' }" class="ml-9" />
                    </div>
                </div>
            </section>

            <section v-else>
                <div class="">
                    <p>No Links yet!</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import DashNav from '../components/DashNav.vue';
import Shortener from '../components/Shortener.vue';
import { toast } from 'vue3-toastify'
import QRCodeVue3 from 'qrcode-vue3';
import { useRouter } from 'vue-router'
import { db, auth } from '../utils/firebase';
import {
    onSnapshot, collection,
    // addDoc, deleteDoc, doc,
    query, where
} from 'firebase/firestore'
import { ref } from 'vue';

const router = useRouter();

// let userLinks: any = []
// console.log(userLinks);
// const currentUserId = auth.currentUser?.uid;

// // const getLinks = () => {
// onSnapshot(linksRef, (snapshot) => {
//     let links: any = []
//     snapshot.docs.forEach(doc => {
//         links.push({ ...doc.data(), id: doc.id })
//     })
//     userLinks = links.filter((link: any) => link.userId === currentUserId)

// })

// }

// getLinks()




// onMounted(() => {
//     // getLinks()
// })
const copyToClipboard = async (text: any) => {
    try {
        await navigator.clipboard.writeText(text)
        toast.success('Copied to clipboard!')
    } catch (error) {
        toast.error('Failed to copy!')
        console.error('Copy to clipboard failed:', error)
    }
}


const userLinks: any = ref([]);

const userId = auth.currentUser?.uid;
if (!userId) {
    router.push('/login')
    // Exit early if user is not logged in
} else {


    const q = query(collection(db, 'links'), where('userId', '==', userId));

    onSnapshot(q, (snapshot) => {
        userLinks.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    });
}

// Clean up the listener when the component is unmounted
// onUnmounted(unsubscribe);


// 
</script>

<style scoped></style>