<script setup lang="ts">
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"
import Settings from "@/views/Editor/components/Settings.vue"
import FileUpload from "@/views/Editor/components/FileUpload.vue"

const { uploadedImageUrl } = storeToRefs(useEditorStore())
</script>

<template>
  <settings/>

  <button @click="uploadedImageUrl = ''">reset</button>

  <img :src="uploadedImageUrl" alt="">

  <div style="margin-top: 100px">
    <file-upload />
  </div>
</template>

<style scoped lang="scss">

</style>
