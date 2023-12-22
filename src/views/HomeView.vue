<template>
    <component :is="switchComponent" />
</template>
  
<script>
    import homePage from '@/views/Home/FootballHomeView.vue';
    import mobileHomePage from '@/views/MobileHome/MobileFootballHomeView.vue';

  
  export default {
    components: {
        homePage,
        mobileHomePage
    },

    data() {
        return {
        switchComponent: null,
        isMobileView: false,
        };
    },

    methods: {
        updateswitchComponent() {
        this.isMobileView = window.innerWidth <= 767;
        this.switchComponent = window.innerWidth <= 767 ? 'mobileHomePage' : 'homePage';
        },
    },

    mounted() {
        this.updateswitchComponent();
        window.addEventListener('resize', this.updateswitchComponent);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.updateswitchComponent);
    },
  }
</script>
  