<template>
  <!-- <card class="card-user"> -->
    <div class="main">
    <div class="container">
      <div class="box">
        <img ref="drawTable" class="center-fit" src="@/assets/img/FloorPlan.jpg" />
      </div>
      <div class="box stack-top">
        <div
          class="tile"
          v-for="item in division"
          :id="item.id"
          :class="item.blinkClass"
          :ref="item.id"
          :style="{
            'background-position-x': item.background_position_x,
            'background-position-y': item.background_position_y,
            'background-image': item.backgroundImage,
            background: item.background,
            'margin-bottom': item.marginBottom,
            'margin-right': item.marginRight,
            'background-color': item.backgroundcolor,
            width: item.width,
            height: item.height,
          }"
          :key="item.id"
        ></div>
      </div>
    </div>
    <div class="map-div">
      <img src="@/assets/img/world-map.png" alt class="map-img" />
    </div>
  </div>
    <!-- <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">Chet Faker
          <br>
          <a href="#">
            <small>@chetfaker</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        "I like the way you work it
        <br> No diggity
        <br> I wanna bag it up"
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info, index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div> -->
  <!-- </card> -->
</template>
<script>
import what3words from "../../middleware/what3words.js";
export default {
   mounted() {
    this.get3WordsData();
    var bwidth = 972;
    var bheight = 600;
    this.n_Tiles = this.defaults.x * this.defaults.y;
    for (var i = 0; i < this.n_Tiles; i++) {
      var cssPorps = {
        id: i,
        width: bwidth / this.defaults.x - this.defaults.gap + "px",
        height: bheight / this.defaults.y - this.defaults.gap + "px",
        marginBottom: "1px",
        marginRight: "1px",
        //backgroundcolor: "#d3f6db",
        //backgroundImage: "url(http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png)"
      };

      if (i == 412 || i == 413 || i == 452 || i == 453) {
        cssPorps.blinkClass = "blink_me_red";
      }

      if (i == 551) {
        cssPorps.blinkClass = "blink_me_orange";
      }
      //else {
      //    cssPorps.blinkClass = "blink_me_green";
      //}

      this.division.push(cssPorps);
    }
  },
  
  data() {
    return {
      details: [
        {
          title: "12",
          subTitle: "Files"
        },
        {
          title: "2GB",
          subTitle: "Used"
        },
        {
          title: "24,6$",
          subTitle: "Spent"
        }
      ],
      defaults: {
        x: 40, // tiles in x axis
        y: 30, // tiles in y axis
        gap: 1,
      },
      n_Tiles: 0,
      division: [],
      words: "",
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    },
    ShowGrid: function() {},

    positionImage: function() {},

    async get3WordsData() {
      let request = {
        coordinates: "19.576436,74.209311",
        key: "E9E98Q1L",
      };
      const response = await what3words.get3Words(request);
      if (response != null) {
        this.words = response.data.words;
        console.log(
          "Response Words --------------------------> ",
          response.data.words
        );
      }
    },
  }
};
</script>
<style scoped>
.tile {
  float: left;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -ms-transition: all 0.1s linear;
  -o-transition: all 0.1s linear;
  /*background-image:url("../assets/FloorPlan.jpg");*/
}

.tile:hover {
  /*opacity: .65;*/
  background-color: grey;
}
.blink_me_red {
  animation: blinker 1s linear infinite;
  background-color: red;
  border-radius: 60%;
  display: inline-block;
}

.blink_me_orange {
  animation: blinker 1s linear infinite;
  background-color: lightsalmon;
  border-radius: 60%;
  display: inline-block;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.imgbox {
  display: grid;
  height: 100%;
}

.center-fit {
  max-width: 100%;
  max-height: 100%;
}

.container {
  height: 600px;
  max-width: 972px;
  position: relative;
  margin: auto;
  display: inline-block;
  text-align: center;
}

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8; /* for demo purpose  */
}

.stack-top {
  z-index: 9;
  width: 100%;
  height: 100%;
  /*margin: 40px;*/ /* for demo purpose  */
}

.main {
  /* text-align: center; */
  /* padding-top: 10px; */
}

.map-div {
  display: inline-flex;
  position: absolute;
}

.map-img {
  height: 135px;
  margin-top: 0;
}
</style>

