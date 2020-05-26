<template>
  <v-app>
    <v-content>
      <Navigation />
      <router-view/>
      <FooterMenu />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/header/Navigation";
import FooterMenu from "@/components/footer/FooterMenu";

export default {
  name: "App",
  components: {
   Navigation,
   FooterMenu
  },
};
</script>
