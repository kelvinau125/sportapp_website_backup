<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(controller, index) in controllers" :key="index" class="digit-input">
      <input
        v-model="controller.value"
        @input="handleInput(index)"
        @focus="handleFocus(index)"
        @blur="handleBlur(index)"
        :class="{ 'green-border': controller.value !== '' }"
        type="text"
        maxlength="1"
        class="digit-field"
        ref="inputRefs"
      />
    </div>
    <button @click="readValues">Read Values</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      controllers: [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ],
    };
  },
  methods: {
    handleInput(index) {
      let inputValue = this.controllers[index].value;

      // Check if the entered value is a digit
      if (typeof inputValue === 'string') {
        inputValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
      }

      // Check if inputValue is still a string before proceeding
      if (typeof inputValue === 'string') {
        this.controllers[index].value = inputValue;
      }

      if (this.controllers[index].value.length === 1) {
        this.focusNext(index);
      } else if (this.controllers[index].value.length === 0) {
        this.focusPrevious(index);
      }
    },
    
    handleFocus(index) {
      // Handle focus if needed
      console.log(`Input focused at index ${index}`);
    },

    handleBlur(index) {
      // Handle blur if needed
      console.log(`Input blurred at index ${index}`);
    },

    focusNext(index) {
      if (index < this.controllers.length - 1) {
        const nextInput = this.$refs.inputRefs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        // Last input, submit or do something else
      }
    },

    focusPrevious(index) {
      if (index > 0) {
        const prevInput = this.$refs.inputRefs[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      } else {
        // First input, do something if needed
      }
    },

    handleSubmit() {
      // Handle form submission
    },

    readValues() {
      const values = this.controllers.map(controller => controller.value);
      console.log('Input values:', values);
    },

  },
};
</script>

<style scoped>
.digit-input {
  display: inline-block;
  margin-right: 10px; /* Adjust as needed */
}

.digit-field {
  height: 60px; /* Adjust as needed */
  width: 70px; /* Adjust as needed */
  text-align: center;
  font-size: 22px; /* Adjust as needed */
  border: 1px solid #ccc; /* Adjust as needed */
  border-radius: 6px; /* Adjust as needed */
  margin-bottom: 10px; /* Adjust as needed */
}

.green-border {
  border: 3px solid  rgb(34 197 94); /* Change to your desired color */
}


/* Add other styles as needed */
</style>
