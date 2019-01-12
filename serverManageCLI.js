#!/usr/bin/env node

const minimist = require('minimist')
const fs = require('fs')

commands = [];

fs.readdir("./cmds/", (err, files) => {
			let jsfiles = files.filter(f => f.split(".").pop() === 'js');
			if (jsfiles.length < 1) {
				console.log(`No commands found`);
			}
			jsfiles.forEach((file) => {
                command = file;
                command.split(".").pop() === 'js'
				console.log(`Loaded ${command}`);
				commands.push(command.split(".").pop() === 'js');
			})
		})

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'

    if (commands.includes(cmd)) {
        return require(`./cmds/${cmd}`)(args)
    }else {
    console.error(`"${cmd}" is not a valid command!`)
    }
  }