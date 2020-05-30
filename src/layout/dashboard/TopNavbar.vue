<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{routeName}}</a>
      <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <drop-down class="nav-item"
                     :title="notificationList.length + ' Notification'"
                     title-classes="nav-link"
                     icon="ti-bell">
                     <a v-for="item in notificationList" :key="item.message" class="dropdown-item">{{item.message}}</a>
            <!-- <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a> -->
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div></nav>
</template>
<script>
import service from '@/middleware/service'
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  mounted(){
    this.getNotifications();
  },
  data() {
    return {
      activeNotifications: false,
      notificationList : [],
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
        async getNotifications(){
      const response = await service.getEndpoint(
        `api/Message/GetNotification`
        );
        const responseData = response.data;

        console.log(responseData);

        let counter = 0;
      var setint = setInterval(() => {
        this.notificationList.push(responseData[counter++]);

        if(counter == responseData.length || counter == 10){
          clearInterval(setint);
        }
        console.log(JSON.stringify(this.notificationList));
}, 2000);

    }
  }
};
</script>
<style>
</style>
