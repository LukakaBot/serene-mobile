<template>
  <wd-tabbar
    :model-value="tabbarStore.tabbarPath"
    :fixed="true"
    :safeAreaInsetBottom="true"
    @change="handleChangeTabbar"
  >
    <wd-tabbar-item
      :title="tab.title"
      :icon="tab.icon"
      :name="tab.path"
      v-for="tab in list"
      :key="tab.index"
    >
    </wd-tabbar-item>
  </wd-tabbar>
</template>

<script setup lang="ts">
import type { TabList } from "./types";
import { useTabbarStore } from "@/store/modules/tabbar";

interface Props {
  list: TabList;
}

const props = defineProps<Props>();

const tabbarStore = useTabbarStore();

const router = useRouter();

const tabs = ref([
  { index: 0, title: "首页", name: "home", icon: "home", route: "home" },
  { index: 1, title: "分类", name: "category", icon: "app", route: "category" },
  { index: 2, title: "我的", name: "mine", icon: "user", route: "mine" },
]);

function handleChangeTabbar({ value }: { value: string }) {
  // const tab = tabs.value[value];
  // const fullPath = `/pages/${tab.route}/index`;
  // tabbarStore.setTabbarIndex(value);
  // tabbarStore.setTabbarName(tab.title);
  // tabbarStore.setTabbarPath(fullPath);
  router.replace(value);
}

watch(router.route, (value) => {
  const findIndex = props.list.findIndex(
    (item) => item.path === value.fullPath
  );
  if (findIndex !== -1) {
    tabbarStore.setTabbarIndex(findIndex);
    tabbarStore.setTabbarName(tabs.value[findIndex].title);
    tabbarStore.setTabbarPath(value.fullPath!);
  }
});
</script>

<style scoped></style>
