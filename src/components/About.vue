<script setup></script>

<template>
  <div class="container" id="about">
    <div class="main">
      <div class="title">ABOUT US</div>
      <div style="display: flex; justify-content: center;">
        <div class="left">
          Our team, which is both fresh and enthusiastic, aims to develop top-quality games that are highly shareable. We
          concentrate on creating games that not only have a viral appeal but also offer unforgettable gameplay
          experiences.
        </div>
        <div class="right">
          <div class="img">
            <img src="../assets/aboutus.jpg" style="width: 100%; border-radius: 20px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  height: auto !important;
  margin-top: 50px;

  .main {
    width: 1000px;
    height: 100%;

    .title {
      color: #ffffff;
      position: relative;
      height: 100px;
      width: 100%;
      line-height: 100px;
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 30px;

      &::after {
        position: absolute;
        left: calc(50% - 75px);
        bottom: 20px;
        content: "";
        display: block;
        background: linear-gradient(to right, #b3b3b3, #b9b8b8);
        width: 150px;
        height: 2px;
      }
    }

    .left {

      width: 70%;
      font-size: 22px;
      font-weight: bold;
      color: #b3b3b3;
      line-height: 30px;
      text-align: center;
    }

    .right {
      display: none;
      height: auto;
      width: 0%;
      display: flex;
      align-items: center;

      .img {
        float: right;
        width: 230px;
        height: 230px;
        overflow: hidden;
        margin-left: 50px;
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    width: 100%;

    .main {
      width: 100%;

      .left {
        width: 100%;
        padding: 0 25px;

        .title {
          position: relative;
          height: 100px;
          width: 100vw;
          line-height: 100px;
          text-align: center;
          font-size: 26px;
          font-weight: 500;

          &::after {
            position: absolute;
            left: calc(50% - 65px);
            bottom: 25px;
            content: "";
            display: block;
            background: linear-gradient(to right, #000000, #000000);
            width: 130px;
            height: 2px;
          }
        }

        .text-2 {
          font-size: 18px;
          font-weight: bold;
          color: #1e1e1e;
          line-height: 24px;
          margin: 16px 15px 40px 0;
        }
      }

      .right {
        display: none;
      }
    }
  }
}
</style>
