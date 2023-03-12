<script setup lang="ts">
import { computed, ref, watchEffect } from "vue"
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"

const { uploadedImageUrl } = storeToRefs(useEditorStore())

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

const file = ref<Record<number, File> | null>(null)
watchEffect(() => {
  const image = file.value?.[0]
  if (!image) return
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
      v-model="file"
      :label="labelText"
      prepend-icon="mdi-paperclip"
      variant="outlined"
      :show-size="1000"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
