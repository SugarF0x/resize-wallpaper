import { defineStore } from "pinia"
import { computed, ref } from "vue"
import aspectPresets from "@/views/Editor/components/consts/aspectPresets"
import { fromPairs } from "lodash"
import getClosestNumber from "@/utils/numbers/getClosest"

const useEditorStore = defineStore('editor', () => {
  const uploadedImageUrl = ref('')
  const fileName = ref('')

  const { outerWidth, outerHeight } = window
  const userAspectRatio = outerWidth / outerHeight

  const aspectRatioToPresetMap = fromPairs(aspectPresets.map(preset => [preset[1] / preset[2], preset]))
  const presetAspectRatios = Object.keys(aspectRatioToPresetMap).map(Number)
  const closestPreset = aspectRatioToPresetMap[getClosestNumber(presetAspectRatios, userAspectRatio)]

  const presetIndex = ref(aspectPresets.indexOf(closestPreset))
  const preset = computed(() => aspectPresets[presetIndex.value])

  const shouldDownload = ref(false)

  return {
    fileName,
    uploadedImageUrl,
    presetIndex,
    preset,
    shouldDownload
  }
})

export default useEditorStore
