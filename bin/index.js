#!/usr/bin/env node
/**
 * Copyright (c) 2022-present, @Laffery
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const fs = require('fs-extra');
const chalk = require('chalk');
const commander = require('commander');
const path = require('path');
const packageJson = require('../package.json');
const templates = require('../template.manifest.json');

function listTemplates() {
  console.log(chalk.green('Templates available:'));
  templates.forEach(t => console.log(chalk.bold("  " + t.name), '\t', t.description || "no description"));
}

const cmd = new commander.Command("create app")
  .version(packageJson.version)
  .argument('[name]', 'project name', 'my-app')
  .argument('[template]', 'template name', templates[0].name)
  .usage(`${chalk.green('<name>')} [options]`)
  .option('-O, --output <string>', 'output directory', '.')
  .option('-l, --list', 'list all templates available', listTemplates)
  .option('-t, --template <string>', 'project template name')
  .action((name, template, options) => {
    // list available templates, do not execute the generation process
    if (options.list) return;

    // if template is set, check whether is available
    if (options.template) {
      // if not available, log the tips information
      if (!templates.map(({ name }) => name).includes(options.template)) {
        console.log("Template", chalk.bgBlack(options.template), "is not available,", "please select one of template as following:")
        return listTemplates();
      }
    }

    const templateName = options.template || template;
    const { path: templatePath } = templates.filter(({ name }) => name === templateName)[0];
    const outputPath = path.join(options.output, name);
    console.log(chalk.bold("Project name:"), chalk.green(name));
    console.log(chalk.bold("Template selected:"), chalk.green(options.template || template));
    console.log('Start generation process ...');


    if (fs.existsSync(outputPath) && fs.readdirSync(outputPath).length > 0) {
      return console.log("Directory", chalk.bgBlack(outputPath), "is not empty, please select one of the following templates and retry.");
    }

    fs.mkdirpSync(outputPath);

    fs.copySync(path.join(__dirname, '../', templatePath), outputPath, {
      filter: (src, _dst) => /(\.git|build|dist|output|\*\.log)\/?/.test(src) === false
    });

    console.log(chalk.green('Successful generation, enjoy coding! :)'));
  });

cmd.parse(process.argv);
