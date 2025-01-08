import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('diff JSON files', () => {
  const fileJson1 = getFixturePath('file1.json');
  const fileJson2 = getFixturePath('file2.json');
  const receivedJsonDiff = gendiff(fileJson1, fileJson2);
  const expectedJsonDiff = readFile('diffJsonFiles.txt');
  expect(receivedJsonDiff).toEqual(expectedJsonDiff);
});

test('diff YML files', () => {
  const fileYml1 = getFixturePath('file1.yml');
  const fileYml2 = getFixturePath('file2.yml');
  const receivedYmlDiff = gendiff(fileYml1, fileYml2);
  const expectedYmlDiff = readFile('diffYmlFiles.txt');
  expect(receivedYmlDiff).toEqual(expectedYmlDiff);
});
