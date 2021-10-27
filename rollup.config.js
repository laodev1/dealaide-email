import babel from "@rollup/plugin-babel";
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';
import css from "rollup-plugin-import-css";

export default {
  input: ['src/app-root.js'],
  treeshake: true,
  output: {
    format: 'esm',
    dir: 'dist'
  },
  plugins: [
    babel(),
    resolve({jsnext:true }),
    json(),
    image(),
    css(),
     copy({
      targets: [
        { src: './assets/**/*', dest: 'dist/assets' }
      ]
    })
  ]
}