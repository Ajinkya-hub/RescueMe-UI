<template>
  <v-footer class="footer" style="display:flex">
    <div class="footerOne">
       <ul class="myList">
          <li>&nbsp;</li>
          <li>
          <span style="vertical-align: super">Rescue on the floor</span> &nbsp;
          <span>
            <img src="@/assets/tick.png" alt="tick" height="25px" />
          </span>
        </li>
        <li>
          <span style="vertical-align: super"
            >Rescue in hazardous situation</span
          >&nbsp;
          <span>
            <img src="@/assets/tick.png" alt="tick" height="25px" />
          </span>
        </li>
        <li>
          <span style="vertical-align: super">Raise help flag</span>&nbsp;
          <span>
            <img src="@/assets/tick.png" alt="tick" height="25px" />
          </span>
        </li>
       </ul>
    </div>
  <v-divider vertical></v-divider>
  <div class="footerTwo">
      <ul class="myList">
        <li>&nbsp;</li>
        <li>
          <span>
            <img
              src="@/assets/Cog.png"
              alt="tick"
              height="32px"
              style="padding-right:5px"
            />
          </span>
          <span style="vertical-align: super">Easy Intergration</span>
        </li>
        <li style="font-size: small;">
          <p>Configure SOS message on personal mobile.</p>
          <p>
            Mark your safety by just single word response(YES).
          </p>
          <p>
            Send an SOS message for location in case of threat.
          </p>
        </li>
      </ul>
    </div>
    <v-divider vertical></v-divider>
    <div class="footerThree">
      <ul class="myList">
        <li>&nbsp;</li>
        <li>
          <span style="vertical-align: super">Some Other Features</span>
        </li>
        <li style="font-size: small;">
          <p>
            Find exact location of employee on the floor in any hazardous
            situation
          </p>
          <p>
            Make sure employee safety status just by single SMS.
          </p>
          <p>
            No need of client application,Just single SMS can do.
          </p>
        </li>
      </ul>
    </div>
  </v-footer>
</template>
<script>
export default {
  name: "FooterMenu",
};
</script>
<style scoped>
.footer {
  width: 100%;
  background-color: #17a2b8 !important;
  color: white !important;
}

.footerOne {
  width: 23%;
  text-align: end;
  font-size: smaller;
  padding-bottom: 22px;
}

.footerTwo {
  width: 27%;
  text-align: start;
  padding: 11px;
}
.footerThree {
  width: 21%;
  text-align: start;
  padding: 11px;
}
ul.myList {
  list-style-type: none;
}
.theme--light.v-divider {
  border: 2px solid white;
  height: 180px;
  margin-top: 15px;
  margin-left: 15px;
}

.bd-footer {
  padding: 4rem 0;
  text-align: center;
  background-color: #eee;
}

.fluid-container.footer{
  background: #17a2b8;
}
.fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: #fff;
}
</style>
