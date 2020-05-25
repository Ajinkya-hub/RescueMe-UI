<template>
<div><center><b>Error in connection</b></center>
<p><center><v-btn @click="refresh">Refresh</v-btn></center></p></div>
</template> 
<script>
export default {
    methods:{
        refresh(){
             this.$router.push({ path: `/` })
        }
    }
}
</script>