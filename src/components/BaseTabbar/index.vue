<template>
	<wd-tabbar v-model="tabbar" @change="handleChangeTabbar">
		<wd-tabbar-item
			v-model="currentPage"
			:title="tab.title"
			:icon="tab.icon"
			v-for="tab in tabs"
			:key="tab.index"
		>
		</wd-tabbar-item>
	</wd-tabbar>
</template>

<script setup lang="ts">
const currentPage = ref('home');

const tabbar = ref(0);

const tabs = ref([
	{ index: 0, title: '首页', name: 'home', icon: 'home', route: 'home' },
	{ index: 1, title: '分类', name: 'category', icon: 'app', route: 'category' },
	{ index: 2, title: '我的', name: 'mine', icon: 'user', route: 'mine' },
]);

function handleChangeTabbar({ value }: { value: number }) {
	console.log(currentPage.value);
	console.log(value);
	console.log(tabs.value[value].route);
}
</script>

<style scoped></style>
