<template>
  <div class="home">
    <div class="support-content" style="background: linear-gradient(to bottom, #00FFFF, #008080);">
      <img src="https://f005.backblazeb2.com/file/verbabble/fulllogo_transparent_nobuffer.png" alt="Verbabble Logo" class="logo" />
      <h1>Support</h1>
      <p>Please e-mail <a href="mailto:support@verbabble.com">support@verbabble.com</a> for all support requests until we can get a proper ticketing system implemented.</p>
      <p>Thank you for your patience!</p>
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

.support-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.support-content a {
  color: rgba(59, 0, 64, 255);
  text-decoration: none;
}

.support-content a:hover {
  text-decoration: underline;
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

