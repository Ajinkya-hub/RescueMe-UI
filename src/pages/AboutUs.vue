<template>
  <card title="About Us" sub-title="Itroduction Video">
    <div>
      <div class="row">
        <div class="col-md-6">
          <iframe width="560" height="315" src="http://www.youtube.com/embed/mO88Vcr8lYg" frameborder="0" ></iframe>
          <!-- <h5>Notifications Style</h5>
          <div class="alert alert-info">
            <span>Rescue on the floor </span>
          </div>
          <div class="alert alert-info">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>Rescue in hazardous situation</span>
          </div>
          <div class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-bell"></span>
            <span data-notify="message">Raise help flag</span>
          </div>
          <div class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-pie-chart"></span>
            <span data-notify="message">Find exact location of employee on the floor in any hazardous situation.
              Make sure employee safety status just by single SMS. 
              No need of client application,Just single SMS can do.</span>
          </div> -->
        </div>
        <!-- <div class="col-md-6">
          <h5>Easy Intergration</h5>
          <div class="alert alert-info">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              Configure SOS message on personal mobile.</span>
          </div>
          <div class="alert alert-success">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              Mark your safety by just single word response(YES).</span>
          </div>
          <div class="alert alert-warning">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              Send an SOS message for location in case of threat.</span>
          </div>
          <div class="alert alert-danger">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
          </div>
        </div> -->
      </div>

      <br>
      <br>

      <!-- <div class="places-buttons">
        <div class="row d-flex justify-content-center">
          <div>
            <h5>Notifications Places
              <p class="category">Click to view notifications</p>
            </h5>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-3">
            <p-button round outline block @click.native="notifyVue('top', 'left')">Top Left</p-button>
          </div>
          <div class="col-md-3">
            <p-button round outline block @click.native="notifyVue('top', 'center')">Top Center</p-button>
          </div>
          <div class="col-md-3">
            <p-button round outline block @click.native="notifyVue('top', 'right')">Top Right</p-button>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-3">
            <p-button round outline block @click.native="notifyVue('bottom', 'left')">Bottom Left</p-button>
          </div>
          <div class="col-md-3">
            <p-button round outline block @click.native="notifyVue('bottom', 'center')">Bottom Center</p-button>
          </div>
          <div class="col-md-3">
            <p-button round outline block @click.native="notifyVue('bottom', 'right')">Bottom Right</p-button>
          </div>

        </div>
      </div> -->
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
