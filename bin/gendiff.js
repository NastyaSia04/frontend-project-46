#!/usr/bin/env node

import { program } from "commander";

program
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format');

program.parse();