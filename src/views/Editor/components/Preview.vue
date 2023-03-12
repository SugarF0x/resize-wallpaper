<script setup lang="ts">
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"
import { computed, ref, watchEffect } from "vue"
import getConfinedSizeByAspectRatio from "@/utils/getConfinedSizeByAspectRatio"
import { toBlob } from "html-to-image"
import { saveAs } from 'file-saver'

const { preset, uploadedImageUrl, fileName } = storeToRefs(useEditorStore())

const maxWidth = ref(0)
const maxHeight = ref(0)
const previewRef = ref<null | HTMLDivElement>(null)

watchEffect(() => {
  if (!previewRef.value) return
  maxWidth.value = previewRef.value.clientWidth
  maxHeight.value = previewRef.value.clientHeight
})

const size = computed(() => getConfinedSizeByAspectRatio(maxWidth.value, maxHeight.value, preset.value[1], preset.value[2]))

const PREVIEW_ID = 'image-preview'
async function download() {
  const previewElement = document.getElementById(PREVIEW_ID)
  if (!previewElement) throw new Error('Preview element not found')
  const blob = await toBlob(previewElement)
  if (!blob) throw new Error('Failed to generate file blob')
  saveAs(blob, `${preset.value[1]}-${preset.value[2]}-${fileName.value}`)
}
</script>

<template>
  <div class="preview" ref="previewRef">
    <div class="imageContainer" :id="PREVIEW_ID" @click="download">
      <v-img
        class="corner-fill-underlay"
        :src="uploadedImageUrl"
        :width="size[0]"
        :height="size[1]"
        cover
      />
      <v-img
        class="underlay"
        :src="uploadedImageUrl"
        :width="size[0]"
        :height="size[1]"
        cover
      >
        <v-img :src="uploadedImageUrl" class="original" />
        <v-chip class="cta" variant="elevated" size="x-small">
          Click the image to download
        </v-chip>
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

.cta {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
