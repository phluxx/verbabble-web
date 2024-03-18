<template>
  <div class="home">
    <div class="about-content" style="background: linear-gradient(to bottom, #00FFFF, #008080);">
      <img src="https://f005.backblazeb2.com/file/verbabble/fulllogo_transparent_nobuffer.png" alt="Verbabble Logo" class="logo" />
      <h1>About Us</h1>
      <p>Verbabble was founded by Kevin Thompson (phluxaeternus) in an effort to provide a safe place for communities to come together.</p>
      <p>Over the years, IRC has changed, with many considering it dead due to the advantages that Discord and Slack bring to the table. Verbabble aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.</p>
      <p>In addition to IRCv3 capabilities, we plan to implement voice and video conferencing, live document collaboration, and other exciting features to our users.</p>
      <p>You can check the status of the Verbabble Project by visiting our <a href="https://www.github.com/verbabble">github page</a>.</p>
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

.about-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.about-content a {
  color: rgba(59, 0, 64, 255);
  text-decoration: none;
}

.about-content a:hover {
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

