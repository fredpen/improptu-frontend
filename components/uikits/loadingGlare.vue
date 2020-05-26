<template>
  <div class="glare">
    <v-progress-circular :size="90" :width="3" color="#BD161C" indeterminate></v-progress-circular>
  </div>
</template>


<style scoped>
.glare {
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.877);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1111111111;
  align-items: center;
}
</style>
