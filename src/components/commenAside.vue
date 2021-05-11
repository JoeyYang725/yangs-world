<template>
  <div class="commenAside">
    <div class="block">
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-key"></i>
          <span>前端相关</span>
        </template>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-alarm-clock"></i>
        <span slot="title">英语相关</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">逼叨叨</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-warning-outline"></i>
        <span slot="title">试验田</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style>
.commenAside{
  height: 100%;

}
.el-menu{
  height: 90%;
}
.block{
  height: 10%;
}
</style>
