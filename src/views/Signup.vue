<template>
    <div class="flex justify-start items-center">

        <div class="w-full md:w-[50%] py-6 px-10 flex flex-col justify-evenly">
            <RouterLink to="/" class="">
                <svg width="156" height="40" viewBox="0 0 156 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M31.32647 8.43938C31.0612 7.85354 30.1031 7.85354 29.5173 8.43938L26.4642 11.4948C25.2133 10.6627 23.7779 10.2497 22.3364 10.2497C20.4174 10.2497 18.4736 10.9822 17.0336 12.4469L12.5336 16.9472C9.96726 19.5106 9.65093 23.4747 11.5786 26.384L8.52581 29.4394C7.93997 30.0253 7.93997 30.9745 8.52581 31.5606C8.81885 31.8536 9.20261 32 9.58637 32C9.97038 32 10.3539 31.8536 10.6469 31.5606L13.6998 28.5051C14.9509 29.3372 16.395 29.7502 17.8364 29.7502C19.7305 29.7502 21.6743 29.0178 23.1392 27.553L27.6306 23.053C30.197 20.4893 30.5133 16.5252 28.5853 13.616L31.647 10.5605C32.2329 9.97466 32.2329 9.02522 31.647 8.43938ZM26.8276 17.75C26.8276 18.9512 26.3589 20.0821 25.5095 20.9317L21.0181 25.4317C20.1656 26.2813 19.0129 26.75 17.8364 26.75C17.1567 26.75 16.5063 26.5832 15.9087 26.2988L18.1223 24.0605C18.7081 23.4747 18.7081 22.5255 18.1223 21.9394C17.5611 21.3536 16.6119 21.3536 16.0261 21.9394L13.7878 24.1777C13.5008 23.5829 13.3366 22.9325 13.3366 22.25C13.3366 21.0488 13.8054 19.9179 14.655 19.0683L19.13 14.5683C19.9796 13.7187 21.1352 13.25 22.3364 13.25C23.0161 13.25 23.6634 13.4168 24.2612 13.7012L21.9791 15.9862C21.3932 16.572 21.3932 17.5212 21.9791 18.1073C22.2721 18.4004 22.6556 18.5468 23.0396 18.5468C23.4205 18.5468 23.8043 18.4004 24.0971 18.1073L26.3766 15.8223C26.6634 16.4168 26.8276 17.0674 26.8276 17.75Z"
                        fill="#0065FE" />
                    <path d="M40.0864 8V32" stroke="#0065FE" stroke-width="2" stroke-linecap="round" />
                    <path
                        d="M55.3824 27.336C52.0464 27.336 49.7184 25.752 48.7824 23.184L51.6144 21.528C52.2624 23.232 53.5584 24.096 55.4784 24.096C57.3264 24.096 58.1664 23.352 58.1664 22.32C58.1664 21.72 57.9024 21.264 57.3744 20.952C56.8464 20.616 55.9104 20.256 54.5424 19.872C53.0304 19.416 52.1184 19.056 51.0624 18.312C50.0304 17.544 49.4784 16.392 49.4784 14.856C49.4784 13.344 50.0064 12.12 51.0864 11.232C52.1664 10.32 53.4864 9.864 54.9984 9.864C57.7104 9.864 59.8464 11.256 60.9984 13.632L58.2144 15.24C57.5424 13.8 56.4624 13.08 54.9984 13.08C53.6304 13.08 52.7904 13.776 52.7904 14.76C52.7904 15.288 53.0064 15.72 53.4384 16.056C53.8944 16.368 54.7344 16.728 55.9824 17.112L57.1344 17.496C57.3984 17.568 57.7584 17.712 58.2144 17.904C58.6704 18.072 59.0304 18.24 59.2704 18.408C59.7744 18.72 60.5424 19.32 60.8544 19.896C61.2144 20.472 61.4784 21.312 61.4784 22.272C61.4784 23.832 60.9024 25.056 59.7744 25.968C58.6464 26.88 57.1824 27.336 55.3824 27.336ZM71.4894 27.336C68.9694 27.336 66.8814 26.496 65.2254 24.816C63.5694 23.136 62.7534 21.072 62.7534 18.6C62.7534 16.128 63.5694 14.04 65.2254 12.384C66.8814 10.704 68.9694 9.864 71.4894 9.864C74.5374 9.864 77.2734 11.4 78.7134 13.824L75.8574 15.48C75.0174 13.968 73.4094 13.08 71.4894 13.08C69.8574 13.08 68.5374 13.584 67.5294 14.616C66.5454 15.648 66.0414 16.968 66.0414 18.6C66.0414 20.208 66.5454 21.528 67.5294 22.56C68.5374 23.592 69.8574 24.096 71.4894 24.096C73.4094 24.096 75.0654 23.184 75.8574 21.72L78.7134 23.376C77.2734 25.8 74.5614 27.336 71.4894 27.336ZM80.748 27V10.2H84.06V27H80.748ZM92.6481 27.336C89.3121 27.336 86.9841 25.752 86.0481 23.184L88.8801 21.528C89.5281 23.232 90.8241 24.096 92.7441 24.096C94.5921 24.096 95.4321 23.352 95.4321 22.32C95.4321 21.72 95.1681 21.264 94.6401 20.952C94.1121 20.616 93.1761 20.256 91.8081 19.872C90.2961 19.416 89.3841 19.056 88.3281 18.312C87.2961 17.544 86.7441 16.392 86.7441 14.856C86.7441 13.344 87.2721 12.12 88.3521 11.232C89.4321 10.32 90.7521 9.864 92.2641 9.864C94.9761 9.864 97.1121 11.256 98.2641 13.632L95.4801 15.24C94.8081 13.8 93.7281 13.08 92.2641 13.08C90.8961 13.08 90.0561 13.776 90.0561 14.76C90.0561 15.288 90.2721 15.72 90.7041 16.056C91.1601 16.368 92.0001 16.728 93.2481 17.112L94.4001 17.496C94.6641 17.568 95.0241 17.712 95.4801 17.904C95.9361 18.072 96.2961 18.24 96.5361 18.408C97.0401 18.72 97.8081 19.32 98.1201 19.896C98.4801 20.472 98.7441 21.312 98.7441 22.272C98.7441 23.832 98.1681 25.056 97.0401 25.968C95.9121 26.88 94.4481 27.336 92.6481 27.336ZM106.125 27.336C102.789 27.336 100.461 25.752 99.5246 23.184L102.357 21.528C103.005 23.232 104.301 24.096 106.221 24.096C108.069 24.096 108.909 23.352 108.909 22.32C108.909 21.72 108.645 21.264 108.117 20.952C107.589 20.616 106.653 20.256 105.285 19.872C103.773 19.416 102.861 19.056 101.805 18.312C100.773 17.544 100.221 16.392 100.221 14.856C100.221 13.344 100.749 12.12 101.829 11.232C102.909 10.32 104.229 9.864 105.741 9.864C108.453 9.864 110.589 11.256 111.741 13.632L108.957 15.24C108.285 13.8 107.205 13.08 105.741 13.08C104.373 13.08 103.533 13.776 103.533 14.76C103.533 15.288 103.749 15.72 104.181 16.056C104.637 16.368 105.477 16.728 106.725 17.112L107.877 17.496C108.141 17.568 108.501 17.712 108.957 17.904C109.413 18.072 109.773 18.24 110.013 18.408C110.517 18.72 111.285 19.32 111.597 19.896C111.957 20.472 112.221 21.312 112.221 22.272C112.221 23.832 111.645 25.056 110.517 25.968C109.389 26.88 107.925 27.336 106.125 27.336ZM128.4 24.816C126.696 26.496 124.632 27.336 122.208 27.336C119.784 27.336 117.72 26.496 116.016 24.816C114.336 23.112 113.496 21.048 113.496 18.6C113.496 16.152 114.336 14.088 116.016 12.408C117.72 10.704 119.784 9.864 122.208 9.864C124.632 9.864 126.696 10.704 128.4 12.408C130.104 14.088 130.944 16.152 130.944 18.6C130.944 21.048 130.104 23.112 128.4 24.816ZM118.344 22.56C119.376 23.592 120.672 24.096 122.208 24.096C123.744 24.096 125.04 23.592 126.072 22.56C127.104 21.528 127.632 20.208 127.632 18.6C127.632 16.992 127.104 15.672 126.072 14.64C125.04 13.608 123.744 13.08 122.208 13.08C120.672 13.08 119.376 13.608 118.344 14.64C117.312 15.672 116.784 16.992 116.784 18.6C116.784 20.208 117.312 21.528 118.344 22.56ZM146.063 27H142.487L139.103 21.168H136.583V27H133.271V10.2H139.991C141.551 10.2 142.871 10.752 143.951 11.832C145.031 12.912 145.583 14.232 145.583 15.768C145.583 17.856 144.287 19.776 142.343 20.664L146.063 27ZM139.991 13.296H136.583V18.264H139.991C141.239 18.264 142.271 17.136 142.271 15.768C142.271 14.4 141.239 13.296 139.991 13.296Z"
                        fill="#0065FE" />
                </svg>
            </RouterLink>
            <div class="flex flex-col gap-3 mb-8">

                <p class="text-3xl">Create your account</p>


                <p class="text-xl">Have an account? <span>
                        <RouterLink to="/login">Log in now</RouterLink>
                    </span>
                </p>
            </div>


            <div class="flex gap-2 mb-3">

                <p @click="signInWithGoogle"
                    class="border border-black rounded hover:cursor-pointer text-center p-3 w-full flex justify-center items-center gap-3">
                    <Google /> Google
                </p>
                <!-- <a href="" class="border border-black rounded text-center p-3 w-1/2">Apple</a> -->
            </div>

            <p class=" text-center">or with email and password</p>

            <form action="" class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <label for="text">Username
                    </label>
                    <input v-model="v$.username.$model" class="p-2 h-10 border border-black rounded-lg
                " type="text">
                    <small class="text-red-500" v-if="v$.username.$errors.length">{{
                    v$.userame.$errors[0].$message
                }}</small>
                </div>
                <div class="flex flex-col">
                    <label for="email">Email</label>

                    <input v-model="v$.email.$model" class="p-2 h-10 border border-black rounded-lg" type="email">

                    <small class="text-red-500" v-if="v$.email.$errors.length">{{
                    v$.email.$errors[0].$message
                }}</small>
                </div>
                <div class="flex gap-2">

                    <div class="flex flex-col w-1/2">
                        <label for="password">Password</label>
                        <input v-model="v$.password.$model" class="p-2 h-10 border border-black rounded-lg"
                            type="password">
                        <small class="text-red-500" v-if="v$.password.$errors.length">{{
                    v$.password.$errors[0].$message
                }}</small>
                    </div>
                    <div class="flex flex-col w-1/2">
                        <label for="password">Confirm Password</label>
                        <input v-model="v$.confirmPassword.$model" class="p-2 h-10 border border-black rounded-lg"
                            type="password">
                        <small class="text-red-500" v-if="v$.confirmPassword.$errors.length">{{
                    v$.confirmPassword.$errors[0].$message }}</small>
                    </div>
                </div>
                <small class="text-left text-[#A0B1C0]">6 or more characters, one number, one uppercase & one
                    lowercase
                    letter</small>
                <button :class="{ 'cursor-not-allowed': isSubmitting }" :disabled="isSubmitting" type="button"
                    @click="signup" class="mt-4 bg-[#005AE2] text-white h-14 rounded-3xl">
                    {{ isSubmitting ? "Signing up..." : "Signup" }}
                </button>
            </form>
            <small class="text-[#A0B1C0]">By signing in with an account, you agree to
                Scissior's <span class="text-[#5C6F7F]">Terms of Service, Privacy Policy</span> and
                <span class="text-[#5C6F7F]">Acceptable Use Policy.</span>
            </small>
        </div>
        <div class="circuit md:w-[50%] h-screen py-0 my-0">
            <!-- <img src="../assets/test.svg" alt=""> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive, computed } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { toast } from 'vue3-toastify';
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import Google from '../components/svg-components/Google.vue';

