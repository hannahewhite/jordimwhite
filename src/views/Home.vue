<template>
  <div class="home dark-background">
    <ModeSwitcher></ModeSwitcher>
    <div class="social"><p>@jordimwhite</p></div>
    <div class="landing">
      <h1>Jordi White,</h1>
      <h3>songwriter producer.<br> mix-engineer.</h3>
      <p class="emoji">🙋‍♂️</p>
    </div>
    <div class="work">
      <p>laura hyde</p>
      <p>old cities</p>
      <p>all credits</p>
    </div>
    <div class="about">
      <p>hello, i’m jordi — i make music tings.</p>
      <p>let’s create.</p>
      <p>hit me up — jordi.white1@gmail.com </p>
    </div>
  </div>
</template>

<script>
import ModeSwitcher from "@/components/ModeSwitcher.vue";
export default {
  name: "Home",
  components: {
    ModeSwitcher,
  }
}
</script>
<style lang="scss" scoped>

@import "@/assets/global-styles/colors.scss";
@import "@/assets/global-styles/padding.scss";
@import "@/assets/global-styles/typography.scss";

.home {
  position: relative;
}

.landing, .work, .about {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 16px);
  margin-left: 10%;
}

h1,h3,p {
  @include font-acumin($highlight-text);
  margin: 0;
}

h1 {
  font-size: $font-xl;
  margin: $padding-lg 0;
}

h3 {
  font-size: $font-md;
  word-spacing: $padding-md;
}

.dark-background {
  background: $background-dark;
}

.social {
  color: $highlight-text;
  position: fixed;
  top: $padding-lg;
  right: $padding-lg;
  font-size: $font-sm;
}

.emoji {
  font-size: 72px;
  margin-top: 48px;
}
</style>
