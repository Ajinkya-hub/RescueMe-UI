<template>
<b-navbar toggleable="lg" type="dark" variant="info">
  <b-navbar-brand href="#">RescueMe</b-navbar-brand>
  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item router-link :to="`/home`">Home</b-nav-item>
        <b-nav-item router-link :to="`/NeedHelp`">NeedHelp</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
</b-navbar>
  <!-- <v-card color="grey lighten-4" flat tile>
    <v-toolbar style="background:black">
      <img src="@/assets/RescueMe - logo.jpg" alt style="height: inherit" />
      <v-spacer class="v_spacer_modified"></v-spacer>
      <v-toolbar-title class="nav_name">
       Home
      </v-toolbar-title>
      <v-spacer class="v_spacer_modified"></v-spacer>
      <v-toolbar-title class="nav_name">Documentation</v-toolbar-title>
    </v-toolbar>
  </v-card> -->
</template>
<script>
export default {
  name: "Navigation"
};
</script>
<style scoped>
.v_spacer_modified {
  flex-grow: 0.04 !important;
}
.nav_name {
  color: white;
  font-weight: normal;
}
</style>
