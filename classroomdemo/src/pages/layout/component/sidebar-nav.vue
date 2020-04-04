<template>
  <div>
     <div class="topCenter">
        <div class="demo-basic--circle">
          <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        </div>
        <div>admin</div>
        <div class="smallmenu"><img src="../../../assets/image/smallmenu.png" alt=""></div>
    </div>
    <div class="aside">
      <div class="roompic">
        <img src="../../../assets/image/room.png" alt="">
      </div>
      <el-scrollbar style="height:100%">
        <div v-for="(item,index) in roomList" :key="index" class="roomItem" :class="{active: activeIndex == index}" @click.prevent="onMenuClick(index)">
         <router-link tag="div" :to="item.id">{{item.name}}</router-link>
        </div>
      </el-scrollbar>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        roomList:[
          {
            name:'班级0001',
            id:"maincontent"
          },
          {
            name:'班级0002',
            id:"maincontent1"
          },
          {
            name:'班级00032',
            id:"maincontent"
          },
          {
            name:'班级00031',
            id:"maincontent1"
          },
          {
            name:'班级0004',
            id:"maincontent"
          },
          {
            name:'班级0005',
            id:"maincontent1"
          },
          {
            name:'班级0006',
            id:"maincontent"
          },
          {
            name:'班级0007',
            id:"maincontent1"
          },
          {
            name:'班级0008',
            id:"/403"
          },
          {
            name:'班级0009',
            id:"/404"
          },
        ],
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        activeIndex: ''
      };
    },
    created() {
    },
    methods: {
      onMenuClick(index){
        this.activeIndex = index
      },
    }
  }
</script>

<style lang="scss" >
  .topCenter{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: #fff;
    height: 100%;
  }
  .demo-basic--circle{
    margin-right: 10px;
    
  }
.smallmenu{
  margin-left:25px;
  img{
    width: 25px;
    height: 25px;
  } 
}
.aside{
  height:700px;
  background:url('../../../assets/image/bg-log.png')-43px 290px no-repeat;
  background-color: #fff;
  overflow: hidden;
  background-size: 120%;;
  
  .roompic{
    position: relative;
    top: -10px;
    left: -10px;
    img{
      width: 275px;
      height: 160px;
      
    } 
  }
  .el-scrollbar{
    position: relative;
    top: -70px;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .roomItem{
    margin:0 0 0 40px;
    line-height: 100px;
    text-align: center;
    height: 60px;
    width: 80%;
    border-bottom: 1px solid #000;
    &:hover{
      color: red;
    }
  }
}
.active{
  color: red;
}

</style>