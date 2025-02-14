<template>
	<wd-tabbar v-model="tabbar" @change="handleChangeTabbar">
		<wd-tabbar-item
			v-model="tabbar"
			:title="tab.title"
			:icon="tab.icon"
			v-for="tab in tabs"
			:key="tab.index"
		>
		</wd-tabbar-item>
	</wd-tabbar>
</template>

<script setup lang="ts">
// import { useTabbarStore } from '@/store/modules/tabbar';

// const tabbarStore = useTabbarStore();

const router = useRouter();

const currentPage = ref('home');

const tabbar = ref(0);

const tabs = ref([
	{ index: 0, title: '首页', name: 'home', icon: 'home', route: 'home' },
	{ index: 1, title: '分类', name: 'category', icon: 'app', route: 'category' },
	{ index: 2, title: '我的', name: 'mine', icon: 'user', route: 'mine' },
]);

function handleChangeTabbar({ value }: { value: number }) {
	console.log('value: ' + value);
	console.log('tabbar: ' + tabbar.value);
	console.log('currentPage: ' + currentPage.value);
	console.log('tabs: ' + tabs.value[value].route);
	router.push(`/pages/${tabs.value[value].route}/index`);
}
</script>

<style scoped></style>