const router = useRouter()
const user = reactive({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
});
const isSubmitting = ref(false);

const userRules = {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: {
        required,
        minLength: minLength(8),
        sameAs: sameAs(computed(() => user.password)),
    },
};

const v$ = useVuelidate(userRules, user);
const signup = async () => {
    const isValid = await v$.value.$validate();
    console.log(isValid)
    if (!isValid) return;
    const auth = getAuth()
    try {
        isSubmitting.value = true;

        const response = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password
        );
        if (response.user) {
            localStorage.setItem('isLoggedIn', 'true')
            router.push('/dashboard')
        }
    } catch (error: any) {
        toast.error(error.message)
    } finally {
        isSubmitting.value = false;
    }
}

const provider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        // console.log(user);
        if (user) {
            router.push("/dashboard")
        }
    } catch (error) {
        // console.error('Error loggin:', error);
        toast.error('Failed to login with google. Try again.');
    }
}

</script>

<style scoped>
.circuit {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath fill-rule='evenodd' d='M41 37.59V25h-2v12.59l-8.9-8.9-1.41 1.41 8.9 8.9H25v2h12.59l-8.9 8.9 1.41 1.41 8.9-8.9V55h2V42.41l8.9 8.9 1.41-1.41-8.9-8.9H55v-2H42.41l8.9-8.9-1.41-1.41-8.9 8.9zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM5 1h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM5 5h70v70H5V5zm2 68h66V7H7v66zM9 9h62v62H9V9zm2 60h58V11H11v58zm2-39.6V13h16.4A29.1 29.1 0 0 0 13 29.4zM15 15v6.67A31.17 31.17 0 0 1 21.67 15H15zm-2 52V50.6A29.1 29.1 0 0 0 29.4 67H13zm2-8.67V65h6.67A31.17 31.17 0 0 1 15 58.33zM67 67H50.6A29.1 29.1 0 0 0 67 50.6V67zm-8.67-2H65v-6.67A31.17 31.17 0 0 1 58.33 65zM67 13v16.4A29.1 29.1 0 0 0 50.6 13H67zm-2 8.67V15h-6.67A31.17 31.17 0 0 1 65 21.67zM39 13h2v2h-2v-2zm7.02.66l1.93.52-.51 1.93-1.94-.52.52-1.93zm6.61 2.46l1.74 1-1 1.73-1.74-1 1-1.73zm5.75 4.08l1.42 1.42-1.42 1.4-1.4-1.4 1.4-1.42zm4.5 5.43l1 1.74-1.73 1-1-1.74 1.73-1zm2.94 6.42l.52 1.93-1.93.52-.52-1.94 1.93-.51zM67 39v2h-2v-2h2zm-.66 7.02l-.52 1.93-1.93-.51.52-1.94 1.93.52zm-2.46 6.61l-1 1.74-1.73-1 1-1.74 1.73 1zm-4.08 5.75l-1.42 1.42-1.4-1.42 1.4-1.4 1.42 1.4zm-5.43 4.5l-1.74 1-1-1.73 1.74-1 1 1.73zM41 67h-2v-2h2v2zm6.95-1.18l-1.93.52-.52-1.93 1.94-.52.51 1.93zm-13.97.52l-1.93-.52.51-1.93 1.94.52-.52 1.93zm-6.61-2.46l-1.74-1 1-1.73 1.74 1-1 1.73zm-5.75-4.08l-1.42-1.42 1.42-1.4 1.4 1.4-1.4 1.42zm-4.5-5.43l-1-1.74 1.73-1 1 1.74-1.73 1zm-2.94-6.42l-.52-1.93 1.93-.52.52 1.94-1.93.51zM13 41v-2h2v2h-2zm.66-7.02l.52-1.93 1.93.51-.52 1.94-1.93-.52zm2.46-6.61l1-1.74 1.73 1-1 1.74-1.73-1zm4.08-5.75l1.42-1.42 1.4 1.42-1.4 1.4-1.42-1.4zm5.43-4.5l1.74-1 1 1.73-1.74 1-1-1.73zm6.42-2.94l1.93-.52.52 1.93-1.94.52-.51-1.93zM40 63a23 23 0 1 1 0-46 23 23 0 0 1 0 46zm0-2a21 21 0 1 0 0-42 21 21 0 0 0 0 42zm0-2a19 19 0 1 1 0-38 19 19 0 0 1 0 38zm0-2a17 17 0 1 0 0-34 17 17 0 0 0 0 34z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>