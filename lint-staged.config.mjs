import path from 'node:path'

const buildBiomeCommand = (filenames) =>
  `biome check --write --unsafe ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

export default {
  '*.{js,jsx,ts,tsx,,json,html,css,yaml}': [buildBiomeCommand],
}
