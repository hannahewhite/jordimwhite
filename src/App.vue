<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/global-styles/colors.scss";

@media (prefers-color-scheme: dark) {
  body {
    background-color: $background-dark;
  }
}
@media (prefers-color-scheme: light) {
  body {
    background-color: $background-light;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
}
</style>
