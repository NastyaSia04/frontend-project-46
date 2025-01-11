import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const arrUniqueKeys = _.union(keys1, keys2);
  const sortedKeys = arrUniqueKeys.sort();
  const differenses = sortedKeys.map((key) => {
    if (_.isPlainObject(obj1[key]) && (_.isPlainObject(obj2[key]))) {
      return { key, type: 'nested', children: buildDiff(obj1[key], obj2[key]) };
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      return { key, value: obj2[key], type: 'added' };
    }
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], type: 'deleted' };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, value1: obj1[key], value2: obj2[key], type: 'changed',
      };
    }
    return {
      key, value: obj1[key], type: 'unchanged',
    };
  });
  return differenses;
};
export default buildDiff;
