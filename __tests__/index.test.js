import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('diff JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const receivedJsonDiff = gendiff(file1, file2);
  const expectedJsonDiff = readFile('diffJsonFiles.txt');
  expect(receivedJsonDiff).toEqual(expectedJsonDiff);
});
