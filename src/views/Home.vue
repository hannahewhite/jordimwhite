<template>
<transition appear appear-class="fade-enter" appear-to-class="fade-enter-to" appear-to-active="fade-enter-active">
  <div class="home" :class="{'dark-background' : isDarkMode, 'light-background' : !isDarkMode}">
      <ModeSwitcher></ModeSwitcher>
    <div class="social" :class="{'dark-background' : isDarkMode, 'light-background' : !isDarkMode}"><a href="https://www.instagram.com/jordimwhite/">@jordimwhite</a></div>

    <div class="landing" id="landing" v-scroll-reveal.reset>
      <Nav 
        :showNavBottom="true"
        navTwoTxt="Work"
        anchorTwo="#work">
      </Nav>
      <h1>Jordi White,</h1>
      <h3>songwriter producer.<br> mix-engineer.</h3>
      <p class="emoji">🙋‍♂️</p>
    </div>

    <div class="work" id="work" v-scroll-reveal.reset>
      <Nav
        :showNavBottom="true"
        :showNavTop="true"
        navOneTxt="Home"
        anchorOne="#landing"
        navTwoTxt="About"
        anchorTwo="#about">
      </Nav>
      <div class="artists">
      <a href="https://open.spotify.com/artist/6nLgwDHaapTa9mAho85nuu?si=W3RKrqlfQnyKFnKBpbHu1Q" target="_blank">old cities</a><span class="divider" v-if="!isMobile"> — </span>
      <a href="https://open.spotify.com/artist/3r4Jr4h2Fq8LswYbPLxnZ7?si=fjeol1mLQBiWcu2xmYa8Jw" target="_blank">laura hyde</a><span class="divider" v-if="!isSmallScreen && !isMobile"> — </span>
      <br v-if="isSmallScreen">
      <a href="https://open.spotify.com/track/5zWYKxbP2AeyWxjU7cOuVa?si=xUqJGrkEQIKPlor4EHhEdA" target="_blank">lucy mason</a><span class="divider" v-if="isSmallScreen"> — </span>
      <br v-if="!isMobile && !isSmallScreen">
      <a href="https://open.spotify.com/album/5v4hVxSmc5us9F9sLco63e?si=duFyMgSjTM2ruHmtvBKE8g" target="_blank">trent williams</a><span v-if="!isSmallScreen && !isMobile" class="divider"> — </span>
      <br v-if="isSmallScreen">
      <a href="https://open.spotify.com/track/281IVuT5bJsBCevB1u22cY?si=HJukBG_NRc6-88zS2dMfNg" target="_blank">cap carter</a><span v-if="!isMobile" class="divider"> — </span>
      <a v-if="!isMobile" href="https://open.spotify.com/album/1Z4Nd7f6FXwDjhijAQwAgY?si=xaaJZn-KTyehw2QqTR1FuQ" target="_blank">c3 music</a>
      <br v-if="isSmallScreen">
      <br v-if="!isMobile && !isSmallScreen">
      <a v-if="!isMobile" href="https://open.spotify.com/track/2OhmkpVpUhIsrcRHhRFb5F?si=Ag6-kGHmRcyjrPrwil1RBQ" target="_blank">ben potter</a><span class="divider" v-if="!isMobile"> — </span>
      <a href="https://open.spotify.com/album/0IQnDmf1Shg68pvftBggsK?si=GCsviAAUTlSvpCCE-A3RfQ" target="_blank">mitch mcdonough</a><span v-if="!isSmallScreen && !isMobile" class="divider"> — </span>
      <br v-if="isSmallScreen">
      <span>rg & co</span><span class="divider" v-if="isSmallScreen"> — </span>
      <br v-if="!isMobile && !isSmallScreen">
      <span>vendulka</span><span v-if="!isSmallScreen && !isMobile" class="divider"> — </span>
      <br v-if="isSmallScreen">
      <span>sameland</span><span class="divider" v-if="!isMobile"> — </span>
      <span v-if="!isMobile">cameron jones</span>
      </div>
      <div class="all-credits">
        <span> — </span><a href="https://open.spotify.com/playlist/6aMK2pcfAUmYQbPYY30zT6?si=_UIDEQxiQnK3aHmoU2r9_Q" target="_blank">all credits</a>
      </div>
    </div>

    <div class="about" id="about" v-scroll-reveal.reset>
      <Nav 
        :showNavTop="true"
        navOneTxt="Work"
        anchorOne="#work">
      </Nav>
      <p>hello, i’m jordi — i make musical things.</p>
      <p>let’s create.</p>
      <p>hit me up — <a href="mailto:jordi.white1@gmail.com">jordi.white1@gmail.com</a></p>
      <img src="@/assets/images/jordi-profile.png" alt="Jordi White Profile Image">
    </div>
  </div>
