import { defineStore } from 'pinia';
import type { TabbarState } from './types';

export const useTabbarStore = defineStore({
  id: 'tabbar-store',
  state: (): TabbarState => ({
    tabbarIndex: 0,
    tabbarName: '首页',
  }),
  actions: {

  }
})