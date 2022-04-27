import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import http from 'axios';
import * as echarts from 'echarts/lib/echarts';

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

Vue.use(echarts)
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
