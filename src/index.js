import fs from "fs";
import path from "path";
import parse from "./parse.js";

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const incomingDataFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), incomingDataFormat(filepath));

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  
};
export default gendiff;