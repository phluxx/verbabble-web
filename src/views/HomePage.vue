<template>
  <div class="home">
    <div class="hero" style="background: linear-gradient(to bottom, #00FFFF, #008080);">
      <img src="https://f005.backblazeb2.com/file/verbabble/fulllogo_transparent_nobuffer.png" alt="Verbabble Logo" class="logo" />
      <h1>Welcome to Verbabble</h1>
      <h2>Bringing Communities Together</h2>
    </div>
    <div class="content">
      <h1>Getting Started</h1>
      <p>Ready to get started now? Select the appropriate option below!</p>
      <router-link to="/join"><button class="rounded-button sign-up">Sign Up</button></router-link>
      <a href="https://webchat.verbabble.com"><button class="rounded-button chat-now">Chat Now</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.content {
  max-width: 800px;
  padding: 20px;
  align-items: center;
  text-align: center;
}

.rounded-button {
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
}

.sign-up {
  background-color: rgba(245, 69, 255, 1);
  color: white;
}

.chat-now {
  background-color: rgba(59, 0, 64, 1);
  color: white;
}

@media (max-width: 768px) {
  .logo {
    width: 80%;
  }
}
</style>

