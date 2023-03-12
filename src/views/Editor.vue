<script setup lang="ts">
import AspectRatio from "@/views/Editor/components/AspectRatio.vue"
import FileUpload from "@/views/Editor/components/FileUpload.vue"
import Preview from "@/views/Editor/components/Preview.vue"
import Downloader from "@/views/Editor/components/Downloader.vue"
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"

const { uploadedImageUrl } = storeToRefs(useEditorStore())
</script>

<template>
  <div class="editor">
    <file-upload />
    <preview v-if="uploadedImageUrl" />
    <aspect-ratio v-if="uploadedImageUrl" />
    <Downloader />
  </div>
</template>

<style scoped lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
