<template>
  <div class="team-stats">
    <div class="team">
      <h2>Team A</h2>
      <div class="stat-bar" :style="{ width: controlRateA + '%' }"></div>
      <p>Control Rate: {{ controlRateA }}%</p>
      <!-- Add more statistics as needed -->
    </div>

    <div class="team">
      <h2>Team B</h2>
      <div class="stat-bar" :style="{ width: controlRateB + '%' }"></div>
      <p>Control Rate: {{ controlRateB }}%</p>
      <!-- Add more statistics as needed -->
    </div>
  </div>
</template>

<script setup>
const controlRateA = 60; // Replace with your actual data
const controlRateB = 40; // Replace with your actual data
// Add more data properties for other statistics
</script>

<style scoped>
.team-stats {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.team {
  text-align: center;
}

.stat-bar {
  height: 20px;
  background-color: #3498db; /* Set the background color of the bar */
  margin-bottom: 5px;
}
</style>
