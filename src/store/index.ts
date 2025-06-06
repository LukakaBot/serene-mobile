import type { App } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useTabbarStore } from './modules/tabbar';

export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

function setupPinia(app: App) {
	app.use(pinia);
}

export { setupPinia, useTabbarStore };
