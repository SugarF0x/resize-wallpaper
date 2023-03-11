<script setup lang="ts">
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"
import AspectRatio from "@/views/Editor/components/AspectRatio.vue"
import FileUpload from "@/views/Editor/components/FileUpload.vue"
import Preview from "@/views/Editor/components/Preview.vue"

const { uploadedImageUrl } = storeToRefs(useEditorStore())
</script>

<template>
  <div class="edditor">
    <aspect-ratio />

    <button @click="uploadedImageUrl = ''">reset</button>

    <img :src="uploadedImageUrl" alt="">

    <file-upload />

    <preview />
  </div>
</template>

<style scoped lang="scss">
.edditor {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
