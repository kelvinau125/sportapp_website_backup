<template>
  <TUILiveContext.Provider :value="contextValue">
    <!-- Your Vue components here, wrapped within TUILiveContext.Provider -->
    <slot> </slot>
  </TUILiveContext.Provider>
</template>

<script>
import { ref, provide, inject } from "vue";

export const TUILiveContext = Symbol("TUILiveContext");

export default {
  props: {
    value: Object,
  },
  setup(props, { slots }) {
    const contextValue = ref(props.value);

    provide(TUILiveContext, contextValue);

    return () => <>{slots.default && slots.default()}</>;
  },
};
</script>
