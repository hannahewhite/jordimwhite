<template>
    <div class="ModeSwitcher" :class="{'dark-background' : isDarkMode, 'light-background' : !isDarkMode}">
        <font-awesome-icon @click="darkMode" class="icon" :class="{'selected' : isDarkMode}" :icon="['fas', 'moon']" />
        <font-awesome-icon @click="lightMode" class="icon" :class="{'selected' : !isDarkMode}" :icon="['fas', 'sun']" />
    </div>
</template>

<script>
    export default {
        name: 'ModeSwitcher',

        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode;
            }
        },
        methods: {
            darkMode() {
                let darkMode = this.$store.getters.isDarkMode;
                if (darkMode === false) {
                    this.$store.commit("toggleDarkMode");
                }
                else {
                    return;
                }
            },
            lightMode() {
                let darkMode = this.$store.getters.isDarkMode;
                if (darkMode === true) {
                    this.$store.commit("toggleDarkMode");
                }
                else {
                    return;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/global-styles/colors.scss";
@import "@/assets/global-styles/padding.scss";
@import "@/assets/global-styles/typography.scss";

.ModeSwitcher {
  position: fixed;
  top: 0;
  left: 0;
  padding: $padding-lg;

  @media screen and (max-width: 940px) {
    right: 0;
    z-index: 10;

    &.dark-background {
        background-color: $background-dark;
    }

    &.light-background {
        background-color: $background-light;
    }
  }
}

.icon {
 font-size: 30px;
 color: $gray-text;
 padding: 0 $padding-xs;
 cursor: pointer;
     &.selected {
        color: $highlight-text;
    }

    @media screen and (max-width: 540px){
        font-size: $font-sm;
    }
}
</style>