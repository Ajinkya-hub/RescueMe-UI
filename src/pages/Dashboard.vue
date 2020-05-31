<template>
  <div class="row">
    <div class="col-md-6 col-12">
      <!-- <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis">
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Column"
            xName="country"
            yName="gold"
            name="Gold"
          >
          </e-series>
        </e-series-collection>
      </ejs-chart> -->
      <ejs-accumulationchart id="container" :tooltip="tooltip" :legendSettings='legendSettings'>
        <e-accumulation-series-collection>
          <e-accumulation-series :dataSource="seriesData" xName="x" yName="y" :dataLabel='datalabel'>
          </e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>

    <div class="col-md-6 col-12">
      <h5>Notification states</h5>
      <div
        v-for="(item, index) in notificationList"
        :class="
          item.status == 'Unsafe' ? 'alert alert-danger' : 'alert alert-success'
        "
        :key="index"
      >
        <button
          type="button"
          v-on:click="removeNotification(index)"
          aria-hidden="true"
          class="close"
        >
          ×
        </button>
        <span>
          <b>{{ item.status }}</b>
          {{ item.message }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import service from "@/middleware/service";
import Chartist from "chartist";
import Vue from "vue";
// import {
//   ChartPlugin,
//   ColumnSeries,
//   Category
// } from "@syncfusion/ej2-vue-charts";

import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationTooltip , AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);
// Vue.use(ChartPlugin);

export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      // seriesData: [
      //   { country: "Safe", gold: 60 },
      //   { country: "Unsafe", gold: 40 }
      // ],
      seriesData: [],
      tooltip: { enable: true },
      datalabel: { visible: true, name:'text' },
      primaryXAxis: {
        valueType: "Category",
        title: "Countries"
      },
      title: "Olympic Medals",
      preferencesChart: {
        data: {
          labels: ["62%", "32%"],
          series: [62, 32]
        },
        options: {}
      },
      notificationList: []
    };
  },
  provide: {
    // chart: [ColumnSeries, Category]
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend]
  },

  mounted() {
    this.getNotifications();
  },
  methods: {
    async getNotifications() {
      const response = await service.getEndpoint(`api/Message/GetNotification`);
      const responseData = response.data;

      let counter = 0;
      let safeCounter = 0;
      let UnsafeCounter = 0;
      var setint = setInterval(() => {
        var incrmtData = responseData[counter++];
        this.notificationList.push(incrmtData);
        // debugger;
        if (incrmtData.status == "Safe") {
          safeCounter++;
        }
        if (incrmtData.status == "Unsafe") {
          UnsafeCounter++;
        }
        this.seriesData[0] = { x: "Safe", y: safeCounter, fill: "#498fff", text: safeCounter + '%' };
        this.seriesData[1] = { x: "Unsafe", y: UnsafeCounter, fill: "#ffa060", text: UnsafeCounter + '%'};

        if (counter == responseData.length) {
          clearInterval(setint);
        } else if (counter > 6 && this.notificationList.length > 6) {
          // counter = 0;
          this.notificationList.splice(0, 1);
        }
      }, 2000);
    },

    removeNotification(index) {
      this.notificationList.splice(index, 1);
    }
  }
};
</script>
<style></style>
