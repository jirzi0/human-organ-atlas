import { camelCase } from 'lodash';
import moment from 'moment';

export function parseDate(date) {
  return moment(date).format('L');
}

export function capitalizeAndSpace(str) {
  return `${str[0].toUpperCase()}${str.slice(1).replaceAll('_', ' ')}`;
}

export function documentSize(datasets) {
  const sum = datasets
    .map((item) => item.size)
    .reduce((acc, val) => acc + val, 0);

  return `${sum} MB`;
}

const NO_UNIT = new Set(['NA', 'None']);

function getParamStr(value, unit) {
  return `${value}${NO_UNIT.has(unit) ? '' : ` ${unit}`}`;
}

export function processDatasetResponse(datasetResponse) {
  const parameters = datasetResponse.parameters.reduce((acc, param) => {
    const { value, units } = param;
    const paramStr = getParamStr(value, units);

    if (/^[^_]+_/u.test(param.name)) {
      const [, group, name] = param.name.match(/^([^_]+)_(.+)$/u);
      const camelGroup = camelCase(group);

      acc[camelGroup] = acc[camelGroup] || {};
      acc[camelGroup][camelCase(name)] = paramStr;
    } else {
      acc[camelCase(param.name)] = paramStr;
    }

    return acc;
  }, {});

  return {
    ...datasetResponse,
    parameters,
  };
}
