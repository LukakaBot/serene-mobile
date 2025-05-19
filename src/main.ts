import { createSSRApp } from "vue";
import App from "./App.vue";
import 'uno.css';
import router from './router';
import { setupPinia } from './store';
import share from "./mixin/share";

export function createApp() {
  const app = createSSRApp(App);

  app.use(router);
  app.mixin(share);
  setupPinia(app);

  return {
    app,
  };
}
