import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let fileJson1;
let fileJson2;
let fileYml1;
let fileYml2;
beforeEach(() => {
  fileJson1 = getFixturePath('file1.json');
  fileJson2 = getFixturePath('file2.json');
  fileYml1 = getFixturePath('file1.yml');
  fileYml2 = getFixturePath('file2.yml');
});

test('diff JSON files in Stylish format', () => {
  const receivedStylishFormatJsonDiff = gendiff(fileJson1, fileJson2);
  const expectedStylishFormatJsonDiff = readFile('expectStylishFormatJsonFiles.txt');
  expect(receivedStylishFormatJsonDiff).toEqual(expectedStylishFormatJsonDiff);
});

test('diff YML files in Stylish format', () => {
  const receivedStylishFormatYmlDiff = gendiff(fileYml1, fileYml2);
  const expectedStylishFormatYmlDiff = readFile('expectStylishFormatYmlFiles.txt');
  expect(receivedStylishFormatYmlDiff).toEqual(expectedStylishFormatYmlDiff);
});

test('diff JSON files in Plain format', () => {
  const receivedPlainFormatDiff = gendiff(fileJson1, fileJson2, 'plain');
  const expectedPlainFormatDiff = readFile('expectPlainFormatJsonFiles.txt');
  expect(receivedPlainFormatDiff).toEqual(expectedPlainFormatDiff);
});

test('diff JSON files in Json format', () => {
  const receivedJsonFormatDiff = gendiff(fileJson1, fileJson2, 'json');
  const expectedJsonFormatDiff = readFile('expectJsonFormat.txt');
  expect(receivedJsonFormatDiff).toEqual(expectedJsonFormatDiff);
});
