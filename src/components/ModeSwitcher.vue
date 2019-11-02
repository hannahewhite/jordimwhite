<template>
    <div class="ModeSwitcher">
        <font-awesome-icon class="icon selected" :icon="['fas', 'moon']" />
        <font-awesome-icon class="icon" :icon="['fas', 'sun']" />
    </div>
</template>

<script>
    export default {
        name: 'ModeSwitcher'
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
}

.icon {
    &.selected {
        color: $highlight-text;
    }
}
</style>