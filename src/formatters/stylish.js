import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;
const leftIndent = (depth) => replacer.repeat(depth * spacesCount).slice(0, -2);
const rightIndent = '  ';

const treeValue = (currentValue, currentDepth) => {
  if (!_.isPlainObject(currentValue)) {
    return `${currentValue}`;
  }
  const expandedObj = Object.entries(currentValue).map(([key, value]) => `${leftIndent(currentDepth + 1)}  ${key}: ${treeValue(value, currentDepth + 1)}`);
  return `{\n${expandedObj.join('\n')}\n${leftIndent(currentDepth)}${rightIndent}}`;
};

const stylish = (data) => {
  const iter = (currentData, depth) => {
    const result = currentData.map(({
      key, value, value1, value2, type, children,
    }) => {
      switch (type) {
        case 'added': {
          return `${leftIndent(depth)}+ ${key}: ${treeValue(value, depth)}`;
        }
        case 'deleted': {
          return `${leftIndent(depth)}- ${key}: ${treeValue(value, depth)}`;
        }
        case 'unchanged': {
          return `${leftIndent(depth)}  ${key}: ${treeValue(value, depth)}`;
        }
        case 'changed': {
          return `${leftIndent(depth)}- ${key}: ${treeValue(value1, depth)}\n${leftIndent(depth)}+ ${key}: ${treeValue(value2, depth)}`;
        }
        case 'nested': {
          return `${leftIndent(depth)}  ${key}: {\n${iter(children, depth + 1).join('\n')}\n${leftIndent(depth)}${rightIndent}}`;
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
