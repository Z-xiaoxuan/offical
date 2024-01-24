<script setup>
import { Operation } from "@element-plus/icons-vue";
import { ref } from "vue";

const emits = defineEmits(["scroll-to"]);

const isShowMenu = ref(false);
const handleClick = (e) => {
  emits("scroll-to", e);
  console.log(e);
  if (isShowMenu.value) {
    isShowMenu.value = false;
  }
};

const handleShowDrawer = () => {
  isShowMenu.value = !isShowMenu.value;
};
</script>

<template>
  <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" @click="handleClick(0)"><a>HOME</a></el-menu-item>
    <el-menu-item index="2" @click="handleClick(530)"><a>GAMES</a></el-menu-item>
    <el-menu-item index="3" @click="handleClick(1800)"><a>ABOUT</a></el-menu-item>
    <el-menu-item index="4" @click="handleClick(2600)"><a>CONTACT</a></el-menu-item>
    <el-menu-item index="5">
      <a target="_blank" href="https://dwfun.com/privacy.html">PRIVACY POLICY</a>
    </el-menu-item>
    <el-menu-item index="6">
      <a target="_blank" href="https://dwfun.com/terms.html">TERMS OF SERVICE</a>
    </el-menu-item>
  </el-menu>
  <div class="mobile">
    <div class="nav-bar">
      <button @click="handleShowDrawer" style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          width: 30px;
          border: 0;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.9);
        ">
        <el-icon :size="20">
          <Operation />
        </el-icon>
      </button>
    </div>
    <div class="select animate__animated animate__fadeIn" v-show="isShowMenu">
      <div class="item"><a @click="handleClick(0)">HOME</a></div>
      <div class="item"><a @click="handleClick(530)">GAMES</a></div>
      <div class="item"><a @click="handleClick(1800)">ABOUT</a></div>
      <div class="item"><a @click="handleClick(2600)">CONTACT</a></div>
      <div class="item">
        <a target="_blank" href="https://deegame.com/privacy.html">PRIVACY POLICY</a>
      </div>
      <div class="item">
        <a target="_blank" href="https://deegame.com/terms.html">TERMS OF SERVICE</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-menu {
  position: fixed;
  z-index: 99;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #545c64;
  backdrop-filter: blur(6px);

  .el-menu-item {
    padding: 0 45px;
  }
}

.mobile {
  display: none;
}

a {
  text-decoration: none;
  color: #333;
}

@media (max-width: 960px) {
  .el-menu {
    display: none;
  }

  .mobile {
    display: block;
    position: fixed;
    z-index: 99;
    width: 100vw;
    background-color: #1d1f21c0;
    backdrop-filter: blur(6px);

    .nav-bar {
      display: flex;
      align-items: center;
      justify-content: end;
      padding-right: 20px;
      height: 60px;

      button {
        &:hover {
          background-color: rgb(255, 255, 255);
        }
      }
    }

    .select {
      transition: all 300ms;
      box-shadow: 0px 4px 5px rgb(163, 163, 163, 0.7);
      padding-bottom: 10px;

      .item {
        text-align: center;
        line-height: 30px;
        height: 30px;
        font-size: 20px;
        background-color: rgb(236, 236, 236, 0.5);
        letter-spacing: 2px;
        margin: 10px 30px;
        border-radius: 20px;
      }
    }
  }
}
</style>
