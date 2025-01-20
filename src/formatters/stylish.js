import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;
const getLeftIndent = (depth) => replacer.repeat(depth * spacesCount).slice(0, -2);
const rightIndent = '  ';

const getTreeValue = (currentValue, currentDepth) => {
  if (!_.isPlainObject(currentValue)) {
    return `${currentValue}`;
  }
  const expandedObj = Object.entries(currentValue).map(([key, value]) => `${getLeftIndent(currentDepth + 1)}  ${key}: ${getTreeValue(value, currentDepth + 1)}`);
  return `{\n${expandedObj.join('\n')}\n${getLeftIndent(currentDepth)}${rightIndent}}`;
};

const stylish = (data) => {
  const iter = (currentData, depth) => {
    const result = currentData.map(({
      key, value, value1, value2, type, children,
    }) => {
      switch (type) {
        case 'added': {
          return `${getLeftIndent(depth)}+ ${key}: ${getTreeValue(value, depth)}`;
        }
        case 'deleted': {
          return `${getLeftIndent(depth)}- ${key}: ${getTreeValue(value, depth)}`;
        }
        case 'unchanged': {
          return `${getLeftIndent(depth)}  ${key}: ${getTreeValue(value, depth)}`;
        }
        case 'changed': {
          return `${getLeftIndent(depth)}- ${key}: ${getTreeValue(value1, depth)}\n${getLeftIndent(depth)}+ ${key}: ${getTreeValue(value2, depth)}`;
        }
        case 'nested': {
          return `${getLeftIndent(depth)}  ${key}: {\n${iter(children, depth + 1).join('\n')}\n${getLeftIndent(depth)}${rightIndent}}`;
        }
        default:
          throw new Error('Unknown type of file!');
      }
    });
    return result;
  };
  return `{\n${iter(data, 1).join('\n')}\n}`;
};

export default stylish;
