const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');

async function setup() {
  
  const onePasswordUrl = "https://cache.agilebits.com/dist/1P/op2/pkg/v2.7.3/op_apple_universal_v2.7.3.pkg"
  const archive = await tc.downloadTool(onePasswordUrl)

  let extracted
    // Expanding the package manually to avoid needing an admin password for installation and to be able to put it into the tool cache.
    const extract = 'op.unpkg'
    await exec.exec('pkgutil', ['--expand', archive, extract])
    await exec.exec(
      `/bin/bash -c "cat ${extract}/Payload | gzip -d | cpio -id"`
    )
    extracted = '.'

  let destination = `${process.env.HOME}/bin`

    // Using ACT, lets set to a directory we have access to.
  if (process.env.ACT) {
    destination = `/tmp`
  }

  await mv(`${extracted}/op`, `${destination}/op`)
  await chmod(`${destination}/op`, '0755')

  const cachedPath = await tc.cacheDir(destination, 'op', onePasswordVersion)
  core.addPath(cachedPath)
  console.log(cachedPath)
}

module.exports = setup




