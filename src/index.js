import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import buildDiff from './diffBuilder.js';
import getFormatName from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const incomingDataFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parsers(fs.readFileSync(filepath, ('utf-8')), incomingDataFormat(filepath));

const gendiff = (filepath1, filepath2, formatName) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  const diffTree = buildDiff(data1, data2);
  const formatter = getFormatName(formatName);
  return formatter(diffTree);
};
export default gendiff;
