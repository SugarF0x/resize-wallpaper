<script setup lang="ts">
import { Paths } from "@/router"
</script>

<template>
  <h1>I am a home page</h1>
  <router-link :to="Paths.EDITOR">go to editor</router-link>
</template>

<style scoped lang="scss">

</style>
