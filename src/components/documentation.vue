<template>
  <div class="container">
      <img class="center-fit" src="@/assets/doc.jpg" style="height: 400px; width: 300px" />
  </div>
</template>

<script>
export default {
  name: "documentation",
};
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
</style>
