#!/usr/bin/env node

import { Command } from 'commander';

import gendiff from '../index.js';

const program = new Command();

program
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    gendiff(filepath1, filepath2);
  });
program.parse(process.argv);
