<template>
  <div>

    <!--Stats cards-->
    <!-- <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div> -->

    <!--Charts-->
    <div class="row">
      <div class="col-md-6 col-12">
        <chart-card title="Response Statistics"
                    sub-title="Last campaign performance"
                    :chart-data="preferencesChart.data"
                    chart-type="Pie">
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Safe
            <i class="fa fa-circle text-danger"></i> Unsafe
            <i class="fa fa-circle text-warning"></i> Inside
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <h5>Notification states</h5>
          <div v-for="item in notificationList" :class="item.status == 'Unsafe'?'alert alert-danger':'alert alert-success' " :key="item.message">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> {{item.status}} </b> {{item.message}}</span>
          </div>
           <div class="alert alert-success">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Success - </b> This is a regular notification made with ".alert-success"</span>
          </div>
          <!-- <div class="alert alert-success">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Success - </b> This is a regular notification made with ".alert-success"</span>
          </div>
          <div class="alert alert-warning">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
          </div>
          <div class="alert alert-danger">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
          </div> -->
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import service from '@/middleware/service';
import Chartist from 'chartist';
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
      statsCards: [
        {
          type: "warning",
          icon: "ti-server",
          title: "Capacity",
          value: "105GB",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "Revenue",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-pulse",
          title: "Errors",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-twitter-alt",
          title: "Followers",
          value: "+45",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ],
      usersChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM"
          ],
          series: [
            [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]
        },
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6]
        },
        options: {}
      },
      notificationList : []
    };
  },
  mounted(){
    this.getNotifications();
  },
  methods:{
    async getNotifications(){
      const response = await service.getEndpoint(
        `api/Message/GetNotification`
        );
        const responseData = response.data;

        console.log(responseData);

        let counter = 0;
      var setint = setInterval(() => {
        this.notificationList.push(responseData[counter++]);

        if(counter == responseData.length || counter == 10){
          clearInterval(setint);
        }
        // console.log(JSON.stringify(this.notificationList));
}, 2000);

    }
  }
};
</script>
<style>
</style>
