<template>
    <div class="backgroundImg">
      <slot></slot>
    </div>
</template>

<style>
.backgroundImg {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  background-image: url('../assets/main/background_2.png');
  background-size:cover ;
  background-position: center;
  width: 100%;
  height: 650px;
}
</style>