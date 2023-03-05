<script setup lang="ts">
import { Paths } from "@/router"
import { FileUpload } from './components'
import { ref } from "vue"

const url = ref('')
</script>

<template>
  <h1>i am an editor page</h1>
  <router-link :to="Paths.HOME">go home</router-link>

  <button @click="url = ''">reset</button>

  <img :src="url" alt="">

  <div style="margin-top: 100px">
    <file-upload v-model="url" />
  </div>
</template>

<style scoped lang="scss">

</style>
