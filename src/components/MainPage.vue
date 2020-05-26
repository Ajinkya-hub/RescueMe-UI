<template>
  <v-app>
    <v-content>
      <FloorMap />
      
    </v-content>
  </v-app>
</template>

<script>
import FloorMap from "@/components/FloorMap";

export default {
  name: "MainPage",
  components: {
    FloorMap
  },
};
</script>
