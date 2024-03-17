<template>
<div>
<div class="nav-menu"> 
<i 
class="fas fa-bars" 
@click="showMenu()"> 
</i> 
<div
class="nav-content"
:class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
> 
<!-- <div class="nav-logo"><img src="https://f005.backblazeb2.com/file/verbabble/icononly_transparent.png" alt="Logo"></div> -->
<ul class="nav-items">
<li><router-link to="/">Home</router-link></li>
<li><router-link to="/about">About</router-link></li>
<li><router-link to="/staff">Staff</router-link></li>
<li><router-link to="/join">Join</router-link></li>
<li><a href="https://webchat.verbabble.com">Chat</a></li>
</ul>
</div>
</div>
</div>
</template>

<script>
export default {
data() {
return {
showMobileMenu: false,
};
},
methods: {
showMenu() {
this.showMobileMenu = !this.showMobileMenu;
},
},
};
</script>

<style lang="scss" scoped>
.nav-menu {
background-color: rgba(200, 200, 200, 0.7);
}
.nav-content {
display: flex;
justify-content: center;
padding: 10px 30px;
align-items: center;
position: absolute;
width: 100%;
z-index: 1;
}
.nav-content .nav-logo {
  display: flex;  /* Enables margin: 0 auto */
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 10px;  /* Optional margin for spacing */
  flex-grow: 0;
}
.nav-items {
display: flex;
justify-content: center;
align-items: center;
list-style: none;
margin: 0;
padding: 0;
li {
padding: 0 10px;
}
router-link {
color: rgba(59, 0, 64, 255);
font-weight: bold;
text-decoration: none;
}
a {
color: rgba(59, 0, 64, 255);
font-weight: bold;
text-decoration: none;
}
router-link:hover {
text-decoration: underline;
}
a:hover {
text-decoration: underline;
}
}
i {
display: none;
}
@media screen and (max-width: 768px) {
.nav-menu {
padding-top: 10px;
position: absolute;
width: 100%;
}
.open-menu {
opacity: 1;
height: 150px;
}
.closed-menu {
opacity: 0;
height: 0;
padding: 0;
}
.nav-content {
flex-direction: column;
z-index: 100;
position: relative;
transition: all 0.2s ease-out;
}
.nav-items {
flex-direction: column;
}
i {
display: block;
text-align: right;
padding: 0 10px 10px 0;
}
}
@media screen and (min-width: 769px) {
.nav-content {
background-color: rgba(200, 200, 200, 0.7);
}
}
</style>

