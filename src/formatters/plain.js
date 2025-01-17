import _ from 'lodash';

const getViewValue = (currentValue) => {
  if (_.isPlainObject(currentValue) && currentValue !== null) {
    return '[complex value]';
  }
  return (typeof currentValue === 'string') ? `'${currentValue}'` : currentValue;
};

const plain = (data, correctPath = '') => {
  const result = data
    .filter((element) => element.type !== 'unchanged')
    .map((element) => {
      const fullPathProperty = correctPath ? `${correctPath}.${element.key}` : element.key;
      switch (element.type) {
        case 'added':
          return `Property '${fullPathProperty}' was added with value: ${getViewValue(element.value)}`;
        case 'deleted':
          return `Property '${fullPathProperty}' was removed`;
        case 'changed':
          return `Property '${fullPathProperty}' was updated. From ${getViewValue(element.value1)} to ${getViewValue(element.value2)}`;
        case 'nested':
          return plain(element.children, fullPathProperty);
        default:
          throw new Error('Unknown type!');
      }
    });
  return result.join('\n');
};

export default plain;
