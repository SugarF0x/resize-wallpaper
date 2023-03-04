<script setup lang="ts">
import { computed, ref } from "vue"

function dragover(e: DragEvent) {
  e.preventDefault()
  isDragging.value = true
}

function dragleave(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
}

function drop(e: DragEvent) {
  dragleave(e)
  if (!input.value) throw new Error('Input is null')
  input.value.files = e.dataTransfer?.files ?? null
  onChange()
}

function onChange() {
  file.value = input.value?.files?.[0] ?? null
}

const file = ref<File | null>(null)
const input = ref<null | HTMLInputElement>(null)

const isDragging = ref(false)
const labelText = computed(() => isDragging.value ? 'Release to drop files here' : 'Drop files here or click here to upload.')
</script>

<template>
  <div class="file-drop">
    <input
      type="file"
      name="file"
      id="fileInput"
      @change="onChange"
      ref="input"
      accept=".jpg,.jpeg,.png"
    />

    <label
      for="fileInput"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      {{ labelText }}
    </label>
  </div>
</template>

<style scoped lang="scss">
.file-drop {
  border: 1px solid red;
  display: flex;

  input { display: none; }
  label { flex: 1; }
}
</style>
