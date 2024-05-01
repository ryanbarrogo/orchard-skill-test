module.exports = {
    plugins: {
        prettier: {}
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    ignorePatterns: ["node_modules/", "dist/", "output/", "nuxt/"],
    rules: {
        "no-undef": 0,
        "no-useless-catch": 0,
        "vue/no-mutating-props": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "prettier/prettier": "error",
        indent: ["error", 4],
        "vue/multi-word-component-names": 0,
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                registeredComponentsOnly: false
            }
        ],
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "vue/html-self-closing": [
            0,
            {
                html: {
                    void: "always",
                    normal: "always",
                    component: "always"
                },
                svg: "never",
                math: "never"
            }
        ],
        "linebreak-style": 0
    }
};
