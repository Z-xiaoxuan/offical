<script setup></script>

<template>
  <div id="work">
    <div class="title">GAMES</div>
    <div class="text">Our online game "Will: A Wonderful World" has been released on Steam and has attracted a substantial
      user base.
    </div>
    <div class="card-list">
      <div class="pc">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content">
              <a target="_blank" href="https://store.steampowered.com/app/588040/WILL_A_Wonderful_World__WILL/"><img
                  src="../assets/31.jpg" /></a>

            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <a target="_blank" href="https://store.steampowered.com/app/588040/WILL_A_Wonderful_World__WILL/"><img
                  src="../assets/32.jpg" /></a>

            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <a target="_blank" href="https://store.steampowered.com/app/588040/WILL_A_Wonderful_World__WILL/"><img
                  src="../assets/33.jpg" /></a>

            </div>
          </el-col>
        </el-row>

      </div>
      <div class="mobile">
        <el-row :gutter="18">
          <el-col :span="12">
            <div class="grid-content">
              <a target="_blank" href="https://store.steampowered.com/app/588040/WILL_A_Wonderful_World__WILL/"><img
                  src="../assets/31.jpg" /></a>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="18">
          <el-col :span="12">
            <div class="grid-content">
              <a target="_blank" href="https://store.steampowered.com/app/588040/WILL_A_Wonderful_World__WILL/"><img
                  src="../assets/32.jpg" /></a>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="18">
          <el-col :span="12">
            <div class="grid-content">
              <a target="_blank" href="https://store.steampowered.com/app/588040/WILL_A_Wonderful_World__WILL/"><img
                  src="../assets/33.jpg" /></a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
#work {
  margin-top: 50px;
}

.title {
  color: white;
  position: relative;
  height: 100px;
  width: 100vw;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;

  &::after {
    position: absolute;
    left: calc(50% - 45px);
    bottom: 20px;
    content: "";
    display: block;
    background: linear-gradient(to right, #b3b3b3, #b9b8b8);
    width: 90px;
    height: 2px;
  }
}

.text {
  text-align: center;
  margin-bottom: 40px;
  color: #b3b3b3;
}

.card-list {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mobile {
    display: none;
  }
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 25px;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;

  img {
    height: 500px;
    width: 400px;
  }
}

@media (max-width: 960px) {
  #work {
    .card-list {
      .mobile {
        display: block;
      }

      .pc {
        display: none;
      }
    }

    .grid-content {
      border-radius: 4px;
      height: 55vh;
      background-color: rgb(44, 59, 59);
    }

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
        left: calc(50% - 45px);
        bottom: 25px;
        content: "";
        display: block;
        background: linear-gradient(to right, #000000, #000000);
        width: 90px;
        height: 2px;
      }
    }
  }

  .el-row {
    margin-bottom: 18px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }
}
</style>
