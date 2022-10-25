import babel from "@rollup/plugin-babel"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { uglify } from "rollup-plugin-uglify"
import { sizeSnapshot } from "rollup-plugin-size-snapshot"

const isExternal = id => !id.startsWith('.') && !id.startsWith('/')
const getBabelOptions = ({ useESModules }) => ({
	babelrc: false,
	exclude: "**/node_modules/**",
	babelHelpers: "runtime",
	presets: ["@babel/react", "@babel/env"],
	plugins: [["@babel/transform-runtime", { useESModules }]],
})

function createConfig(entry, out, name) {
  return [
    {
      input: `./src/${entry}.js`,
      output: { file: `dist/${out}.es.js`, format: 'es' },
      external: isExternal,
      plugins: [babel(getBabelOptions({ useESModules: true })), sizeSnapshot()],
    },
    {
      input: `./src/${entry}.js`,
      output: { file: `dist/${out}.cjs.js`, format: 'cjs' },
      external: isExternal,
      plugins: [babel(getBabelOptions({ useESModules: false }))],
    },
    {
      input: `./src/${entry}.js`,
      output: {
        file: `dist/${out}.umd.js`,
        format: 'umd',
        name,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
          'react-spring': 'ReactSpring',
        },
      },
      external: ['react', 'react-dom', 'prop-types', 'react-spring'],
      plugins: [
        babel(getBabelOptions({ useESModules: false })),
				nodeResolve(),
				commonjs(),
				sizeSnapshot(),
				uglify({ compress: true, mangle: { toplevel: true } }),
      ],
    },
  ]
}

export default [
  ...createConfig('index', 'react-animated-tree', 'ReactAnimatedTree'),
]
