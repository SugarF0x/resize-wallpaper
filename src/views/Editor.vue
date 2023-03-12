<script setup lang="ts">
import AspectRatio from "@/views/Editor/components/AspectRatio.vue"
import FileUpload from "@/views/Editor/components/FileUpload.vue"
import Preview from "@/views/Editor/components/Preview.vue"
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"

const { uploadedImageUrl } = storeToRefs(useEditorStore())
</script>

<template>
  <div class="editor">
    <file-upload />
    <aspect-ratio v-if="uploadedImageUrl" />
    <preview v-if="uploadedImageUrl" />
  </div>
</template>

<style scoped lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
