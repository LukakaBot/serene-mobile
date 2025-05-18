<template>
  <div class="flex flex-col h-full box-border" :style="pageStyle">
    <!-- <div class="flex-1"> -->
    <slot>main</slot>
    <BaseTabbar :list="tabList" />
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
const tabList = [
  {
    index: 0,
    title: "首页",
    path: "/pages/home/index",
    icon: "home",
    route: "home",
  },
  {
    index: 1,
    title: "分类",
    path: "/pages/category/index",
    icon: "app",
    route: "category",
  },
  {
    index: 2,
    title: "我的",
    path: "/pages/mine/index",
    icon: "user",
    route: "user",
  },
];

const bottom = computed(() => {
  return uni.getSystemInfoSync().safeAreaInsets?.bottom || 0;
});

const pageStyle = computed(() => ({
  paddingBottom: `${bottom.value + 50}px`,
}));
</script>

<style scoped></style>
