<script setup lang="ts">

</script>

<template>
  <div class="phone">
    <div class="screen">
      <div class="camera">
        <div class="lens" />
      </div>

      <div class="content">
        <slot />
      </div>

      <div class="navbar">
        <div class="home" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.phone {
  aspect-ratio: 9/16;
  border: 1px solid darkgrey;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.screen {
  display: flex;
  flex-direction: column;
  flex: 1;
  border-left: 8px solid black;
  border-right: 8px solid black;
}

.camera {
  background-color: black;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lens {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 1px solid lightgrey;
}

.content {
  flex: 1;
}

.navbar {
  height: 48px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid lightgrey;
}
</style>
