import { createApp } from 'vue';

import 'normalize.css/normalize.css';
import '@/assets/sass/main.scss';
import 'swiper/swiper.css';

import emitter from '@/script/mitt';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(router);
app.mount('#app');
