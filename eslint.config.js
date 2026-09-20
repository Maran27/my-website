import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import ts from 'typescript-eslint';

const gitignorePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.gitignore');

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		}
	},
	{
		// eslint-plugin-svelte parses `<script lang="ts">` blocks with the
		// parser configured here; without it, TypeScript syntax fails to parse.
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		rules: {
			// Keep the foundation quiet: real content milestones enable
			// stricter rules once components carry logic.
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],
			// No `paths.base` is configured, so plain root-relative hrefs are
			// correct. Revisit if the site is ever deployed under a subpath.
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
);
