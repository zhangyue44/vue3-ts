<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
