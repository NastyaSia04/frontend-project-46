// выбор формата представления;
import stylish from './stylish.js';
import plain from './plain.js';

const getFormatName = (type) => {
  switch (type) {
    case 'stylish':
      return stylish;
    case 'plain':
      return plain;
    case 'json':
      return JSON.stringify;
    default:
      throw new Error(`Unknown type of processing - ${type}! Only stylish, plain or json.`);
  }
};

export default getFormatName;
