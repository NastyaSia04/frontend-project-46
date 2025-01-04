import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parse.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const incomingDataFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), incomingDataFormat(filepath));
const genDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const arrUniqueKeys = _.union(keys1, keys2).sort();
  const result = [];
  for (const key of arrUniqueKeys) {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        result.push(`    ${key}: ${obj1[key]}`);
      } else {
        result.push(`  - ${key}: ${obj1[key]}`);
        result.push(`  + ${key}: ${obj2[key]}`);
      }
    } else if (Object.hasOwn(obj1, key) && (!Object.hasOwn(obj2, key))) {
      result.push(`  - ${key}: ${obj1[key]}`);
    } else {
      result.push(`  + ${key}: ${obj2[key]}`);
    }
  }
  return `{\n${result.join('\n')}\n}`;
};

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  const difference = genDiff(data1, data2);
  return difference;
};
export default gendiff;