</transition>
</template>

<script>
import ModeSwitcher from "@/components/ModeSwitcher.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "Home",
  components: {
    ModeSwitcher,
    Nav,
  },
  computed: {
      isDarkMode() {
          return this.$store.getters.isDarkMode;
      },
      isMobile(){
        return this.$mq === 'sm' ? true : false
      },
      isSmallScreen() {
        return this.$mq === 'md' ? true : false
      }
  },
  methods: {
      toggleDarkMode() {
          this.$store.commit("toggleDarkMode");
      }
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
  position:relative;
}

h1,h3,p,a,span{
  @include font-acumin($highlight-text);
  margin: 0;
}

h1 {
  font-size: $font-xl;
  margin: $padding-lg 0;

  @media screen and (max-width: 540px){
    font-size: $font-lg-mobile;
    margin: 0 0 $padding-lg 0;
  }
}

h3 {
  font-size: $font-md;
  word-spacing: $padding-md;
   @media screen and (max-width: 540px){
    font-size: $font-md-mobile;
  }
}

.dark-background {
  background: $background-dark;
}

.light-background {
  background: $background-light;
}

.social {
  color: $highlight-text;
  position: fixed;
  top: 0;
  right: 0;
  font-size: $font-sm;
  padding: $padding-lg;
  z-index: 10;

  @media screen and (max-width: 540px){
    line-height: 18px;
  }

  &.dark-background {
    background-color: $background-dark;
  }

  &.light-background {
    background: $background-light;
  }
  
  a {
    text-decoration: none;

    @media screen and (max-width: 540px){
      font-size: 16px;
    }
  }
}

.emoji {
  font-size: 72px;
  margin-top: 48px;

  @media screen and (max-width: 540px){
    font-size: 42px;
  }
}

.work {
  a, span, p {
    font-size: 36px;
    line-height: 86px;
    
    
    @media screen and (max-width: 940px) {
      font-size: $font-sm;
      line-height: 54px;
    }

    @media screen and (max-width: 540px) {
      font-size: 18px;
      line-height: 40px;
      display:block;
    }
  }

  a {
    text-decoration: underline;
  }

  span {
    word-spacing: 8px;
  }

  @media screen and (min-width: 541px){
    .artists {
      margin-top: 5%;
    }
  }

  .all-credits {
    margin-top: 5%;
  }
}

.about {
  p {
    font-size: 36px;

    @media screen and (max-width: 940px){
      max-width: 600px;
    }

     @media screen and (max-width: 690px){
      max-width: 400px;
    }

    @media screen and (max-width: 540px) {
      font-size: $font-sm;
      max-width:  70%;
      line-height: 42px;
    }
  }

  img {
    margin-top: 88px;
    width: 188px;

    @media screen and (max-width: 540px) {
      width: 120px;
    }
  }

  a {
    @media screen and (max-width: 540px) {
      word-break: break-word;
    }
  }
}
.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
  transition: opacity 1s;
}

.fade-enter-active {
  opacity: 1;
}
</style>
