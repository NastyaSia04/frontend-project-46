import yaml from 'js-yaml';

const parse = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (data, format) => {
  if (!parse[format]) {
    throw new Error(`Unknown format - ${format}! Only .json, .yaml or .yml.`);
  }
  return parse[format](data);
};
