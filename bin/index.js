#! /usr/bin/env node
const fs = require('fs')
const {execSync} = require('child_process')

const args = process.argv.slice(2)

console.log(`\n   [⏳] Initialising the RuskelUI config ... \n`)

const pathOne = `tailwind.config.js`;
const pathTwo = `postcss.config.js`;

const cloneBase = `curl https://raw.githubusercontent.com/0xreeko/ruskelui/master/configs/tailwind.config.js -o 'tailwind.config.js'`
const cloneFull = `${cloneBase} && curl https://raw.githubusercontent.com/0xreeko/ruskelui/master/configs/postcss.config.js -o 'postcss.config.js'`

const runCmd = async cmd => {
    try {
        await execSync(`    ${cmd}`, {stdio: 'inherit'})
    } catch (err) {
        console.log(`Failed to execute ${cmd}:`, err)
        return false; 
    }
    return true
}

if (!args.includes('-p')) {
    if (fs.existsSync(pathOne)) {
        console.log(`${pathOne} already exists.`);
        return
    }
    else {
        const execCmd = runCmd(cloneBase)
        if(!execCmd) process.exit(-1)
        console.log(`\n   ✅ Created RuskelUI's Tailwind config file. Enjoy, you little ruskel xD!\n`)
        console.log(`   ⭐️ Star us on Github via https://github.com/0xreeko/ruskelui\n`)
        console.log(`   👾 Author Note: Follow me on Twitter via https://twitter.com/0xreeko, and tweet/tag me if you mention RuskelUI :)\n`)
        return
    }
} else {
    if (fs.existsSync(pathOne) && fs.existsSync(pathTwo)) {
        console.log(`${pathOne} & ${pathTwo} already exist.`);
        return
      } else {
        const execCmd = runCmd(cloneFull)
        if(!execCmd) process.exit(-1)
        console.log(`\n   ✅ Created RuskelUI's Tailwind config file. Enjoy, you little ruskel xD!\n`)
        console.log(`   ⭐️ Star us on Github via https://github.com/0xreeko/ruskelui\n`)
        console.log(`   👾 Author Note: Follow me on Twitter via https://twitter.com/0xreeko, and tweet/tag me if you mention RuskelUI :)\n`)
        return;
      }
  }