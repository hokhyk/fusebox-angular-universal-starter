import { Sparky } from 'fuse-box'
import { BUILD_CONFIG, taskName } from '../../config/build.config'
const nrc = require('node-run-cmd')

Sparky.task(taskName(__filename), () => {
  return nrc.run(`node_modules/.bin/ngsw-config ${BUILD_CONFIG.outputDir} ./src/client/ngsw.json`)
})

