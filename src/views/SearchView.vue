<template>
    <component :is="switchComponent" />
</template>

<script>
    import search from '@/components/SearchResult.vue';
    import mobileSearch from '@/components/MobileSearchResult.vue';


  export default {
    components: {
        search,
        mobileSearch
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
        this.switchComponent = window.innerWidth <= 767 ? 'mobileSearch' : 'search';
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