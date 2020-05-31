<template>
  <card title="Notifications">
    <div>
      <div class="row">
        <div class="col-md-6">
          <div class="alert alert-danger">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Danger - </b> Our CAPITA employee raise a flag that they need a help.</span>
          </div>
        </div>
      </div>
      <br>
      <br>
    </div>
  </card>
</template>
<script>
import NotificationTemplate from './Notifications/NotificationTemplate';

export default {
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: NotificationTemplate,
        icon: "ti-gift",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
};
</script>
<style>
</style>
