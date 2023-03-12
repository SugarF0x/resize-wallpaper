<script setup lang="ts">
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"
import { computed, ref, watchEffect } from "vue"
import { toBlob } from "html-to-image"
import { saveAs } from "file-saver"
import getWrapperSizeByAspectRatio from "@/utils/getWrapperSizeByAspectRatio"

const { preset, uploadedImageUrl, fileName, shouldDownload } = storeToRefs(useEditorStore())

const nativeSize = ref<null | [number, number]>(null)
watchEffect(() => {
  if (!uploadedImageUrl.value) return

  const img = new Image()
  img.src = uploadedImageUrl.value
  img.onload = () => { nativeSize.value = [img.width, img.height] }
})

const parentSize = computed(() => {
  if (!nativeSize.value) return null
  return getWrapperSizeByAspectRatio(...nativeSize.value, preset.value[1], preset.value[2])
})

const PREVIEW_ID = 'image-preview'
async function download() {
  if (!parentSize.value) return
  const [canvasWidth, canvasHeight] = parentSize.value

  const previewElement = document.getElementById(PREVIEW_ID)
  if (!previewElement) throw new Error('Preview element not found')

  const blob = await toBlob(previewElement, { canvasWidth, canvasHeight, pixelRatio: 1 })
  if (!blob) throw new Error('Failed to generate file blob')

  saveAs(blob, `${preset.value[1]}-${preset.value[2]}-${fileName.value}`)
}

watchEffect(async () => {
  if (!shouldDownload.value) return
  await download()
  shouldDownload.value = false
})
</script>

<template>
  <div v-if="parentSize" class="downloader">
    <div class="imageContainer" :id="PREVIEW_ID">
      <v-img
        class="corner-fill-underlay"
        :src="uploadedImageUrl"
        :width="parentSize[0]"
        :height="parentSize[1]"
        cover
      />
      <v-img
        class="underlay"
        :src="uploadedImageUrl"
        :width="parentSize[0]"
        :height="parentSize[1]"
        cover
      >
        <v-img :src="uploadedImageUrl" class="original" />
      </v-img>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview {
  min-height: 50vh;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageContainer {
  cursor: pointer;
}

.corner-fill-underlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.original {
  align-self: center;
}

:deep(.underlay) {
  position: relative;

  .v-responsive__content {
    display: flex;
  }

  > img {
    filter: blur(8px)
  }
}
</style>
