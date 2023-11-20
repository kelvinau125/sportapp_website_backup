<template>
    <div>
      <div class="date-slider bg-hoverGreen" >
        <button @click="prevWeek" class="bg-black">
          <img src="../assets/toLeft.png" alt="Previous Week" />
        </button>
        <div v-for="day in week" :key="day" class="date-item" @click="selectDate(day)">
          <div>{{ formatDay(day) }}</div>
          <div class="day-of-week">{{ $t(formatDayOfWeek(day)) }}</div>
        </div>
        <button @click="nextWeek">
          <img class="bg-green-500" src="../assets/toRight.png" alt="Next Week" />
        </button>
      </div>
  
      <div v-if="selectedDate">
        <h2>Content for {{ formatDay(selectedDate) }}</h2>
        <p>Day of the week: {{ $t(formatDayOfWeek(selectedDate)) }}</p>
        <!-- Display content specific to the selected date here -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { addDays, startOfWeek, format, isToday } from 'date-fns';
//   import { i18n } from '@/i18n'; // Make sure to adjust the path based on your project structure
  
  const currentDate = ref(new Date());
  const daysToShow = ref(7);
  const selectedDate = ref(null);
  
  const week = computed(() => {
    const startDate = startOfWeek(currentDate.value, { weekStartsOn: 1 });
    return Array.from({ length: daysToShow.value }, (_, index) => addDays(startDate, index));
  });
  
  const formatDay = (date) => format(date, 'yyyy-MM-dd');
  const formatDayOfWeek = (date) => (isToday(date) ? 'Today' : format(date, 'EEEE'));
  
  const prevWeek = () => {
    currentDate.value = addDays(currentDate.value, -7);
  };
  
  const nextWeek = () => {
    currentDate.value = addDays(currentDate.value, 7);
  };
  
  const selectDate = (date) => {
    selectedDate.value = date;
  };
  </script>
  
  <style>
  .date-slider {
    display: flex;
    align-items: center;
  }
  
  .date-item {
    margin: 0 10px;
    cursor: pointer;
    text-align: center;
  }
  
  .day-of-week {
    font-size: 0.8em;
    color: #666;
  }
  </style>
  