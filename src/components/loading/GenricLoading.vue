<template>
  <div class="vld-parent">
    <loading 
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
      color="darkbule"
      loader="Bars"
    ></loading>
  </div>
</template>
 
<script>
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
export default {
  data() {
    return {
      fullPage: true,
      isLoading:true
    };
  },
  components: {
    Loading
  },
  props:{
      loading:String
  }
};
</script> 