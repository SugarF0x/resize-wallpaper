<script setup lang="ts">
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"
import aspectPresets from "@/views/Editor/components/consts/aspectPresets"
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
      tick-size="4"
      thumb-label="always"
    >
      <template #thumb-label="{ modelValue }">
        {{ ticks[modelValue] }}
      </template>
    </v-slider>

    <div class="description">
      {{ aspectPresets[presetIndex][0] }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.aspect-ratio {
  padding-top: 3rem;
  padding-bottom: 5rem;
}

.description {
  height: 2em;
  text-align: center;
}
</style>
