<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar style="background:black">
      <img src="@/assets/RescueMe - logo.jpg" alt style="height: inherit" />
      <v-spacer class="v_spacer_modified"></v-spacer>
      <v-toolbar-title class="nav_name">
       Home
      </v-toolbar-title>
      <v-spacer class="v_spacer_modified"></v-spacer>
      <v-toolbar-title class="nav_name">Documentation</v-toolbar-title>
<!--       <v-spacer class="v_spacer_modified"></v-spacer>
      <v-toolbar-title class="nav_name">Example</v-toolbar-title>
      <v-spacer class="v_spacer_modified"></v-spacer>
      <v-toolbar-title class="nav_name">Pricing</v-toolbar-title> -->
    </v-toolbar>
  </v-card>
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
