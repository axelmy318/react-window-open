import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import external from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json")

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default [
    {
        external: [
            'react',
            'react-dom',
        ],
        input: 'src/index.js',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            resolve(),
            external({
                includeDependencies: true,
            }),
            babel({
                presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
                extensions: EXTENSIONS,
                exclude: 'node_modules/**',
            }),
            commonjs(),
            postcss(),
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [
          { dir: 'dist/esm', format: 'esm', sourcemap: true },
          { dir: 'dist/cjs', format: 'cjs', exports: 'named', sourcemap: true },
        ],
        plugins: [],
        external: [/\.css$/],
    }
]