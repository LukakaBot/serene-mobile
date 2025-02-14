import { createSSRApp } from "vue";
import App from "./App.vue";
import 'uno.css';
import router from './router';
import { setupPinia } from './store';

export function createApp() {
  const app = createSSRApp(App);


  app.use(router);
  setupPinia(app);

  return {
    app,
  };
}
