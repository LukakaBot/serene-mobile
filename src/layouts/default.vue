<template>
  <div class="flex flex-col h-full">
    <div class="flex-1">
      <slot>main</slot>
    </div>
    <wd-tabbar v-model="tabbar" @change="handleChangeTabbar">
      <wd-tabbar-item
        :title="tab.title"
        :icon="tab.icon"
        v-for="tab in tabs"
        :key="tab.index"
      >
      </wd-tabbar-item>
    </wd-tabbar>
  </div>
</template>

<script setup lang="ts">
const tabbar = ref(0);

const tabs = ref([
  { index: 0, title: "首页", icon: "home", route: "home" },
  { index: 1, title: "分类", icon: "cart", route: "category" },
  { index: 2, title: "我的", icon: "user", route: "mine" },
]);

function handleChangeTabbar({ value }: { value: number }) {
  console.log(typeof value);
  console.log(tabs.value[value].route);
}
</script>

<style scoped></style>
