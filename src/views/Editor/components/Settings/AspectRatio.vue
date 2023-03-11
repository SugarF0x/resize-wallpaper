<script setup lang="ts">
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"

const { aspectRatio } = storeToRefs(useEditorStore())

const presets: Array<[string, number, number]> = [
  ['Commonly used in modern smartphones', 6, 13],
  ['Commonly used in mid-late 2010s smartphones', 9, 16],
  ['Commonly used in early 2010s smartphones', 3, 5],
  ['Commonly used in late 2000s smartphones', 2, 3],
  ['Perfect square', 1, 1],
  ['Traditional television & computer monitor standard', 4, 3],
  ['Academy standard film aspect ratio', 11, 8],
  ['Used to create an acceptable picture on both 4:3 and 16:9 televisions', 14, 9],
  ['A common computer screen ratio', 16, 10],
  ['HD video standard; US & UK digital broadcast TV standard', 16, 9],
  ['Cinematic widescreen "21:9" consumer standard', 64, 27]
]

function setXY(x: number, y: number) {
  aspectRatio.value[0] = x
  aspectRatio.value[1] = y
}
</script>

<template>
  <div class="aspect-ratio">
    <div v-for="[title, x, y] in presets" :key="title">
      <v-btn @click="setXY(x, y)" variant="tonal">
        {{ x }} / {{ y }}
      </v-btn>
      <h5>{{ title }}</h5>
    </div>

    <div class="input-wrapper">
      <input type="number" v-model="aspectRatio[0]">
      <span> / </span>
      <input type="number" v-model="aspectRatio[1]">
    </div>
  </div>
</template>

<style scoped lang="scss">
.aspect-ratio {
  display: flex;
}

.input-wrapper {
  display: flex;
}
</style>
