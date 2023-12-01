<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="date in dates" :key="date.toISOString()">

            <button class="carousel_button hover:bg-hoverGreen" @click="handleButtonClick(date)" >
                <div class="carousel_item carousel_slider">
                    <div class="date-text">
                        {{ formatDate(date) }}
                    </div>
                    <div class="date-of-week-text">
                        <p>{{ formatDayOfWeek(date) }}</p>
                    </div>
                </div>
            </button>



        </Slide>


        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'BreakpointsSliders',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    props: [

    ],
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
            itemsToScroll: 7,
            transition: 2000,
        },
        breakpoints: {
            200: {
                itemsToShow: 7,
                snapAlign: "center",
                itemsToScroll: 7,
                transition: 1000,
            },
            700: {
                itemsToShow: 7,
                snapAlign: 'center',
                itemsToScroll: 7,
                transition: 1500,
            },
            // 1024 and up
            1024: {
                itemsToShow: 7,
                snapAlign: 'start',
                itemsToScroll: 7,
                transition: 2000,
            },
        },
        dates: []
    }),
    created() {
        const today = new Date();
        for (let i = 0; i < 21; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            this.dates.push(nextDate);
        }


    },
    methods: {
        formatDate(date) {
            return date.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit'
            });
        },
        formatDayOfWeek(date) {
            return date.toLocaleDateString('en-US', {
                weekday: 'long',
            });
        },
        handleButtonClick(date) {
            console.log("Button click: ", date);
        }

    }
});

</script>

<style scoped>
.carousel_item {
    min-height: 35px;
    min-width: 10%;
    width: 95%;
    background-color: white;
    color: grey;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 5px; */
}

.carousel_prev,
.carousel_next {
    box-sizing: border-box;
    border: 5px solid white;
}

.carousel_button {
    border: none;
    background: none;
    /* padding: 10%; */
    outline: none;
    min-height: 35px;
    min-width: 10%;
    width: 95%;
    background-color: white;
    color: grey;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
}

.date-text {
    font-size:medium;
    font-weight: 400;
    color: black;
}

.date-of-week-text {
    font-size: small;
    font-weight: 500;
}
</style>
  