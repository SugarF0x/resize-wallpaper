import { defineStore } from "pinia"
import { ref } from "vue"
import aspectPresets from "@/views/Editor/components/Settings/consts/aspectPresets"
import { fromPairs } from "lodash"
import getClosestNumber from "@/utils/numbers/getClosest"

const useEditorStore = defineStore('editor', () => {
  const uploadedImageUrl = ref('')

  const { outerWidth, outerHeight } = window
  const userAspectRatio = outerWidth / outerHeight

  const aspectRatioToPresetMap = fromPairs(aspectPresets.map(preset => [preset[1] / preset[2], preset]))
  const presetAspectRatios = Object.keys(aspectRatioToPresetMap).map(Number)
  const closestPreset = aspectRatioToPresetMap[getClosestNumber(presetAspectRatios, userAspectRatio)]

  const aspectRatio = ref([closestPreset[1], closestPreset[2]])

  return {
    uploadedImageUrl,
    aspectRatio
  }
})

export default useEditorStore
