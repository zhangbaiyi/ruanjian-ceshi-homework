<template>
  <div class="triangle">
    <h2>日期计算器</h2>
    <h1>手动输入年、月、日，查看下一天</h1>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <el-input placeholder="YEAR" v-model="form.year" type="number">
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input>
        </div>
      </el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <el-input placeholder="MONTH" v-model="form.month" type="number">
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <el-input placeholder="DAY" v-model="form.day" type="number">
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <el-button
            @click="submitCal()"
            type="primary"
            class="tri_manual_submit"
            >测试</el-button
          >
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content-res">
          Hmmm..Tomorrow seems to be... =>{{ output }}&lt;=
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CalendarManualView",
  data() {
    return {
      form: {
        year: 2022,
        month: 5,
        day: 1,
      },
      output: "[Press button to test]",
    };
  },
  methods: {
    submitCal() {
      this.$http.post("api/calendar/basic", this.form).then((res) => {
        console.log(res);
        this.output = res.data;
      });
    },
  },
};
</script>

<style>
.grid-content-res {
  margin-top: 20px;
  padding: 10px;
  color: #409eff;
  font: bold;
  font-size: larger;
  font-family: "San Francisco UI", fantasy, sans-serif;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border: dashed #409eff;
}
</style>

