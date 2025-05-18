import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';

export default defineUniPages({
	easycom: {
		autoscan: true,
		custom: {
			'^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
		},
	},
	pages: [
		{
			path: 'pages/home/index',
			name: 'home',
			type: 'home',
			layout: 'page',
			style: {
				navigationBarTitleText: '首页',
			},
		},
		{
			path: 'pages/category/index',
			name: 'category',
			type: 'category',
			layout: 'page',
			style: {},
		},
		{
			path: 'pages/mine/index',
			name: 'mine',
			type: 'mine',
			layout: 'page',
			style: {},
		},
		{
			path: 'pages/logs/index',
			name: 'logs',
			type: 'logs',
			layout: false,
			style: {
				navigationBarTitleText: '日志',
			},
		},
	],
	subPackages: [],
});
