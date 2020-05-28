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
  // mounted() {
  //   var myLatlng = new window.google.maps.LatLng(40.748817, -73.985428);
  //   var mapOptions = {
  //     zoom: 13,
  //     center: myLatlng,
  //     scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
  //     styles: [
  //       {
  //         featureType: "water",
  //         stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }]
  //       },
  //       {
  //         featureType: "road",
  //         elementType: "geometry.fill",
  //         stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }]
  //       },
  //       {
  //         featureType: "road",
  //         elementType: "geometry.stroke",
  //         stylers: [{ color: "#808080" }, { lightness: 54 }]
  //       },
  //       {
  //         featureType: "landscape.man_made",
  //         elementType: "geometry.fill",
  //         stylers: [{ color: "#ece2d9" }]
  //       },
  //       {
  //         featureType: "poi.park",
  //         elementType: "geometry.fill",
  //         stylers: [{ color: "#ccdca1" }]
  //       },
  //       {
  //         featureType: "road",
  //         elementType: "labels.text.fill",
  //         stylers: [{ color: "#767676" }]
  //       },
  //       {
  //         featureType: "road",
  //         elementType: "labels.text.stroke",
  //         stylers: [{ color: "#ffffff" }]
  //       },
  //       { featureType: "poi", stylers: [{ visibility: "off" }] },
  //       {
  //         featureType: "landscape.natural",
  //         elementType: "geometry.fill",
  //         stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
  //       },
  //       { featureType: "poi.park", stylers: [{ visibility: "on" }] },
  //       {
  //         featureType: "poi.sports_complex",
  //         stylers: [{ visibility: "on" }]
  //       },
  //       { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
  //       {
  //         featureType: "poi.business",
  //         stylers: [{ visibility: "simplified" }]
  //       }
  //     ]
  //   };
  //   var map = new window.google.maps.Map(
  //     document.getElementById("map"),
  //     mapOptions
  //   );

  //   var marker = new window.google.maps.Marker({
  //     position: myLatlng,
  //     title: "Hello World!"
  //   });

  //   // To add the marker to the map, call setMap();
  //   marker.setMap(map);
  // }
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

