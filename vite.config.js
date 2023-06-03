import {defineConfig} from "vite";
import symfonyPlugin from "vite-plugin-symfony";

const assetsPath = './assets/';
export default defineConfig({
    plugins: [
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: `${assetsPath}js/app.js`,
                css: `${assetsPath}css/app.css`,

                adminatorJs: `${assetsPath}adminator/scripts/index.js`,
                adminatorStyle: `${assetsPath}adminator/styles/index.scss`,
            },
        }
    },
});
