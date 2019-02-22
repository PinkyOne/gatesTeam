/* eslint-disable import/prefer-default-export */

export function snakeToCamel(string) {
  return string.replace(/(_\w)/g, m => m[1].toUpperCase());
}

export const normalizeResponse = ({ errors, data }, period) => {
  const normalizedResponse = { errors, data: {} };
  Object.keys(data).forEach(
    (key) => {
      const newKey = snakeToCamel(key.substring(0, key.indexOf(`_${period}`)));
      normalizedResponse.data[newKey] = data[key];
    },
  );
  return normalizedResponse;
};
