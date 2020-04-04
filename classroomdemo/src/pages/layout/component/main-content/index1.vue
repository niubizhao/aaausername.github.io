<template>
  <div class="main-center">
    <el-row :gutter="15">
      <el-col :span="8" class=" main-item">
        <img class="imgheight" src="../../../../assets/image/vide4.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
      <el-col :span="8" class="main-box main-item">
        <img class="imgheight" src="../../../../assets/image/vide5.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
      <el-col :span="8" class="main-box main-item">
        <img class="imgheight" src="../../../../assets/image/vide6.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="8" class="main-item">
        <img src="../../../../assets/image/video1.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
      <el-col :span="8" class="main-item">
        <img src="../../../../assets/image/video2.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
      <el-col :span="8" class="main-item">
        <img src="../../../../assets/image/video3.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="16">
        <el-row :gutter="10">
          <el-col :span="8" class="main-item">
            <img  class="imgheight1" src="../../../../assets/image/vide7.png" alt />
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
          <el-col :span="8" class="main-item">
            <img  class="imgheight1" src="../../../../assets/image/vide7.png" alt />
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
          <el-col :span="8" class="main-item">
            <img  class="imgheight1" src="../../../../assets/image/vide8.png" alt />
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8" class="main-item">
            <img  class="imgheight1" src="../../../../assets/image/vide9.png" alt />
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
          <el-col :span="16" class="main-item">
            <img class="imgheight1" src="../../../../assets/image/vide10.png" alt />
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="main-item">
        <img class="imgheiht2" src="../../../../assets/image/vide11.png" alt />
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>

<style lang="scss" scoped>
.main-center {
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  background-color: #3b23a2;
}
.main-item {
  position: relative;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  &:hover{
      -webkit-transform: scale(0.8);
      
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
  }
  .el-switch {
    position: absolute;
    right:30px;
    bottom: 21px;
  }
 
}
img {
  width: 100%;
 
}
.imgheight{
  height: 260px;
}
.imgheight1{
  height: 200px;
}
.imgheiht2{
  height: 400px;;
}
</style>