import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { ZiggyVue } from "ziggy-js";

createInertiaApp({
    progress: { color: "#29d", showSpinner: false },

    resolve: (name) => {
        const pages = import.meta.glob("../../pages/**/*.vue", { eager: true });
        return pages[`../../pages/${name}.vue`];
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)               // <— ЭТО ВСЁ, ЧТО НУЖНО
            .mount(el);
    },
});
