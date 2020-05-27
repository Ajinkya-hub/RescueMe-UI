<template>
  <div class="main">
    <div class="container">
        <div class="box">
            <div>
                <l-map :zoom="zoom" :center="center" style="height:500px;">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng="marker"></l-marker>
                </l-map>
            </div>
        </div>
    </div>          
    <div class="map-div">
        <img src="@/assets/map_logo.jpg" alt class="map-img" />
    </div>
   </div>
</template>


<script>

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"

export default {
  name: 'example',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom:17,
      center: L.latLng(18.564740, 73.881300),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(18.564740, 73.881300),
    }
  },
  methods: {
    mounted() {
       // setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
    }
  }
}

</script>

<style scoped>

.container {
  height: 600px;
  max-width: 972px;
  position: relative;
  margin: auto;
  display: inline-block;
}

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8; /* for demo purpose  */
}

.main {
  text-align: center;
  padding-top: 20px;
}

.map-div {
  display: inline-flex;
  position: absolute;
}
</style>
