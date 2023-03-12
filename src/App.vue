<script setup lang="ts">
import Paths from "@/router/paths"

const links: Array<[string, Paths]> = [
  ['Home', Paths.HOME],
  ['Editor', Paths.EDITOR]
]
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          image="/images/enlarge.png"
          class="me-10 ms-4"
          size="32"
          rounded="0"
        />

        <v-btn
          v-for="link in links"
          :key="link[0]"
          :to="link[1]"
          variant="text"
        >
          {{ link[0] }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3 d-flex">
      <v-container class="d-flex flex-grow-1">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

</style>
