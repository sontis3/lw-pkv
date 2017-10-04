<template>
  <div class="side-bar">
    <div class="brand">Brand Logo</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
    <div class="menu-list">
      <ul id="menu-content" class="menu-content collapse out">
        <li>
          <a href="#">
            <i class="fa fa-dashboard fa-lg"></i> Dashboard
          </a>
        </li>
        <li data-toggle="collapse" data-target="#products" class="collapsed active">
          <a href="#">
            <i class="fa fa-gift fa-lg"></i> UI Elements
            <span class="arrow"></span>
          </a>
        </li>
        <ul class="sub-menu collapse" id="products">
          <li class="active">
            <a href="#">CSS3 Animation</a>
          </li>
          <li>
            <a href="#">General</a>
          </li>
          <li>
            <a href="#">Buttons</a>
          </li>
          <li>
            <a href="#">Tabs &amp; Accordions</a>
          </li>
          <li>
            <a href="#">Typography</a>
          </li>
          <li>
            <a href="#">FontAwesome</a>
          </li>
          <li>
            <a href="#">Slider</a>
          </li>
          <li>
            <a href="#">Panels</a>
          </li>
          <li>
            <a href="#">Widgets</a>
          </li>
          <li>
            <a href="#">Bootstrap Model</a>
          </li>
        </ul>
        <li data-toggle="collapse" data-target="#service" class="collapsed">
          <a href="#">
            <i class="fa fa-globe fa-lg"></i> Services
            <span class="arrow"></span>
          </a>
        </li>
        <ul class="sub-menu collapse" id="service">
          <li>New Service 1</li>
          <li>New Service 2</li>
          <li>New Service 3</li>
        </ul>

        <li data-toggle="collapse" data-target="#new" class="collapsed">
          <a href="#">
            <i class="fa fa-car fa-lg"></i> New
            <span class="arrow"></span>
          </a>
        </li>
        <ul class="sub-menu collapse" id="new">
          <li>New New 1</li>
          <li>New New 2</li>
          <li>New New 3</li>
        </ul>
        <li>
          <a href="#">
            <i class="fa fa-user fa-lg"></i> Profile
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-users fa-lg"></i> Users
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.side-bar {
  overflow: auto;
  font-family: verdana;
  font-size: 12px;
  font-weight: 200;
  background-color: #2e353d;
  position: fixed;
  top: 0px;
  left: 50px;
  width: 300px;
  height: 100%;
  color: #e1ffff;
}

.side-bar .brand {
  background-color: #23282e;
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
}

.side-bar .toggle-btn {
  display: none;
}

.side-bar ul,
.side-bar li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;
  /*    
    .collapsed{
       .arrow:before{
                 font-family: FontAwesome;
                 content: "\f053";
                 display: inline-block;
                 padding-left:10px;
                 padding-right: 10px;
                 vertical-align: middle;
                 float:right;
            }
     }
*/
}

.side-bar ul :not(collapsed) .arrow:before,
.side-bar li :not(collapsed) .arrow:before {
  font-family: FontAwesome;
  content: "\f078";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  float: right;
}

.side-bar ul .active,
.side-bar li .active {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
}

.side-bar ul .sub-menu li.active,
.side-bar li .sub-menu li.active {
  color: #d19b3d;
}

.side-bar ul .sub-menu li.active a,
.side-bar li .sub-menu li.active a {
  color: #d19b3d;
}

.side-bar ul .sub-menu li,
.side-bar li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}

.side-bar ul .sub-menu li:hover,
.side-bar li .sub-menu li:hover {
  background-color: #020203;
}

.side-bar ul .sub-menu li:before,
.side-bar li .sub-menu li:before {
  font-family: FontAwesome;
  content: "\f105";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}

.side-bar li {
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}

.side-bar li a {
  text-decoration: none;
  color: #e1ffff;
}

.side-bar li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}

.side-bar li:hover {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

@media (max-width: 767px) {
  .side-bar {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .side-bar .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #ffffff;
    color: #000;
    width: 40px;
    text-align: center;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}

@media (min-width: 767px) {
  .side-bar .menu-list .menu-content {
    display: block;
  }
  #main {
    width: calc(100% - 300px);
    float: right;
  }
}
</style>
