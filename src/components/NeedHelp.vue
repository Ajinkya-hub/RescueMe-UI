<template>
  <div class="main">
    <div class="container">
        <div class="box">
            <div id="app" style="height: 100%">
                <v-map :zoom="zoom" :center="center">
                    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
                    <v-marker :lat-lng="marker"></v-marker>
                </v-map>
            </div>
        </div>      
        <div class="map-div">
            <img src="@/assets/map_logo.jpg" alt class="map-img" />
        </div>
    </div>
   </div>
</template>


<script>
import Vue2Leaflet from 'vue2-leaflet';
import L from "leaflet/dist/leaflet";

export default {
    name: "NeedHelp",
    data: function() {
      return {
        zoom: 16,
        center: [30.2792953, 120.1198430],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(30.2792953, 120.1198430)
      }
    },
    components: {
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-marker': Vue2Leaflet.Marker
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
