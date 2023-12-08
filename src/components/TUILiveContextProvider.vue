<!-- 

<template>
   <TUILiveContext.Provider :value="contextValue">
    Render the children provided by the parent component
    <slot></slot>
  </TUILiveContext.Provider> 
</template>

<script>
import { ref } from "vue";
// import { TUILiveContext } from "./TUILiveContext"; // Assuming your context file is named TUILiveContext.js

export default {
  props: {
    value: Object, // Prop to receive the context value
  },
  setup(props) {
    const contextValue = ref(props.value); // Ref to hold the context value

    // Expose the context to the template
    return { contextValue };
  },
};
</script>
 -->
