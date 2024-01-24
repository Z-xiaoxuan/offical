<script setup></script>

<template>
  <div class="container" id="contact">
    <div class="main">
      <div class="title">CONTACT</div>
      <div style="display: flex; justify-content: center;">
        <div class="left">
          <div class="img">
            <img src="../assets/contact.jpg" style="width: 100%; border-radius: 20px" />
          </div>
        </div>
        <div class="right">

          If you have any suggestions or are interested in collaborating, feel free to reach out to us via email at any
          time at support@dwfun.com.

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
  margin-bottom: 100px;

  .main {
    width: 1000px;

    .title {
      color: white;
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
        left: calc(50% - 70px);
        bottom: 20px;
        content: "";
        display: block;
        background: linear-gradient(to right, #b3b3b3, #b9b8b8);
        width: 140px;
        height: 2px;
      }
    }

    .left {
      width: 0%;
      display: flex;
      align-items: center;
      justify-content: end;

      .img {
        width: 230px;
        height: 230px;
        overflow: hidden;
        margin-right: 60px;
      }
    }

    .right {
      width: 70%;
      font-size: 22px;
      font-weight: bold;
      color: #b3b3b3;
      line-height: 30px;
      text-align: center;
      padding: 0 25px;
    }
  }
}

@media (max-width: 600px) {
  .container {
    width: 100%;
    margin-top: 40px;

    .main {
      width: 100%;

      .left {
        display: none;
      }

      .right {
        width: 100%;

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
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #1e1e1e;
          line-height: 24px;
          margin: 16px 20px 50px 20px;
        }
      }
    }
  }
}
</style>
