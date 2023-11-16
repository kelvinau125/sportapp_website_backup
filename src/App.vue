<template>
  <div class="w-full bg-gray-900 ">
    <Navbar/>
  </div>
  <div>
    <router-view/>
  </div>
</template>
<script>
// import { ref } from 'vue'
import Navbar from './components/NavBar.vue'
// import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // FooterPage
  }
}
// import HomeView from './views/HomeView.vue'

// const img = ref(require('./assets/topNav/football.png'))
// const isDropdownOpen = ref(false)

// const toggleDropdown = () => {
//   isDropdownOpen.value = !isDropdownOpen.value
// }

// const selectOption = (image) => {
//   console.log(image)
//   img.value = image // Update the default image when an option is selected
//   isDropdownOpen.value = false // Close the dropdown
// }

// const searchText = ref('')

// const clearSearch = () => {
//   searchText.value = ''
// }

</script>

<style>

#app {
  width: 100%;
  background-color: #F4F9F4;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  height: 100vh;

}

.search-container {
  position: relative;
}

.search-input {
  width: 280px;
  height: 40px;
  border: 2px solid #ccc;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.3);
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;
  padding-right: 3px;
  margin: 6px;
}

.clear-button {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;

  .nav-div {
    padding: 10px;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  /* Style the dropdown trigger button */
  .dropdown-button {
    padding-top: 10px;
    background: none;
    border: none;
    cursor: pointer;
    width: 55px;
  }

  /* Style the dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    width: 40px;
    z-index: 1;
    padding-top: 0;
  }

  /* Style the dropdown options */
  .dropdown-content .dropdown-button {
    display: block;
    padding: 8px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Change color on hover */
  .dropdown-content .dropdown-button:hover {
    background-color: #ddd;
    width: 40px;
  }

  .show-dropdown {
    display: block !important;
  }
  .component {
      display: flex; /* Use flexbox to center content vertically */
      align-items: center;
      width: 100%;
      height: 5%;
      margin: 5px;
      justify-content: space-between;
    }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>
