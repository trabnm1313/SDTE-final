<template>
  <video id="video-container" controls controlsList="nodownload" disablepictureinpicture>
    <source :src="url">
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    url: String
  },
};
</script>

<style>
video {
  height: 80vh;
}
@media only screen and (max-width: 800px) {
  video {
    height: 40vh;
  }
}
</style>