

<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header> </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside";

export default {
  name: "HomeView",
  components: {
    CommonAside,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
.el-header {
  background-color: rgb(34, 114, 205);
}
.el-main {
  padding-top: 0;
}
</style>