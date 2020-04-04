<template>
    <div>
      <el-container>
        <el-aside width="390px">
          <sidebarNav class="sidebar"/>
        </el-aside>
        <el-main class="main">
          <Main/>
        </el-main>
      </el-container>
    </div>
</template>

<script>
import sidebarNav from './component/sidebar-nav'
import Main from './component/main'
export default {
    data() {
        return {}
    },
    computed: {

    },
    components: {
        sidebarNav,
        Main
    }
}
</script>

<style lang="scss" scoped>
.el-container{
  background: url('../../assets/image/bg.png');
  background-size: 100%;
  padding: 0 0 0 30px;
  box-sizing: border-box;
}
.sidebar{
 padding: 20px 20px 30px;
 box-sizing: border-box;
}
.main{
  width: 100px;
}
</style>