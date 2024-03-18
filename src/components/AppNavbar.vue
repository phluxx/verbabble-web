<template>
  <nav class="navbar" :class="{ 'navbar-transparent': isTransparent }">
    <div class="navbar-container">
      <div class="navbar-items" :class="{ 'navbar-items-mobile': isMobileMenuOpen }">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/staff">Staff</router-link></li>
          <li><router-link to="/join">Join</router-link></li>
          <li><a href="https://webchat.verbabble.com/" target="_blank">Chat</a></li>
        </ul>
      </div>
      <div class="navbar-mobile-toggle" @click="toggleMobileMenu">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  computed: {
    isTransparent() {
      // Check if the viewport width is less than the mobile breakpoint
      return window.innerWidth < 768;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
}

.navbar-transparent {
  background-color: transparent;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

.navbar-items {
  display: flex;
  align-items: center;
  justify-content: center; /* Updated: Center the menu items */
}

.navbar-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar-items li {
  margin-right: 20px;
}

.navbar-items a {
  color: rgba(59, 0, 64, 255);
  font-weight: bold;
  text-decoration: none;
}

.navbar-items a:hover {
  text-decoration: underline;
}

.navbar-mobile-toggle {
  display: none;
  cursor: pointer;
  margin-left: auto; /* Updated: Move the hamburger menu icon to the right */
}

@media (max-width: 768px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    z-index: 999;
  }
  .navbar-items {
    display: none;
  }

  .navbar-items-mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    z-index: 998;
  }

  .navbar-items-mobile ul {
    display: flex;
    flex-direction: column;
  }

  .navbar-items-mobile li {
    margin-bottom: 10px;
  }

  .navbar-mobile-toggle {
    display: block;
  }
}
</style>
