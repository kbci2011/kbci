import { createApp } from 'vue';
import App from './App.vue'; // App.vue는 루트 컴포넌트입니다.
import router from './router'; // router 폴더의 index.js에서 정의된 라우터를 임포트합니다.

// Vue 애플리케이션 인스턴스를 생성합니다.
const app = createApp(App);

// 사용할 플러그인을 설정합니다. 여기서는 Vue Router를 추가합니다.
app.use(router);

// #app 엘리먼트에 애플리케이션을 마운트합니다.
app.mount('#app');