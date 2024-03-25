<template>
  <router-view />
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useUserStore } from './stores/user';

// const userStore = useUserStore()
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user) {

  } else {

  }
})
</script>