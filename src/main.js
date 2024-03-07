import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import "primeflex/primeflex.css"
import 'primeicons/primeicons.css'
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Carousel from 'primevue/carousel';
import Tag from "primevue/tag";
import DataView from "primevue/dataview";
import  Card  from 'primevue/card';
import  InputText  from 'primevue/inputtext';
import  Textarea  from 'primevue/textarea';
import AutoComplete from "primevue/autocomplete";

const pinia = createPinia()

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(pinia)

app.component("Menubar", Menubar)
app.component("Toolbar", Toolbar)
app.component("Button", Button)
app.component("Carousel", Carousel)
app.component("Tag", Tag)
app.component("DataView", DataView)
app.component("Card", Card)
app.component("InputText", InputText)
app.component("Textarea", Textarea)
app.component("AutoComplete", AutoComplete)

app.mount('#app')
