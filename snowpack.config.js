module.exports = {
  root: './popup',
  buildOptions: {
    out: './dist'
  },
  // not working, replaced with copy_assets in package.json
  // https://github.com/snowpackjs/snowpack/issues/1286
  // mount: {
  //   "node_modules/@shoelace-style/shoelace/dist/assets": { url: "/shoelace/assets", static: true }
  // },
}