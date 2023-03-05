import { defineStore } from "pinia"
import { ref } from "vue"

const useEditorStore = defineStore('editor', () => {
  const uploadedImageUrl = ref('')

  const aspectRatio = ref([1, 1])

  return {
    uploadedImageUrl,
    aspectRatio
  }
})

export default useEditorStore
