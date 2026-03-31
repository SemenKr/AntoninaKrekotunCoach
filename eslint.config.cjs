const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
	{
		ignores: ["dist/**", "node_modules/**"],
	},
	{
		files: ["src/js/app.js", "src/js/files/script.js", "src/js/files/sliders.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
			globals: globals.browser,
		},
		rules: {
			...js.configs.recommended.rules,
			"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"no-console": "off",
		},
	},
];
