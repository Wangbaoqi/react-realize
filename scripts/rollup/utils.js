import path from 'path';
import fs from 'fs';
import url from 'url';

import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

// resolve __dirname not defined in ES Module
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../build/node_modules');

/**
 * resolve package path
 * @param {string} pkgName
 * @param {boolean} isDist
 * @returns
 */
export const resolvePackagePath = (pkgName, isDist) => {
	if (isDist) return `${distPath}/${pkgName}`;
	return `${pkgPath}/${pkgName}`;
};

/**
 * get packageJson object by package name
 * @param {*} pkgName
 * @returns
 */
export const getPackageJSON = (pkgName) => {
	const path = `${resolvePackagePath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf8' });
	console.log(JSON.parse(str), 'ds');
	return JSON.parse(str);
};

/**
 * get base rollup plugins
 * @param {*} {}
 * @returns
 */
export const getBaseRollupPlugin = ({
	alias = {
		__DEV__: true
	},
	typescript = {}
} = {}) => {
	return [replace(alias), cjs(), ts(typescript)];
};
