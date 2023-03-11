<script setup lang="ts">
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"
import aspectPresets from "@/views/Editor/components/Settings/consts/aspectPresets"
import { toPlainObject } from 'lodash'

const ticks = toPlainObject(aspectPresets.map(item => `${item[1]}/${item[2]}`)) as Record<number, string>

const { presetIndex } = storeToRefs(useEditorStore())
</script>

<template>
  <div class="aspect-ratio">
    <v-slider
      v-model="presetIndex"
      :ticks="ticks"
      :max="aspectPresets.length - 1"
      step="1"
      show-ticks="always"
      tick-size="4"
    />

    <div class="description">
      {{ aspectPresets[presetIndex][0] }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.description {
  text-align: center;
}
</style>
