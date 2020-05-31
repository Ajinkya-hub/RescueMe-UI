<template>

 <div class="row">

<div class="col-xl-4 col-lg-5 col-md-6">
      <card class="card-user">
        <div slot="image">
          <img src="@/assets/img/background.jpg" alt="..." />
        </div>
        <div>
          <div class="author">
            <img
              class="avatar border-white"
              src="@/assets/img/faces/face-1.jpg"
              alt="..."
            />
            <h4 class="title">
               {{userProfile.name}}
              <br />
              <a href="#">
                <small>{{userProfile.pid}}</small>
              </a>
            </h4>
          </div>
          <p class="description text-center">
            {{userProfile.postTown}}
            <br />
           {{userProfile.postcode}}
          </p>
        </div>
        <hr />
      </card>
    </div>

 <div class="col-xl-8 col-lg-7 col-md-6">
      <card class="card-map">
          <div class="main">
            <div class="container">
              <div class="box">
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
              </div>
            </div>
        </div>
      </card>
      </div>
  </div>




  <!-- <card class="card-user"> -->
  <!--   <div class="main">
  
    <div class="map-div">
      <img src="@/assets/img/world-map.png" alt class="map-img" />
    </div>
  </div> -->
  
</template>
<script>
import what3words from "../../middleware/what3words.js";
import service from "@/middleware/service";

export default {
   mounted() {
    var bwidth = 580;
    var bheight = 390;
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


      // if (i == 412 || i == 413 || i == 452 || i == 453) {
      //   cssPorps.blinkClass = "blink_me_orange";
      // }

      // if (i == 551) {
      //   cssPorps.blinkClass = "blink_me_orange";
      // }
      //else {
      //    cssPorps.blinkClass = "blink_me_green";
      //}

//console.log("------------------------>>RR" + cssPorps);
      this.division.push(cssPorps);
    }
   var ranNums = [];
    var i = this.n_Tiles;
    var j = 0;

while (i-- && ranNums.length < 5) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(j);
   

    ranNums.forEach(element => {
      this.division[element].blinkClass = "blink_me_orange";
    });

}

// console.log("------------------------>>RR" + ranNums);


   this.getAllUnsafeEmployee();
  },
  
  data() {
    return {
      userProfile: [],
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
        x: 27, // tiles in x axis
        y: 20, // tiles in y axis
        gap: 1,
      },
      n_Tiles: 0,
      division: [],
      words: "",
      wordsArray : [
        "rationed.weedy.partied",
        "investors.gazette.kidney",
        "rephrase.grandest.fortified",
        "parsnip.lookout.trek",
        "manual.both.besotted",

      ]
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

    async getAllUnsafeEmployee() {
      const response = await service.getEndpoint(
        `api/Message/GetUnsafeEmployee`
      );
      const responseData = response.data[0].addressCoordinates;
       this.userProfile = response.data[0];
       debugger
      console.log("res----------", response.data);


      
      // this.marker = L.latLng(responseData.latitude, responseData.longitude);
      // this.center = L.latLng(responseData.latitude, responseData.longitude);
    }

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
    width: 580px;
    height: 490px;
    margin-left: 100px;
    margin-top: 35px;

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

