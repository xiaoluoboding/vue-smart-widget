<template>
  <div id="app">
    <el-container class="app-container">
      <el-header class="app-header" height="61px">
        <el-container class="sub-container sub-header">
          <h1 @click="activeIndex = 'home'">
            <router-link to="/home"
              ><span style="color: #40b883">vue-smart-widget</span></router-link
            >
          </h1>
          <el-menu
            :default-active="activeIndex"
            class="app-menu"
            mode="horizontal"
            router
            @select="(key) => (activeIndex = key)"
          >
            <el-menu-item index="widget-only"> Use Widget Only </el-menu-item>
            <el-menu-item index="widget-with-grid">
              Use Widget with Grid
            </el-menu-item>
          </el-menu>
          <div class="open-in-github">
            <a
              href="https://github.com/xiaoluoboding/vue-smart-widget/tree/next"
              target="_blank"
            >
              <img :src="githubIcon" alt="github" />
            </a>
          </div>
        </el-container>
      </el-header>
      <el-container class="sub-container sub-content">
        <el-main class="app-main">
          <!-- <keep-alive>
          </keep-alive> -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import githubIcon from '@/assets/icons/github.svg'
const activeIndex = 'home'
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-menu--horizontal {
  border: 0;
  > .el-menu-item.is-active {
    border-bottom-color: #40b883;
  }
}

.app-container {
  .app-header {
    display: flex;
    position: fixed;
    top: 0;
    overflow: hidden;
    width: 100%;
    color: #333;
    text-align: center;
    line-height: 60px;
    z-index: 3;
    background: #fff;
    border-bottom: 1px solid #ebeef5;
    h1 {
      color: #40b883;
      margin: 0;
      padding: 0;
      text-align: left;
    }
    a {
      text-decoration: none;
    }
    .app-menu {
      width: 560px;
      border-bottom: none;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .open-in-github {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      a {
        padding: 10px;
        color: #fff;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  .sub-container {
    margin: 0 auto;
    &.sub-header {
      padding: 0 20px;
    }
    &.sub-content {
      position: relative;
      width: 100%;
      top: 60px;
    }
  }
  .app-main {
    padding: 5px;
  }
}

@media (min-width: 576px) {
  .sub-container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .sub-container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .sub-container {
    max-width: 960px;
  }
}
@media (min-width: 1280px) {
  .sub-container {
    max-width: 1200px;
  }
}
</style>
