<template>
  <div class="indexPage" id="indexPage">
    <!--<table>
      <thead>
      <tr>
        <td>型号</td>
        <td>价格</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" v-bind:key="item._id">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
      </tr>
      </tbody>
    </table>-->
    <div class="banner">
      <el-carousel trigger="click" height="400px" :interval="5000">
        <el-carousel-item v-for="item in list" :key="item">
          <img :src="item" alt="" class="banner">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="tabbox">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="display: flex;
    justify-content: center;">
        <el-menu-item v-bind:key="index" :index="index.toString()" v-for="(item, index) in menu">{{item.name}}</el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script>
  import {getUserLIst} from '../api/userApi'
  import banner01 from '../assets/banner01.jpg'
  // import banner02 from '../assets/banner02.jpg'
  import banner03 from '../assets/banner03.jpg'

  export default {
    name: 'index',
    data() {
      return {
        list: [banner01, banner03],
        menu: [{name: 'react'}, {name: 'angular'}, {name: 'vue'}],
        activeIndex: '0'
      }
    },
    created() {
      // this.getList()
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push('/')
      },
      getList() {
        let params = {}
        getUserLIst(params).then((res) => {
          this.list = res.datas
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .indexPage {
    img.banner {
      width: 100%;
      height: 400px;
    }
  }
</style>
