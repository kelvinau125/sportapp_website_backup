<template>
    <component :is="switchComponent" />
</template>

<script>
    import live from '@/components/LivePage.vue';
    import mobileLive from '@/views/MobileLivePage/MobileLivePage.vue';


  export default {
    components: {
        live,
        mobileLive
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
        this.switchComponent = window.innerWidth <= 767 ? 'mobileLive' : 'live';
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