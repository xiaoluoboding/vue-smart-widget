<template>
  <div id="app">
    <el-container class="app-container">
      <el-header class="app-header">
        <h1>vue-smart-widget</h1>
        <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <router-link to="/widget-only">Use Widget Only</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/widget-with-grid">Use Widget with Grid</router-link>
          </el-menu-item>
        </el-menu>
        <div class="open-in-github">
          <a href="https://github.com/xiaoluoboding/vue-smart-widget" target="_blank">
            <img :src="require('./assets/img/github.svg')" alt="github">
          </a>
        </div>
      </el-header>
      <el-container class="sub-container sub-layout">
        <!-- <el-aside width="160px" class="app-aside"></el-aside> -->
        <el-main class="app-main">
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key) {
      console.log(key)
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-menu--horizontal {
  border: 0;
  >.el-menu-item.is-active {
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
    z-index: 2;
    background: #fff;
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
      margin-left: 20px;
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
    position: relative;
    top: 60px;
  }
  .app-main {
    padding: 5px;
  }
}
</style>
