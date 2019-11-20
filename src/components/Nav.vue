<template>
    <div class="nav">
        <div v-if="showNavTop" class="nav-section nav-top">
            <a href="#" v-scroll-to="anchorOne" class="link-one link">{{navOneTxt}}</a>
            <div class="line-one line"></div>
        </div>
        <div v-if="showNavBottom" class="nav-section nav-bottom">
            <div class="line-two line"></div>
            <a href="#" v-scroll-to="anchorTwo" class="link-one link">{{navTwoTxt}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props: {
            showNavTop: {
                type: Boolean,
                default: false
            },
            showNavBottom: {
                type: Boolean, 
                default: false
            },
            navOneTxt: String,
            navTwoTxt: String,
            anchorOne: String,
            anchorTwo: String,
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/global-styles/typography.scss";
@import "@/assets/global-styles/colors.scss";
@import "@/assets/global-styles/padding.scss";


.nav {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100px;

    a {
        text-transform: uppercase;
        text-decoration: none;
        @include font-acumin($highlight-text);
        font-size: $font-sm;

        @media screen and (max-width: 540px){
            font-size: 16px;
        }
    }
}
.nav-section {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-end;
    right: $padding-xl;

    @media screen and (max-width: 540px) {
        right: $padding-lg;
    }
}

.nav-top {
    top: 100px;
}

.nav-bottom {
    bottom: 32px;
    @media screen and (max-width: 540px) {
        bottom: 160px;
    }
}


.line {
    width: 2px;
    height: 200px;
    background-color: $gray-text;
}

.line-one {
    margin-top: 60px;
    @media screen and (max-width: 540px) {
        margin-top: 20px;
    }
}

.line-two {
    margin-bottom: 60px;
    @media screen and (max-width: 540px) {
    margin-bottom: 20px;
    }
}
</style>