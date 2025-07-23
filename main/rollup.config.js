import typescript from '@rollup/plugin-typescript'

export default {
  input: 'index.ts',
  output: {
    file: 'dist/plot.js',
    format: 'es',
    sourcemap: true
  },
  external: ['three'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist'
    })
  ]
} 