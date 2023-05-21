<script setup lang="ts">
import Phone from "@/components/Phone.vue"
</script>

<template>
  <div class="home">
    <h1 class="text-center mb-4">Welcome to Wallpaper Resizer</h1>

    <v-row>
      <v-col cols="12" md="6">
        <p class="mb-4">
          Have you ever found a cool looking image that would look fantastic on you phone or computer wallpaper
        </p>

        <v-img src="/images/example-1.jpg" />

        <p class="mt-4">
          If ony there was a tool to add that stupid blur filter in the image backdrop to have the whole picture
          preserved and yet have similarly colored empty space
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <Phone>
          <v-img src="/images/example-1.jpg" class="fill-height" cover />
        </Phone>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <Phone>
          <div class="result-example" />
        </Phone>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          Well, wouldn't you know, Wallpaper Resizer is exactly the tool for the job!
          Upload an image, select aspect ratio, preview the result and click the preview to download
          the newly transformed video!
        </p>

        <p class="mt-4">
          It is completely free with no upload limits. In fact, there are no uploads at all to begin with!
          All the conversion is done offline inside your very own browser!
        </p>

        <p class="mt-4">
          Head over to the
          <v-btn to="/editor">Editor</v-btn>
          and try it out for yourself!
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.result-example {
  flex: 1;
  display: flex;
  background-image: url("/images/example-2.jpg");
  background-size: cover;
}

.home {
  p {
    font-size: 24px;
  }
}
</style>
