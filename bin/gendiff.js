#!/usr/bin/env node

import gendiff from "../index.js";

gendiff('__fixtures__/file1.json', '__fixtures__/file2.json');

import { Command } from "commander";
const program = new Command();

program
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('[filepath1] [filepath2]')
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);