<template>
  <div id="nav">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="item in hasChildren"
        :index="item.path"
        :key="item.path"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="(subItem, subIndex) in item.children"
          :key="subItem.path"
        >
          <el-menu-item @click="clickMenu(subItem)" :index="subIndex">{{
            subItem.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: "/",
          name: "HomeView",
          label: "首页",
          icon: "s-home",
          url: "home",
        },
        {
          label: "三角形问题",
          icon: "s-promotion",
          children: [
            {
              path: "/triangle-manual",
              name: "TriangleManualView",
              label: "三角形手动输入测试",
              icon: "edit-outline",
              url: "triangle-manual",
            },
            {
              path: "/triangle-file",
              name: "TriangleFileView",
              label: "三角形文件输入测试",
              icon: "edit-document-checked",
              url: "triangle-file",
            },
          ],
        },
        {
          label: "万年历问题",
          icon: "date",
          children: [
            {
              path: "/calendar-manual",
              name: "CalendarManualView",
              label: "万年历手动输入测试",
              icon: "edit-outline",
              url: "calendar-manual",
            },
            {
              path: "/calendar-file",
              name: "CalendarFileView",
              label: "万年历文件输入测试",
              icon: "edit-document-checked",
              url: "calendar-file",
            },
          ],
        },
      ],
    };
  },
  methods: {
    
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      console.log(item.name);
      this.$router.push({
        name: item.name,
      });
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>