import { execSync } from 'child_process'
import fs from 'fs'
import express from 'express'
import webpack from 'webpack'
import config from './webpack.config'

import devMiddleware from 'webpack-dev-middleware'

const indexHTML = fs.readFileSync('./index.html')
const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('*', (req, res) => {
  res.end(indexHTML)
})

app.listen(1337, () => {
  console.log('Listening on http://localhost:1337')

  // const openCommand = execSync('which open', { encoding: 'utf-8' })

  // if (openCommand) {
  //   execSync(`open http://localhost:1337`)
  // }
})
