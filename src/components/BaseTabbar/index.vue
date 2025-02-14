<template>
	<wd-tabbar
		:model-value="tabbarStore.tabbarIndex"
		@change="handleChangeTabbar"
	>
		<wd-tabbar-item
			:title="tab.title"
			:icon="tab.icon"
			v-for="tab in tabs"
			:key="tab.index"
		>
		</wd-tabbar-item>
	</wd-tabbar>
</template>

<script setup lang="ts">
import { useTabbarStore } from '@/store/modules/tabbar';

const tabbarStore = useTabbarStore();

const router = useRouter();

const tabs = ref([
	{ index: 0, title: '首页', name: 'home', icon: 'home', route: 'home' },
	{ index: 1, title: '分类', name: 'category', icon: 'app', route: 'category' },
	{ index: 2, title: '我的', name: 'mine', icon: 'user', route: 'mine' },
]);

function handleChangeTabbar({ value }: { value: number }) {
	tabbarStore.setTabbarIndex(value);
	tabbarStore.setTabbarName(tabs.value[value].title);
	router.push(`/pages/${tabs.value[value].route}/index`);
}
</script>

<style scoped></style>
