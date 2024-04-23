<template>
  <div>
  <Page>
      <div class="btn-group">
        <a class='btn bg-primary' href="/test1/index.html">test1</a>
        <a class="btn bg-danger" href="/test2/index.html">test2</a>
        <a class="btn bg-warning" href="/test3/index.html">test3</a>
      </div>
      <div style="color:red;height:100px;width:100px">
        <i class="bi-alarm test1 test2" style="font-size: 2rem;"></i>
        <i class="bi-gitlab" style="font-size: 2rem;"></i>
      </div>

      <div ref="mychart" class="h-75 container border border-success">
        <span>test111</span>
      </div>
      <div class="container-fluid border border-success">
        <span>test111</span>
      </div>
      <el-row>
        <el-col :span="1">
          <el-row class="h-100 bg-primary" align="middle">
            <el-col>
              <span class="mx-2 text-nowrap bg-danger">中国</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span=1 :offset=22>
          <div class="d-inline-block mycolor-1">
            ok
          </div>
        </el-col>
      </el-row>
      <el-input v-model="mytext" placeholder="test" class="mytest"></el-input>
  </Page>
  </div>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue';
import {onMounted, ref} from 'vue'
import * as echarts from 'echarts'

const mytext= ref('')
const mychart = ref<HTMLDivElement>()

onMounted(() =>
{
  let chartDom = mychart.value
  var myChart = echarts.init(chartDom);
var option;

option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
  ]
};

option && myChart.setOption(option);
})


</script>

<style lang="scss" scoped >

.mycolor-1 {
  color: red;
}

.test1.test2{
    background-color: blue;
}

.mytest {
    $myheight: 200px !global;
    :deep .el-input__wrapper {
      input {
        color: white;
        background-color: black;

      } 
    /* background-color:aqua; */
      height: $myheight;
    }
    @if $myheight > 100px { width: $myheight * 2; } @else { width: 100px;}
}

</style>
