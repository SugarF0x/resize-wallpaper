<script setup lang="ts">
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"
import aspectPresets from "@/views/Editor/components/Settings/consts/aspectPresets"

const { aspectRatio } = storeToRefs(useEditorStore())

function setXY(x: number, y: number) {
  aspectRatio.value[0] = x
  aspectRatio.value[1] = y
}
</script>

<template>
  <div class="aspect-ratio">
    <div v-for="[title, x, y] in aspectPresets" :key="title">
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
