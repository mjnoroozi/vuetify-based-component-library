import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import "./style.css";
import { createVuetify } from "vuetify";

const vuetify = createVuetify();

const app = createApp(App);

app.use(vuetify).mount("#root");

export default vuetify;
