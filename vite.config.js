import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url'
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        laravel({
            input: [
                "resources/js/app/styles/app.sass",
                "resources/js/app/entrypoint/app.js",
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./resources/js", import.meta.url)),
        },
    },
});
