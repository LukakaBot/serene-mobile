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
			style: {
				navigationBarTitleText: '首页',
			},
		},
		{
			path: 'pages/category/index',
			name: 'category',
			type: 'category',
			style: {},
		},
		{
			path: 'pages/mine/index',
			name: 'mine',
			type: 'mine',
			style: {},
		},
		{
			path: 'pages/logs/index',
			name: 'logs',
			type: 'logs',
			style: {
				navigationBarTitleText: '日志',
			},
			layout: false,
		},
	],
	subPackages: [],
});
