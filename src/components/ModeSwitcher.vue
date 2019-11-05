<template>
    <div class="ModeSwitcher">
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

.ModeSwitcher {
  position: fixed;
  top: $padding-lg;
  left: $padding-lg;
}

.icon {
 font-size: 30px;
 color: $gray-text;
 padding: 0 $padding-xs;
 cursor: pointer;
     &.selected {
        color: $highlight-text;
    }
}
</style>