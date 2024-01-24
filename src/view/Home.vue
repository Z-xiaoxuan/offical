<script setup>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Work from "../components/Work.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted } from "vue";

const drawer = ref(false);

const el = ref(null);
const headerRef = ref(null);
const mainRef = ref(null);
const workRef = ref(null);
const aboutRef = ref(null);


const headerHeight = ref(null);
const mainHeight = ref(null);
const workHeight = ref(null);
const aboutHeight = ref(null);


const handleScroll = (e) => {
  if (e === 0) {
    el.value.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  if (e === 530) {
    el.value.scrollTo({
      top: headerHeight.value + mainHeight.value - 60,
      behavior: "smooth",
    });
  }
  if (e === 1800) {
    el.value.scrollTo({
      top: headerHeight.value + mainHeight.value + workHeight.value - 60,
      behavior: "smooth",
    });
  }
  if (e === 2600) {
    el.value.scrollTo({
      top:
        headerHeight.value +
        mainHeight.value +
        workHeight.value +
        aboutHeight.value -
        60,
      behavior: "smooth",
    });
  }
};

const handleDrawer = () => {
  drawer.value = true;
};
onMounted(() => {
  console.log(headerRef.value.offsetHeight);
  console.log(mainRef.value.offsetHeight);
  console.log(workRef.value.offsetHeight);
  console.log(aboutRef.value.offsetHeight);
  headerHeight.value = headerRef.value.offsetHeight;
  mainHeight.value = mainRef.value.offsetHeight;
  workHeight.value = workRef.value.offsetHeight;
  aboutHeight.value = aboutRef.value.offsetHeight;
});
</script>

<template>
  <div class="container" ref="el">
    <div>
      <Header class="nav" @scroll-to="handleScroll" @show-drawer="handleDrawer"></Header>
      <div ref="headerRef" style="height: 60px; width: 100vw"></div>
    </div>
    <div ref="mainRef">
      <Main></Main>
    </div>
    <div ref="workRef">
      <Work></Work>
    </div>
    <div ref="aboutRef">
      <About></About>
    </div>
    <Contact></Contact>
    <Footer></Footer>
    <el-backtop style="z-index: 99" :right="100" :bottom="150" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  font-family: "Open Sans", Arial, sans-serif;
}

@media (max-width: 960px) {
  .container {
    scroll-behavior: smooth;
  }
}
</style>
