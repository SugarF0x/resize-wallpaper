<script setup lang="ts">
import { Paths } from "@/router"
import { FileUpload } from './components'
import { storeToRefs } from "pinia"
import { useEditorStore } from "@/views/Editor/store"

const { uploadedImageUrl } = storeToRefs(useEditorStore())
</script>

<template>
  <h1>i am an editor page</h1>
  <router-link :to="Paths.HOME">go home</router-link>

  <button @click="uploadedImageUrl = ''">reset</button>

  <img :src="uploadedImageUrl" alt="">

  <div style="margin-top: 100px">
    <file-upload />
  </div>
</template>

<style scoped lang="scss">

</style>
