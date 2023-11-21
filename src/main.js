import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import Axios from "axios";
import contactStore from './app/contact/store'

import "./assets/css/dashforge.css";
import "./assets/lib/@fortawesome/fontawesome-free/css/all.min.css";


const app = createApp(App);
app.use(router)
    .use(contactStore)
    .mount('#app');


app.config.globalProperties.authServer = process.env.VUE_APP_AUTH_SERVER;
app.config.globalProperties.appServer = process.env.VUE_APP_SERVER;
app.config.globalProperties.messageServer = process.env.VUE_APP_MESSAGE_SERVER;
app.config.globalProperties.cdn = process.env.VUE_APP_CDN_SERVER;
app.config.globalProperties.fileServer = process.env.VUE_APP_FILE_SERVER;
app.config.globalProperties.appStatic = process.env.VUE_APP_STATIC_FILES;
app.config.globalProperties.placeHolder = process.env.VUE_APP_IMG_PLACEHOLDER;
app.config.globalProperties.secretKey = process.env.VUE_APP_SECRET_KEY;
app.config.globalProperties.orgAppId = process.env.VUE_APP_AUTH_ID;

app.config.globalProperties.$axios = Axios;


