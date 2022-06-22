<template>
  <div id="nav">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
   <el-menu-item v-for="item in this.menu" :index="item.path" :key="item.path">
    <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
    </template>
   </el-menu-item>
 </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 700px
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/home",
          name: "HomeView",
          label: "首页",
          icon: "s-home",
          url: "home",
        },
        {
          path: "/triangle",
          name: "TriangleView",
          label: "判断三角形类型",
          icon: "s-promotion",
          url: "triangle",
        },
        {
          path: "/calendar",
          name: "CalendarView",
          label: "万年历问题",
          icon: "date",
          url: "calendar",
        },
        {
          path: "/computer",
          name: "ComputerView",
          label: "电脑销售问题",
          icon: "cpu",
          url: "computer",
        },
                {
          path: "/charge",
          name: "ChargeView",
          label: "电信收费问题",
          icon: "mobile-phone",
          url: "charge",
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