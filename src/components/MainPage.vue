<template>
  <v-app>
    <v-content>
      <Navigation />
      <FloorMap />
      <FooterMenu />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/header/Navigation";
import FloorMap from "@/components/FloorMap";
import FooterMenu from "@/components/footer/FooterMenu";
export default {
  name: "MainPage",
  components: {
    Navigation,
    FloorMap,
    FooterMenu
  },
};
</script>
