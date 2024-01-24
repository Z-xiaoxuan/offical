<script setup></script>

<template>
  <div class="main" id="home">
    <div class="video-container">
      <video class="video" src="../../public/video.mp4" autoplay loop :muted="true" playsinline
        webkit-playsinline></video>
      <img src="../assets/top.jpg" style="position: absolute; top: -40px;width: 100vw;">
    </div>
    <div class="text-1">DWFUN INTERNATIONAL LIMITED</div>
  </div>
</template>

<style scoped>
.main {
  position: relative;

  .text-1 {
    width: 100vw;
    text-align: center;
    position: absolute;
    top: 30vh;
    font-size: 82px;
    font-weight: 600;
    color: #ffffff;
    line-height: 46px;
    height: 46px;
    text-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
    margin: 24px 0 48px;
  }
}

.video-container {
  width: 100%;
  height: 0;
  padding-bottom: 37%;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    width: 100%;
    left: 0;
    top: 1000px;
    object-fit: contain;
  }
}

@media (max-width: 600px) {
  .main {
    .text-1 {
      padding: 0;
      margin: 0;
      position: absolute;
      font-size: 25px;
      top: calc(50% - 27px);
    }

    .video-container {
      width: 100vw;
      height: auto;
      padding: 0;

      .video {
        position: relative;
        width: 100%;
        top: 0;
      }

      img {
        display: none;
      }
    }
  }
}
</style>
