<script setup lang="ts">
import { computed, ref, watchEffect } from "vue"
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"

const { uploadedImageUrl, fileName } = storeToRefs(useEditorStore())

function dragover(e: DragEvent) {
  e.preventDefault()
  isDragging.value = true
}

function dragleave(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
}

function drop() {
  isDragging.value = false
}

const file = ref<File[] | undefined>()
watchEffect(() => {
  const image = file.value?.[0]
  if (!image) return

  fileName.value = image.name

  const fr = new FileReader()
  fr.onload = () => {
    let url = fr.result
    if (typeof url !== 'string') url = ''
    uploadedImageUrl.value = url
  }
  fr.readAsDataURL(image)
})

const isDragging = ref(false)
const labelText = computed(() => {
  if (file.value) return 'Selected file'
  if (isDragging.value) return 'Release to drop files here'
  return 'Drop files here or click here to upload.'
})
</script>

<template>
  <div>
    <v-file-input
      class="file-input"
      v-model="file"
      :label="labelText"
      prepend-icon="mdi-paperclip"
      variant="outlined"
      :show-size="1000"
      :messages="file ? 'Click the image preview to download' : ''"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    />
  </div>
</template>

<style scoped lang="scss">
.file-input {
  margin-bottom: 1rem;
}
</style>
