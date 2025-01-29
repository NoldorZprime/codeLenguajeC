// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { sidebar } from './src/config/sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CodeC Lenguaje',
			logo: {
				src: './src/assets/code-c-logo.svg',
				alt: 'CodeC Logo',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: sidebar,
		}),
	],
});
