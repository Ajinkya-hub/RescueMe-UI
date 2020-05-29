<template>
<card class="card-map" title="Map">
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
        <img src="@/assets/img/world-map.png" alt class="map-img" />
    </div>
   </div>
</card>
    <!-- <card class="card-map" title="Google Maps">
      <div class="map">
        <div id="map"></div>
      </div>
    </card> -->
</template>
<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import service from '@/middleware/service'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
   data () {
    return {
      zoom:16,
      center: L.latLng(18.564740, 73.881300),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(18.564740, 73.881300),
    }
  },

  mounted(){
    this.getUnsafeEmployee();
  },

  methods: {
    async getUnsafeEmployee(){
      const response = await service.getEndpoint(
        `api/Message/GetUnsafeEmployee?requestFor=1`
        );
        const responseData = response.data[0].addressCoordinates;
        
        this.marker = L.latLng(responseData.latitude, responseData.longitude);
        this.center = L.latLng(responseData.latitude, responseData.longitude);
    }
  }
  
};
</script>
<style scoped>

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

.main {
  /* padding-top: 10px; */
}

.map-div {
  display: inline-flex;
  position: absolute;
  padding-left: 15px;
}

.map-img {
  height: 135px;
  margin-top: 0;
}
</style>

