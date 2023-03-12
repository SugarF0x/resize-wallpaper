<script setup lang="ts">
import useEditorStore from "@/views/Editor/store"
import { storeToRefs } from "pinia"
import aspectPresets from "@/views/Editor/components/consts/aspectPresets"
import { toPlainObject } from 'lodash'
import { useDisplay } from "vuetify"

const { mdAndUp } = useDisplay()

const ticks = toPlainObject(aspectPresets.map(item => `${item[1]}/${item[2]}`)) as Record<number, string>

const { presetIndex } = storeToRefs(useEditorStore())

function getTickValueFromScope(scope: unknown): number {
  const doesScopeHaveValue = (scope: any): scope is { modelValue: number } => 'modelValue' in scope
  if (doesScopeHaveValue(scope)) return scope.modelValue
  return 0
}
</script>

<template>
  <div class="aspect-ratio">
    <v-slider
      v-model="presetIndex"
      :ticks="ticks"
      :max="aspectPresets.length - 1"
      step="1"
      :show-ticks="mdAndUp && 'always'"
      tick-size="4"
      thumb-label="always"
    >
      <template v-slot:thumb-label="scope">
        {{ ticks[getTickValueFromScope(scope)] }}
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
