// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }
            ],
            title: "Orchard FED Test",
            script: [],
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico"
                }
            ]
        }
    },
    css: ["~/assets/css/main.scss"],
    components: ["~/components"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
});
