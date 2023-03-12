<script setup lang="ts">
import { storeToRefs } from "pinia"
import useEditorStore from "@/views/Editor/store"
import { computed, ref, watchEffect } from "vue"
import getConfinedSizeByAspectRatio from "@/utils/getConfinedSizeByAspectRatio"

const { preset, uploadedImageUrl } = storeToRefs(useEditorStore())

const maxWidth = ref(0)
const maxHeight = ref(0)
const previewRef = ref<null | HTMLDivElement>(null)

watchEffect(() => {
  if (!previewRef.value) return
  maxWidth.value = previewRef.value.clientWidth
  maxHeight.value = previewRef.value.clientHeight
})

const size = computed(() => getConfinedSizeByAspectRatio(maxWidth.value, maxHeight.value, preset.value[1], preset.value[2]))
</script>

<template>
  <div v-if="uploadedImageUrl" class="preview" ref="previewRef">
    <div class="imageContainer">
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
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
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
