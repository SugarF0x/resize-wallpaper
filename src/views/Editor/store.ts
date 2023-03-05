import { defineStore } from "pinia"
import { ref } from "vue"

export const useEditorStore = defineStore('editor', () => {
  const uploadedImageUrl = ref('')

  const aspectRatio = ref(16/9)

  return {
    uploadedImageUrl,
    aspectRatio
  }
})
