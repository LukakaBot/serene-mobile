import { defineStore } from 'pinia';
import type { TabbarState } from './types';

export const useTabbarStore = defineStore('tabbar', {
  persist: true,
  state: (): TabbarState => ({
    tabbarIndex: 0,
    tabbarName: '首页',
    tabbarPath: '/pages/home/index'
  }),
  actions: {
    setTabbarIndex(index: number) {
      this.tabbarIndex = index;
    },
    setTabbarName(name: string) {
      this.tabbarName = name;
    },
    setTabbarPath(path: string) {
      this.tabbarPath = path;
    }
  },
});
