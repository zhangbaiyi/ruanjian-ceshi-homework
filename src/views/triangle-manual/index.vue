<template>
  <div class="triangle">
    <h2>判断三角形类型</h2>
    <h1>手动输入三角形的三边</h1>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <el-input
            placeholder="请输入第一条边"
            v-model="form.edge1"
            type="number"
          >
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input>
        </div>
      </el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <el-input
            placeholder="请输入第二条边"
            v-model="form.edge2"
            type="number"
          >
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <el-input
            placeholder="请输入第三条边"
            v-model="form.edge3"
            type="number"
          >
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <el-button
            @click="submitTri()"
            type="primary"
            class="tri_manual_submit"
            >测试</el-button
          >
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content-res">Hmmm..Your 'Triangle' turns out to be... =>{{ output }}&lt;=</div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TriangleManualView",
  data() {
    return {
      form: {
        edge1: "3",
        edge2: "4",
        edge3: "5",
      },
      output: "[Press button to test]",
    };
  },
  methods: {
    submitTri() {
      this.$http.post("api/triangle/basic", this.form).then((res) => {
        console.log(res);
        this.output = res.data;
      });
    },
  },
};
</script>

<style>

.grid-content-res{
  margin-top: 20px;
  padding:10px;
  color:#409EFF;
  font: bold;
  font-size:larger;
  font-family: "San Francisco UI", fantasy, sans-serif;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  border: dashed #409EFF;
}
</style>

