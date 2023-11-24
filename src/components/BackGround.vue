<template>
    <div class="backgroundImg">
      <slot></slot>
    </div>
</template>

<style>
.backgroundImg {
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 647px;
  align-items: center;
  background-image: url('../assets/main/background_2.png');
  background-size:cover ;
  background-position: center;
  width: 100%;
}
</style>